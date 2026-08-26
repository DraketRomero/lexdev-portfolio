import type { ISkillGrid } from "./interfaces/ISkillGrid";
import { SkillIconComponent } from "./SkillIconComponent";

export const SkillGridIcons = ({ main_title, description, technologies }: ISkillGrid) => {
    return (
        <div style={{ padding: "25px 0 30px 0", borderBottom: "1px solid var(--secondary-color)" }}>
            <div>
                <p style={{ fontFamily: "'Fraunces'", fontWeight: "bolder", fontSize: "25px", fontStyle: "italic" }}>{main_title}</p>
                <p style={{ color: "var(--secondary-color)", padding: "10px 0 0 0", fontSize: "13px" }}>{description}</p>
            </div>

            <div style={{ padding: "30px 0 0 0", display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gridAutoRows: "minmax(200px)", gap: "50px", textAlign: "center" }}>
                {technologies.map((c, i) => (<SkillIconComponent key={i} section={c.section} tools={c.tools} />))}
            </div>
        </div>
    )
}
