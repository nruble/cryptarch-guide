import './DirectoryHeading.scss'

export default function DirectoryHeading({children}){
    return (
        <section className='directory-heading'>
            <div className='directory-contents'>{children}</div>
        </section>
    )
}