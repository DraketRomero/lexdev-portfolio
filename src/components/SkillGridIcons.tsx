import type { ISkillGrid } from "./interfaces/ISkillGrid";
import { SkillIconComponent } from "./SkillIconComponent";
import './css/skillGridIcon.css'

export const SkillGridIcons = ({ main_title, description, technologies }: ISkillGrid) => {
    return (
        <div className='skill-grid-container'>
            <div>
                <p className='resume-title'>{main_title}</p>
                <p className='resume-description'>{description}</p>
            </div>

            <div className='skill-grid-table'>
                {technologies.map((c, i) => (<SkillIconComponent key={i} section={c.section} tools={c.tools} />))}
            </div>
        </div>
    )
}
