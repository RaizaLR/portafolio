import AboutMe from '../img/AboutMe.svg'
import {
    Link 
     } from "react-router-dom";

function About() {
    return (
        <div className="App">
        <header className="App-header">
            <li className="headerTitle">
            <Link to="/">
                Raiza Longart
                <br/> 
                <div className="headerSubtitle">
                Front-end developer
                </div>
            </Link>
            </li>
            <nav className="stroke">
            <ul>
                <li><Link to="/proyectos">Proyectos</Link></li>
                <li><Link to="/sobre-mi">Sobre mi</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
            </ul>
            </nav>
        </header>
        <div className='aboutMeContainer'>
            <h1 className='title'>Sobre mi</h1>
            <article className='aboutMeContent'>
                <img src={AboutMe} alt='Sobre Mi' className='aboutMeImg'/>
            </article>
        </div>
    </div>
    )}

    export default About;