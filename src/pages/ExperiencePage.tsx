import { JobExperienceCard } from "../components/JobExperienceCard"
import { jobs } from "./data/JobExperience"
import './css/experiencePage.css';

export const ExperiencePage = () => {
    return (
        <div className='experience-container'>
            <div className='experience-main-container'>
                <div className='experience-title-container'>
                    <p className='experience-title'>Experience</p>
                </div>

                {
                    jobs.map((exp, i) => <JobExperienceCard key={i} id={i}  experience={exp} length={jobs.length} />)
                }
            </div>
        </div>
    )
}