import './Footer.scss'
export default function Footer() {
    return (
        <footer className='site-foot'>
            <div className='footer-info'>
                <span className='footer-copyright'>© {new Date().getFullYear()} Cryptarch Guide</span>
                <span className='footer-attribution'>Destiny & all related media are © Bungie</span>
                <p className='footer-thanks'>Special Thanks to hundreds of community&nbsp;sources &&nbsp;11+&nbsp;years of community&nbsp;developers</p>
            </div>
        </footer>
    )
}