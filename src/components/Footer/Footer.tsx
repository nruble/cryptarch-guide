import './Footer.scss'
import {useMemo} from 'react'
export default function Footer() {
    const currentYear = new Date().getFullYear()
    const yearDifference = useMemo(()=>{
        let years = currentYear - new Date('2014-09-09').getFullYear()
        const monthDiff = new Date().getMonth() - new Date('2014-09-09').getMonth()
        const dayDiff = new Date().getDate() - new Date('2014-09-09').getDate()
        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            years--
        }
        return years

    },[currentYear])


    return (
        <footer className='site-foot'>
            <div className='footer-info'>
                <span className='footer-copyright'>© {currentYear} Cryptarch Guide</span>
                <span className='footer-attribution'>Destiny & all related media are © Bungie</span>
                <p className='footer-thanks'>Thanks to hundreds of community&nbsp;sources &&nbsp;{yearDifference}&nbsp;years of community&nbsp;developers</p>
            </div>
        </footer>
    )
}