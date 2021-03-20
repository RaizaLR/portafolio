import HomeLogo from './HomeLogo.svg'
import HomeWelcomeText from './HomeWelcomeText.svg'
import HomeProfilePicture from './HomeProfilePicture.svg'

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