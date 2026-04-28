import type { ReactElement } from 'react'
import './DirectoryHeading.scss'

export default function DirectoryHeading({children}:{children:ReactElement}){
    return (
        <section className='directory-heading'>
            <div className='directory-contents'>{children}</div>
        </section>
    )
}