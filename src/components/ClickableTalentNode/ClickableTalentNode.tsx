import './ClickableTalentNode.scss'
import { useEffect, useState, useRef } from 'react'
import type { talentGridNodeStep} from '../../types'
import { DialogTrigger, Popover, Button } from 'react-aria-components'


export default function ClickableTalentNode({step}:{step:talentGridNodeStep}) {
    const [isOpen, setIsOpen] = useState(false)
    const [isHoverOpen, setIsHoverOpen] = useState(false)
    const justClosedRef = useRef(false)
    const containerRef = useRef<HTMLDivElement>(null)

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

    const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
        if (containerRef.current?.contains(e.relatedTarget as Node)) return
        setIsOpen(false)
    }

    return (
        <div ref={containerRef} onBlur={handleBlur}>
            <DialogTrigger isOpen={isOpen || isHoverOpen} onOpenChange={() => {}}>
                <Button 
                    aria-label={`${step.nodeStepName}, click for detail`} 
                    className="clickable-talent-btn"
                    onPress={() => {if(!justClosedRef.current) setIsOpen(prev => !prev)}}
                    onMouseEnter={() => {if(!justClosedRef.current) setIsHoverOpen(prev => !prev)}}
                    onMouseLeave={() => {if(!justClosedRef.current) setIsHoverOpen(prev => !prev)}}
                >
                    <img src={`/data/d1_icons${step.icon}`} alt={step.nodeStepName} className='clickable-talent-icon' />
                </Button>
                <Popover
                    placement='right top'
                    shouldFlip={true}
                    offset={32}
                    isNonModal={true}
                        >
                    <div className='clickable-talent-popover'>
                        <section className='clickable-talent-title'>
                            <img src={`/data/d1_icons${step.icon}`} alt="" className='popover-talent-icon' />
                            <h3>{step.nodeStepName}</h3>
                        </section>
                        <section className='clickable-talent-body'>
                            <p>{step.nodeStepDescription}</p>
                        </section>
                    </div>
                </Popover>
            </DialogTrigger>
        </div>
    )
}