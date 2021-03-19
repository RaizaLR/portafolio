import TuOportunidad from './TuOportunidad.svg'
import SushiQueen from './SushiQueen.svg'
import BeautyTips from './BeautyTips.svg'
import githubIcon from './githubIcon.svg'
function Projects() {
    return (
        <div>
            <div className='projects'>
                    <h1 className='projectsTitle'>Proyectos</h1>
                    <div className='leftProjectContainer'>
                        <img src={TuOportunidad} alt='Tu Oportunidad'/>
                        <div className='leftButtonscontainer'>
                            <span className='demoBtn'>Ver demo</span>
                            <span className='githubBtn'><img src={githubIcon} alt='GitHub' className='githubLogo'/>GitHub</span>
                        </div>
                    </div>
                    <div className='rightProjectContainer'>
                        <div className='rightButtonscontainer'>
                            <span className='demoBtn'>Ver demo</span>
                            <span className='githubBtn'><img src={githubIcon} alt='GitHub' className='githubLogo'/>GitHub</span>
                        </div>
                        <img src={SushiQueen} alt='Sushi Queen'/>
                    </div>
                    <div className='leftProjectContainer'>
                        <img src={BeautyTips} alt='Beauty Tips'/>
                        <div className='leftButtonscontainer'>
                            <span className='demoBtn'>Ver demo</span>
                            <span className='githubBtn'><img src={githubIcon} alt='GitHub' className='githubLogo'/>GitHub</span>
                        </div>
                    </div>
            </div>
        </div>
    )}

    export default Projects;