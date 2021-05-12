import HomeLogo from '../img/HomeLogo.svg'
import HomeWelcomeText from '../img/HomeWelcomeText.svg'
import HomeProfilePicture from '../img/HomeProfilePicture.svg'
import {
    Link 
     } from "react-router-dom";

function HomePage() {
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
        <div className='homeContainer'>
            <div className='HomepageLogo'>
                <img src={HomeLogo} alt='Logo Home' className='HomepageLogoImg'/>
            </div>
            <div className='HomeWelcomeText'>
                <img src={HomeWelcomeText} alt='Logo Home' className='HomeWelcomeText'/>
            </div>
            <div className='HomeProfilePicture'>
                <img src={HomeProfilePicture} alt='Logo Home' className='HomeProfilePicture'/>
            </div>
        </div>
    </div>
    )}

    export default HomePage;