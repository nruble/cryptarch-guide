import { useSearchParams } from 'react-router-dom'

interface FilterOption {
    label: string,
    value: string
}

interface SubSelectGroupProps {
    legend: string,
    multiple?: boolean,
    paramKey: string,
    options: FilterOption[]
}

export default function ItemsSubSelector({ legend, multiple = false, paramKey, options }: SubSelectGroupProps){
    const [searchParams, setSearchParams] = useSearchParams()
    const selected = searchParams.getAll(paramKey)

    const updateParam = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newParam = event.target.value
        const updated = (
            multiple 
                ? Array.from(event.target.selectedOptions, option => option.value).filter(value => value !== '')
                : newParam 
                    ? [newParam]
                    : []
            )

        setSearchParams(prev => {
            const next = new URLSearchParams(prev)
            next.delete(paramKey)
            updated.forEach(v => next.append(paramKey, v))
            return next
        })
    }

    const idName:string = `${legend.replaceAll(' ', '-').toLocaleLowerCase()}-select`

    return (
        <div className={multiple ? `subfilter-select multiselect` : `subfilter-select`}>
            <label htmlFor={idName}>{legend}</label>
            <select 
                id={idName} 
                name={legend} 
                multiple={multiple} 
                defaultValue={multiple ? selected : (selected[0] ?? '')}
                onChange={updateParam}
                >
                {multiple ? 
                    <option value="" className='subfilter-select-default'>{`All`}</option> : 
                    <option value="" className='subfilter-select-default'>{`Select…`}</option>
                }
                {options.map(({ value, label}) => (
                    <option key={value} value={value}>{label}</option>
                ))}
            </select>
        </div>
    )
}