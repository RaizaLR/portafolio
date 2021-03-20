import ContactImg from './ContactImg.svg'
import MailImg from './MailImg.svg'
import LinkedInLogo from './LinkedInLogo.svg'
import GitHubLogo from './GitHubLogo.svg'



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
                        <p>Raizalongart@gmail.com</p>
                    </div>
                    <div className='contactInfo'>
                        <img src={LinkedInLogo} alt='linkedin' className='logo'/>
                        <p>Linkedin.com/in/raizalongart</p>
                    </div>
                    <div className='contactInfo'>
                        <img src={GitHubLogo} alt='gitHub' className='logo'/>
                        <p>Github.com/RaizaLR</p>
                    </div>
                </div>
            </div>
        </div>
    )}

    export default Contact;