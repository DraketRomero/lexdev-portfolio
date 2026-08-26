import { SkillGridIcons } from "../components/SkillGridIcons"
import { backendIcons } from "./BackendTech"
import { DevOpsIcons } from "./DevOpsTech"
import { frontendIcons } from "./FrontendTech"
import { LearningIcons } from "./LearningTech"
import { TestingIcons } from "./TestingTech"
import { toolsIcons } from "./ToolsTech"

export const ResumePage = () => {
    return (
        <div style={{ width: "100%", padding: "40px 40px 0 40px", color: "var(--text-color)", boxSizing: "border-box" }}>
            <div style={{ width: "100%" }}>
                <p style={{ fontFamily: "'Fraunces'", fontWeight: "bolder", fontSize: "28px", fontStyle: "italic" }}>Habilidades y Herramientes</p>
                <p style={{ padding: "10px 0 0 0", fontSize: "13px", color: "var(--secondary-color)", }}>Frameworks y lenguajes con los que he podido desarrollar sistemas.</p>
            </div>

            <SkillGridIcons main_title="Frontend" description="Frameworks con los que desarrollo mis proyectos." technologies={frontendIcons} />
            <SkillGridIcons main_title="Backend" description="Lenguajes y frameworks en los que implemento las reglas de negocio." technologies={backendIcons} />
            <SkillGridIcons main_title="DevOps" description="Tecnologias que uso para el ciclo de CI/CD" technologies={DevOpsIcons} />
            <SkillGridIcons main_title="Testing" description="Herramientas con las que pruebo la funcionalidad de mi codigo" technologies={TestingIcons} />
            <SkillGridIcons main_title="Herramientas" description="Herramientas con las que trabajo en mi flujo de desarrollo." technologies={toolsIcons} />
            <SkillGridIcons main_title="Aprendiendo actualmente" description="Tecnologias que me encuentro aprendiendo." technologies={LearningIcons} />


            <div style={{ padding: "15px 0 40px 0" }}>
                <div>
                    <p style={{ fontFamily: "'Fraunces'", fontWeight: "bolder", fontSize: "25px", fontStyle: "italic" }}>Idiomas</p>
                    <p style={{ color: "var(--secondary-color)", padding: "10px 0 0 0", fontSize: "13px" }}>La manera en la que me comunico con la gente, expreso mis ideas, opiniones tecnicas y sociales.</p>
                </div>

                <div style={{ padding: "30px 0 0 0", display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gridAutoRows: "minmax(200px)", gap: "50px", textAlign: "center" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>
                            <p>Español</p>
                        </div>

                        <div>
                            <p>Nativo</p>
                        </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between" }}>
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
