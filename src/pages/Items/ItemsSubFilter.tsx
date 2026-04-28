import { useSearchParams } from 'react-router-dom'
import { RiCheckFill } from 'react-icons/ri'


interface FilterOption {
    label: string,
    value: string
}

interface SubFilterGroupProps {
    legend: string,
    isList?: boolean,
    paramKey: string,
    options: FilterOption[]
}

export default function ItemsSubFilter({ legend, isList = true, paramKey, options }: SubFilterGroupProps) {
    const [searchParams, setSearchParams] = useSearchParams()
    const selected = searchParams.getAll(paramKey)

    const updateParam = (value:string) => {
        setSearchParams(prev => {
            const next = new URLSearchParams(prev)
            next.delete(paramKey)
            const updated = selected.includes(value)
                ? selected.filter(v => v !== value)
                : [...selected, value]
            updated.forEach(v => next.append(paramKey, v))
            return next
        })
    }
    
    return (
        <fieldset aria-label={legend} className={isList ? 'subfilter-set list-style' : 'subfilter-set button-style'}>
            {options.map(({ value, label}) => (
                <label key={value} data-selected={selected.includes(value)}>
                    <span className='input-hider'>
                        <input
                            type='checkbox'
                            checked={selected.includes(value)}
                            onChange={()=> updateParam(value)}
                            />
                        </span>
                    {label}
                    {isList && 
                    <>
                    <span className='ruler'></span>
                    <span className='results-subfilter-checkbox'>
                        <RiCheckFill />
                    </span>
                    </>
                    }
                </label>
            ))}
        </fieldset>
    )
}