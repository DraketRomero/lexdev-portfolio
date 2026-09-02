import type { IJobExperienceCard } from "../pages/interfaces/IJobExperienceCard"
import { DogPawsWayRL } from "./DogPawsWayRL";
import { DogPawsWayLR } from "./DogPawsWayLR";

export const JobExperienceCard = ({ id, experience, length }: IJobExperienceCard): React.JSX.Element => {
    const { enterpriseName, role, modality, startDate, endDate, tasks } = experience;

    return (
        <div style={{ paddingTop: `${id == 0 ? '' : '15px'}` }}>
            <div style={{ paddingTop: `${id == 0 ? '15px' : '30px'}`, margin: "10px 0 30px 0",  borderBottom: `${id !== length - 1 ? '1px solid var(--secondary-color)' : ''}`, borderTop: `${id == 0 ? '' : '1px solid var(--secondary-color)'}` }}>
                <div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <p style={{ fontWeight: "bolder", color: "var(--text-color)" }}>{enterpriseName}</p>
                        <p style={{ fontWeight: "bolder", fontStyle: "italic", fontSize: "12px", color: "var(--text-color)", alignContent: "center" }}>{modality}</p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "5px 0 0 0" }}>
                        <p style={{ fontSize: "10px", color: "var(--secondary-text)" }}>{role}</p>
                        <p style={{ fontSize: "10px", fontFamily: "'Fraunces'", fontStyle: "italic", color: "var(--secondary-text)" }}>{startDate} - {endDate}</p>
                    </div>
                </div>

                <div style={{ padding: "20px 0 10px 0" }}>
                    <div style={{ borderTop: "1px dotted var(--secondary-color)", padding: "10px 0 0 0" }}>
                        <ul style={{ color: "var(--secondary-color)", padding: "0 0 0 10px" }}>
                            {
                                tasks.map((task, i) => <li key={i} style={{ fontSize: "10px", paddingBottom: "15px" }}>{task}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>

            {
              id !== length - 1 ? (
                id % 2 == 0 ? (
                  <DogPawsWayLR />
                ) :  (
                  <DogPawsWayRL />
                )) : (<></>)
            }
        </div>
    )
}