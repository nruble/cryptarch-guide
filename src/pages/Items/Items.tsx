import './Items.scss'
import ItemsFiltering from './ItemsFiltering'
import ItemsResultDisplay from './ItemsResultDisplay'
import DirectoryHeading from '../../components/DirectoryHeading/DirectoryHeading'
import { useMediaQuery } from 'react-responsive'

export default function Items(){
    const isAboveTablet = useMediaQuery({ query: '(min-width: 769px)'})

    return (
        <>
        <DirectoryHeading>
            <h1>Item Database</h1>
        </DirectoryHeading>
        <section className='items-database-wrapper'>
            {isAboveTablet && <ItemsFiltering />}
            <ItemsResultDisplay />
        </section>
        </>
    )
}