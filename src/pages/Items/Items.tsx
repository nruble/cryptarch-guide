import './Items.scss'
import ItemsFiltering from './ItemsFiltering'
import ItemsResultDisplay from './ItemsResultDisplay'
import DirectoryHeading from '../../components/DirectoryHeading/DirectoryHeading'

export default function Items(){
    return (
        <>
        <DirectoryHeading>
            <h1>Item Database</h1>
        </DirectoryHeading>
        <section className='items-database-wrapper'>
            <ItemsFiltering />
            <ItemsResultDisplay />
        </section>
        </>
    )
}