import './TalentGrid.scss'
import { useEffect, useState, useMemo, Fragment } from 'react'
import { Link, useParams, useLocation, useLoaderData } from 'react-router-dom'
import type { DestinyInventoryItem, DestinyTalentGrid, talentGridNode, talentGridNodeStep} from '../../../../types'
import { filterNodes, gatherOrnamentItemHashes, hasChroma } from '../../../../utilities/NodeFiltration'
import ClickableTalentNode from '../../../../components/ClickableTalentNode/ClickableTalentNode'
import OrnamentLink from '../../../../components/OrnamentLink/OrnamentLink'


export default function TalentGrid({itemTalentHash = 0, itemType = 0}:{itemTalentHash:number, itemType:number}){
  const { talentGrid }  = useLoaderData()
  const talentData:DestinyTalentGrid = useMemo(()=>{
      return talentGrid[itemTalentHash]
  }, [talentGrid, itemTalentHash])
  
  const sortedNodeData:talentGridNode[] = useMemo(()=>{
      const nodesData:talentGridNode[] = talentData.nodes ?? []
      return nodesData.toSorted((a:talentGridNode, b:talentGridNode):number => {
          const sortColumn = a.column - b.column
          const sortRow = a.row - b.row
          return (
              sortColumn 
              || sortRow
          )
      })
  },[talentData])

  const filteredNodes:talentGridNode[] = useMemo(()=>{
      return filterNodes(sortedNodeData)
  },[sortedNodeData])

  const ornamentHashArray:number[] = useMemo(()=>{
      return gatherOrnamentItemHashes(sortedNodeData)
  },[sortedNodeData])

  const itemHasChroma:boolean = useMemo(()=> {
      return hasChroma(sortedNodeData)
  }, [sortedNodeData])

  const nodeColumnCount = useMemo(()=>{
      return [...new Set(filteredNodes.map(node => node.column))]
  }, [filteredNodes])


  function renderNodeDotMap(nodeArray:talentGridNode[]){
      const columnElements = nodeColumnCount.map(col => {
          const columnNodes = nodeArray.filter(node => node.column === col)
          const nodeRowCount =  [...new Set(columnNodes.map(node => node.row))]
          const columnRowElements = nodeRowCount.map(row => {
              return (
                  <span className='talent-dotmap-col-row' key={`${col}-${row}`}></span>
              )
          })
          return (
              <div className='talent-dotmap-column' key={col}>
                  {columnRowElements}
              </div>
          )
      })
      return (
          <div className='talent-dotmap-container'>
              {columnElements}
          </div>
      )
  }

  function renderTalentGrid(nodeArray:talentGridNode[]){
      const columnElements = nodeColumnCount.map(col => {
          const columnNodes = nodeArray.filter(node => node.column === col)
          function isColumnAllSingletons():boolean{
              const filterCheck:boolean[] = columnNodes.map(node => {
                  if(node.steps.length <= 1){return true}
                  return false
              })
              return filterCheck.every(value => value === true)
          }
          const nodeRowCount =  [...new Set(columnNodes.map(node => node.row))]
          const columnRowElements = nodeRowCount.map(row => {
              const rowNodes = [...columnNodes.filter(node => node.row === row)]
              const rowStepElements = rowNodes.map(node => {
                  return node.steps.map((step:talentGridNodeStep) => {
                      return <ClickableTalentNode step={step} key={step.stepIndex} />
                  })
              })


              return (
                  <div className={`talent-grid-col-row ${isColumnAllSingletons() && 'singleton'}`} key={`${col}-${row}`}>
                      {rowStepElements}
                  </div>
              )
          })
          return (
              <div className='talent-grid-column' key={col}>
                  {columnRowElements}
              </div>
          )
      })
      return (
          <div className='talent-grid-container'>
              {columnElements}
          </div>
      )
  }

  function renderOrnaments(){
      const ornamentElements = ornamentHashArray.map(hash => {
          return <OrnamentLink itemHash={hash} key={hash}/>
      })
      return ornamentElements
  }

  return (
      <section className='itemdetail-talents'>
          <h2 className='talents-heading'>
          {
              itemType === 3 ? `WEAPON` 
              : itemType === 2 ? `ARMOR`
              : ''
          } PERKS
          </h2>
          <div className='talents-block'>
              {renderNodeDotMap(filteredNodes)}
              {renderTalentGrid(filteredNodes)}
          </div>
          {(ornamentHashArray.length > 0 || itemHasChroma) &&
              <section className='itemdetail-ornaments'>
                  <h3 className='itemdetail-ornaments-title'>ORNAMENTS</h3>
                  <div className='itemdetail-ornaments-container'>
                  {
                  ornamentHashArray.length > 0 && renderOrnaments()
                  }
                  {itemHasChroma && 
                      <div className="chroma-link-box">
                          <div className='chroma-link-icon'>
                              <img src={'/data/d1_icons/img/destiny_content/items/multi-chroma-icon.png'} alt="" />
                          </div>
                          <div className='chroma-link-text'>
                              <h3>CHROMA</h3>
                              <p>Recovered technology that can alter armor with Chroma multi-channel heat sinks.</p>
                          </div>
                      </div>
                  }
                  </div>
              </section>
          }
      </section>
  )
}