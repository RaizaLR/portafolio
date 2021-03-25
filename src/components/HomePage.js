import HomeLogo from '../img/HomeLogo.svg'
import HomeWelcomeText from '../img/HomeWelcomeText.svg'
import HomeProfilePicture from '../img/HomeProfilePicture.svg'

function HomePage() {
    return (
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
    )}

    export default HomePage;