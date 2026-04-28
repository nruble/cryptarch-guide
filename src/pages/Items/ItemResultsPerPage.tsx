import { useSearchParams } from 'react-router-dom'
import './ItemResultsPerPage.scss'

interface FilterOption {
    value: number
}

interface SubSelectGroupProps {
    options: FilterOption[]
}

export default function ItemResultsPerPage({ options }: SubSelectGroupProps){
    const [searchParams, setSearchParams] = useSearchParams()
    const selected = searchParams.getAll('display')

    const updateParam = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newParam = event.target.value
        const updated = (
            newParam 
                ? [newParam]
                : []
            )

        setSearchParams(prev => {
            const next = new URLSearchParams(prev)
            next.delete('display')
            updated.forEach(v => next.append('display', v))
            return next
        })
    }

    return (
        <div className='perpage-display'>
            <label htmlFor="perpage-selector">Items Per Page</label>
            <select 
                id="perpage-selector" 
                name="perpage-selector"
                defaultValue={selected[0] ?? "30"}
                onChange={updateParam}
                >
                {options.map(({ value }) => (
                    <option key={value} value={value}>{value}</option>
                ))}
            </select>
        </div>
    )
}