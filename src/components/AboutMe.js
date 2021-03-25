import AboutMe from '../img/AboutMe.svg'

function About() {
    return (
        <div className='aboutMeContainer'>
            <h1 className='title'>Sobre mi</h1>
            <article className='aboutMeContent'>
                <img src={AboutMe} alt='Sobre Mi' className='aboutMeImg'/>
            </article>
        </div>
    )}

    export default About;