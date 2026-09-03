import type { IJobExperienceCard } from "../pages/interfaces/IJobExperienceCard"
import { DogPawsWayRL } from "./DogPawsWayRL";
import { DogPawsWayLR } from "./DogPawsWayLR";
import { DogFilledIcon, DogOutlinedIcon } from "../assets/icons";

export const JobExperienceCard = ({ id, experience, length }: IJobExperienceCard): React.JSX.Element => {
    const { enterpriseName, role, modality, startDate, endDate, tasks } = experience;

    return (
        <div style={{ paddingTop: `${id == 0 ? '' : '15px'}` }}>
            <div style={{ paddingTop: `${id == 0 ? '30px' : '30px'}`, margin: "10px 0 30px 0", borderBottom: `1px solid var(--secondary-color)`, borderTop: `${id == 0 ? '1px solid var(--secondary-color)' : '1px solid var(--secondary-color)'}` }}>
                <div style={{ borderLeft: "1px solid var(--secondary-color)", borderRight: "1px solid var(--secondary-color)", padding: "0 30px 0 30px", margin: "0 10px 0 10px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <p style={{ fontWeight: "bolder", color: "var(--text-color)" }}>{enterpriseName}</p>
                        <p style={{ fontWeight: "bolder", fontStyle: "italic", fontSize: "12px", color: "var(--text-color)", alignContent: "center" }}>{modality}</p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "5px 0 0 0" }}>
                        <p style={{ fontSize: "10px", color: "var(--secondary-text)" }}>{role}</p>
                        <p style={{ fontSize: "10px", fontFamily: "'Fraunces'", fontStyle: "italic", color: "var(--secondary-text)" }}>{startDate} - {endDate}</p>
                    </div>
                </div>
                <div style={{ height: "20px" }}>

                </div>
                <div style={{ padding: "0 20px 10px 20px", borderLeft: "1px solid var(--secondary-color)", borderRight: "1px solid var(--secondary-color)", margin: "0 10px 0 10px" }}>
                    <div style={{ borderTop: "1px dotted var(--secondary-color)", padding: "10px 0 0 0" }}>
                        <ul style={{ color: "var(--secondary-color)", padding: "0 0 0 5px" }}>
                            {
                                tasks.map((task, i) => <li key={i} style={{ fontSize: "10px", paddingBottom: "15px", listStyle: "none" }}>
                                    <div style={{ display: "flex" }}>
                                        <div style={{ padding: "0 10px 0 0" }}>
                                            {
                                                i % 2 === 0 ? (<DogOutlinedIcon width={12} height={12} />) : (<DogFilledIcon width={12} height={12} />)
                                            }
                                        </div>
                                        <div>
                                            {task}
                                        </div>
                                    </div>
                                </li>)
                            }
                        </ul>
                    </div>
                </div>
                <div style={{ height: "20px" }}>

                </div>
            </div>

            {
                id !== length - 1 ? (
                    id % 2 == 0 ? (
                        <DogPawsWayLR />
                    ) : (
                        <DogPawsWayRL />
                    )) : (<></>)
            }
        </div>
    )
}