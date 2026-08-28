import type { ITechComponent } from "./interfaces/ITechComponent";
import './css/SkillIcon.css'

export const SkillIconComponent = ({ section, tools }: ITechComponent) => {
  return (
    <div>
      <p className='title-category-icon'>{section}</p>
      <div className='category-icon-container'>
        {
          tools.map(({ name, Icon }, i) => (
            <div key={i} className='card'>
              <div className='icon-design'><Icon width={40} height={40} /></div>
              <div className='icon-name'>{name}</div>
            </div>
          ))
        }
      </div>
    </div>
  );
};
