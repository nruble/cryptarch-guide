import './PageHeading.scss'

export default function PageHeading({icon, headline = "", subtitle, flavor}:{icon?:string, headline:string, subtitle?:string, flavor?:string}) {

    return(
        <>
        <section className="page-heading">
            <div className='page-heading-inner'>
            {icon &&
                <img src={`/data/d1_icons${icon}`} alt="" className='page-heading-icon' />
            }
                <div className='page-heading-text'>
                    <h1>{headline}</h1>
                {subtitle &&
                    <p className='page-heading-subtitle'>{subtitle}</p>
                }
                {flavor &&
                    <p className='page-heading-flavortext'>{flavor}</p>
                }
                </div>
            </div>
        </section>
        </>
    )
}