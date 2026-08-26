import { SkillGridIcons } from "../components/SkillGridIcons"
import { backendIcons } from "./BackendTech"
import { DevOpsIcons } from "./DevOpsTech"
import { frontendIcons } from "./FrontendTech"
import { LearningIcons } from "./LearningTech"
import { TestingIcons } from "./TestingTech"
import { toolsIcons } from "./ToolsTech"
import './css/resumePage.css'

export const ResumePage = () => {
    return (
        <div className='resume-main-container'>
            <div className='resume-title-container'>
                <p className='resume-title'>Habilidades y Herramientes</p>
                <p className='resume-description'>Frameworks y lenguajes con los que he podido desarrollar sistemas.</p>
            </div>

            <SkillGridIcons main_title="Frontend" description="Frameworks con los que desarrollo mis proyectos." technologies={frontendIcons} />
            <SkillGridIcons main_title="Backend" description="Lenguajes y frameworks en los que implemento las reglas de negocio." technologies={backendIcons} />
            <SkillGridIcons main_title="DevOps" description="Tecnologias que uso para el ciclo de CI/CD" technologies={DevOpsIcons} />
            <SkillGridIcons main_title="Testing" description="Herramientas con las que pruebo la funcionalidad de mi codigo" technologies={TestingIcons} />
            <SkillGridIcons main_title="Herramientas" description="Herramientas con las que trabajo en mi flujo de desarrollo." technologies={toolsIcons} />
            <SkillGridIcons main_title="Aprendiendo actualmente" description="Tecnologias que me encuentro aprendiendo." technologies={LearningIcons} />


            <div className='resume-idioms-container'>
                <div>
                    <p className='resume-title'>Idiomas</p>
                    <p className='resume-description'>La manera en la que me comunico con la gente, expreso mis ideas, opiniones tecnicas y sociales.</p>
                </div>

                <div className='skill-grid-table'>
                    <div className="resume-idiom">
                        <div>
                            <p>Español</p>
                        </div>

                        <div>
                            <p>Nativo</p>
                        </div>
                    </div>

                    <div className="resume-idiom">
                        <div>
                            <p>Inglés</p>
                        </div>

                        <div>
                            <p>C1  ·  Avanzado</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
