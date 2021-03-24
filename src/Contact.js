import ContactImg from './ContactImg.svg'
import MailImg from './MailImg.svg'
import LinkedInLogo from './LinkedInLogo.svg'
import GitHubLogo from './GitHubLogo.svg'
import LogoLaboratoria from './LogoLaboratoria.svg'

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
                        <p className="linkToClick" onClick={() => {openLink('https://app.talento.laboratoria.la/profile/zLSo6EUimqbOp5ZzLtGNawI3QFD2')}}>app.talento.laboratoria.la</p>
                    </div>
                </div>
            </div>
        </div>
    )}

    export default Contact;