import type { ITechComponent } from "./interfaces/ITechComponent";
import './css/SkillIcon.css'

export const SkillIconComponent = ({ section, tools }: ITechComponent) => {
  return (
    <div>
      <p style={{ textAlign: "left", padding: "0 0 20px 0", fontWeight: "bold" }}>{section}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", rowGap: "50px"  }}>
        {
          tools.map(({name, Icon}, i) => (
            <div style={{ textAlign: "center" }} key={i} className='card'>
              <div style={{ color: "var(--secondary-text)" }}><Icon width={50} height={50} /></div>
              <div style={{ color: "var(--secondary-color)" }}>{name}</div>
            </div>
          ))
        }
      </div>
    </div>
  );
};
