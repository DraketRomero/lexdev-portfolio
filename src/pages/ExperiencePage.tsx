import { JobExperienceCard } from "../components/JobExperienceCard"
import { jobs } from "./data/JobExperience"

export const ExperiencePage = () => {
    return (
        <div style={{ width: "100%" }}>
            <div style={{ padding: "20px 40px 0 40px" }}>
                <div style={{ padding: "0 0 15px 0" }}>
                    <p style={{ fontSize: "25px", fontStyle: "italic", fontWeight: "bolder", fontFamily: "'Fraunces'", color: "var(--text-color)" }}>Experience</p>
                </div>

                {
                    jobs.map((exp, i) => <JobExperienceCard key={i} id={i}  experience={exp} length={jobs.length} />)
                }
            </div>
        </div>
    )
}