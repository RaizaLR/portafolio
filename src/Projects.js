import TuOportunidad from './TuOportunidad.svg'
import Datalovers from './Datalovers.svg'
import BeautyTips from './BeautyTips.svg'
import githubIcon from './githubIcon.svg'

// funcion para abrir links
const openLink = (link) => {
     window.open(link)
 }

function Projects() {
    return (
        <div>
            <div className='projects'>
                    <h1 className='title'>Proyectos</h1>
                    <div className='leftProjectContainer'>
                        <img src={TuOportunidad} alt='Tu Oportunidad' className='projectImg'/>
                        <div className='leftButtonscontainer'>
                            <span className='demoBtn' onClick={() => {openLink('https://raizalr.github.io/ONU_Mujeres/src/index.html')}}>Ver demo</span>
                            <span className='githubBtn' onClick={() => {openLink('https://github.com/RaizaLR/ONU_Mujeres')}}><img src={githubIcon} alt='GitHub' className='githubLogo'/>GitHub</span>
                        </div>
                    </div>
                    <div className='rightProjectContainer'>
                        <div className='rightButtonscontainer'>
                            <span className='demoBtn' onClick={() =>{openLink('https://raizalr.github.io/SCL015-data-lovers/src/')}}>Ver demo</span>
                            <span className='githubBtn' onClick={() =>{openLink('https://github.com/RaizaLR/SCL015-data-lovers')}}><img src={githubIcon} alt='GitHub' className='githubLogo'/>GitHub</span>
                        </div>
                        <img src={Datalovers} alt='Datalovers' className='projectImg'/>
                    </div>
                    <div className='leftProjectContainer'>
                        <img src={BeautyTips} alt='Beauty Tips' className='projectImg'/>
                        <div className='leftButtonscontainer'>
                            <span className='demoBtn' onClick={() => {openLink('https://raizalr.github.io/SCL015-social-network/src/index.html')}}>Ver demo</span>
                            <span className='githubBtn' onClick={() => {openLink('https://github.com/RaizaLR/SCL015-social-network')}}><img src={githubIcon} alt='GitHub' className='githubLogo'/>GitHub</span>
                        </div>
                    </div>
            </div>
        </div>
    )}

    export default Projects;