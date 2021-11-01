import ContactImg from '../img/ContactImg.svg';
import MailImg from '../img/MailImg.svg';
import LinkedInLogo from '../img/LinkedInLogo.svg';
import GitHubLogo from '../img/GitHubLogo.svg';
import LogoLaboratoria from '../img/LogoLaboratoria.svg';

// funcion para abrir links
const openLink = (link) => {
    window.open(link)
}

function Contact() {
    return (
        <div className='contactSectionContainer'>
            <h1 className='title'>Contacto</h1>
            <div className='contactSectionContent'>
                <div className='contactImgContainer'>
                    <img src={ContactImg} alt='Contacto' className='contactImg'/>
                </div>
                <div>
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
    )}

    export default Contact;