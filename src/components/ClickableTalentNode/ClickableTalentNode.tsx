import './ClickableTalentNode.scss'
import { useEffect, useState, useMemo, useRef, Fragment } from 'react'
import type { talentGridNodeStep} from '../../types'
import { DialogTrigger, Popover, Button, OverlayArrow } from 'react-aria-components'


export default function ClickableTalentNode({step}:{step:talentGridNodeStep}) {
    const [isOpen, setIsOpen] = useState(false)
    const justClosedRef = useRef(false)

    useEffect(() => {
        if (!isOpen) return

        const handler = () => {
            setIsOpen(false)
            justClosedRef.current = true
            setTimeout(()=> {justClosedRef.current = false}, 100)
        }

        document.addEventListener('mousedown', handler, {capture:true})
        return () => document.removeEventListener('mousedown', handler, {capture:true})
    }, [isOpen])

    return (
        <DialogTrigger isOpen={isOpen} onOpenChange={() => {}}>
            <Button 
                aria-label={`${step.nodeStepName}, click for detail`} 
                className="clickable-talent-btn"
                onPress={() => {if(!justClosedRef.current) setIsOpen(true)}}    
            >
                <img src={`https://bungie.net${step.icon}`} alt={step.nodeStepName} className='clickable-talent-icon' />
            </Button>
            <Popover
                placement='right top'
                shouldFlip={true}
                offset={32}
                isNonModal={true}
                    >
                <div className='clickable-talent-popover'>
                    <section className='clickable-talent-title'>
                        <img src={`https://bungie.net${step.icon}`} className='popover-talent-icon' />
                        <h3>{step.nodeStepName}</h3>
                    </section>
                    <section className='clickable-talent-body'>
                        <p>{step.nodeStepDescription}</p>
                    </section>
                </div>
            </Popover>
        </DialogTrigger>
    )
}