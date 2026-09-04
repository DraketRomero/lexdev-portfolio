import type { IJobExperienceCard } from "../pages/interfaces/IJobExperienceCard"
import { DogPawsWayRL } from "./DogPawsWayRL";
import { DogPawsWayLR } from "./DogPawsWayLR";
import { DogFilledIcon, DogOutlinedIcon } from "../assets/icons";
import './css/jobExperience.css';

export const JobExperienceCard = ({ id, experience, length }: IJobExperienceCard): React.JSX.Element => {
    const { enterpriseName, role, modality, startDate, endDate, tasks } = experience;

    return (
        <div className={`${id == 0 ? 'job-experience-first-card-main-container' : 'job-experience-remaining-card-main-container'}`}>
            <div className='job-experience-card-container'>
                <div className='job-experience-card-info-main-container'>
                    <div className='job-experience-info'>
                        <p className='job-experience-enterprise-name'>{enterpriseName}</p>
                        <p className='job-experience-modality'>{modality}</p>
                    </div>
                    <div className='job-experience-info'>
                        <p className='job-experience-role'>{role}</p>
                        <p className='job-experience-duration'>{startDate} - {endDate}</p>
                    </div>
                </div>
                <div className='job-experience-block'></div>
                <div className='job-experience-task-container'>
                    <div className='job-experience-task-main-container'>
                        <ul className='job-experience-task-list'>
                            {
                                tasks.map((task, i) => <li key={i} className='job-experience-task-list-item'>
                                    <div className='job-experience-task-list-item-container'>
                                        <div className='job-experience-task-list-item-main-container'>
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
                <div className='job-experience-block'></div>
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