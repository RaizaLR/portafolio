import ContactImg from '../img/ContactImg.svg';
import MailImg from '../img/MailImg.svg';
import LinkedInLogo from '../img/LinkedInLogo.svg';
import GitHubLogo from '../img/GitHubLogo.svg';
import LogoLaboratoria from '../img/LogoLaboratoria.svg';
import {
    Link 
     } from "react-router-dom";

// funcion para abrir links
const openLink = (link) => {
    window.open(link)
}

function Contact() {
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
        <div className='contactSectionContainer'>
            <h1 className='title'>Contacto</h1>
            <div className='contactSectionContent'>
                <div className='contactImgContainer'>
                    <img src={ContactImg} alt='Contacto' className='contactImg'/>
                </div>
                <div>
                    <div className='contactInfo'>
                        <img src={MailImg} alt='Gmail' className='logo'/>
                        <a href="mailto:raizalongart@gmail.com"><p className="linkToClick">Raizalongart@gmail.com</p></a>
                    </div>
                    <div className='contactInfo'>
                        <img src={LinkedInLogo} alt='linkedin' className='logo'/>
                        <p className="linkToClick" onClick={() => {openLink('https://linkedin.com/in/raizalongart')}}>Linkedin.com/in/raizalongart</p>
                    </div>
                    <div className='contactInfo'>
                        <img src={GitHubLogo} alt='gitHub' className='logo'/>
                        <p className="linkToClick" onClick={() => {openLink('https://github.com/RaizaLR')}}>Github.com/RaizaLR</p>
                    </div>
                    <div className='contactInfo'>
                        <img src={LogoLaboratoria} alt='appTalentoLab' className='logo'/>
                        <p className="linkToClick" onClick={() => {openLink('https://app.talento.laboratoria.la/profile/zLSo6EUimqbOp5ZzLtGNawI3QFD2')}}>App talento laboratoria</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )}

    export default Contact;