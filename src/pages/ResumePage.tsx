import { SkillGridIcons } from "../components/SkillGridIcons"
import { backendIcons } from "./BackendTech"
import { DevOpsIcons } from "./DevOpsTech"
import { frontendIcons } from "./FrontendTech"
import { LearningIcons } from "./LearningTech"
import { TestingIcons } from "./TestingTech"
import { toolsIcons } from "./ToolsTech"
import { useTranslation } from 'react-i18next';
import './css/resumePage.css'
import { SkillsFilledIcon } from "../assets/icons"

export const ResumePage = () => {
    const { t } = useTranslation();

    return (
        <div className='resume-main-container'>
            <div className='resume-title-container'>
                <p className='resume-title'>{t('skills.title')}</p>
                <p className='resume-description'>{t('skills.subtitle')}</p>
            </div>

            <SkillGridIcons main_title={`${t('skills.grid.0.name')}`} description={`${t('skills.grid.0.description')}`} technologies={frontendIcons} />
            <SkillGridIcons main_title={`${t('skills.grid.1.name')}`} description={`${t('skills.grid.1.description')}`} technologies={backendIcons} />
            <SkillGridIcons main_title={`${t('skills.grid.2.name')}`} description={`${t('skills.grid.2.description')}`} technologies={DevOpsIcons} />
            <SkillGridIcons main_title={`${t('skills.grid.3.name')}`} description={`${t('skills.grid.3.description')}`} technologies={TestingIcons} />
            <SkillGridIcons main_title={`${t('skills.grid.4.name')}`} description={`${t('skills.grid.4.description')}`} technologies={toolsIcons} />
            <SkillGridIcons main_title={`${t('skills.grid.5.name')}`} description={`${t('skills.grid.5.description')}`} technologies={LearningIcons} />


            <div className='resume-idioms-container'>
                <div>
                    <p className='resume-title'>{t('skills.lang.title')}</p>
                    <p className='resume-description'>{t('skills.lang.description')}</p>
                </div>

                <div className='skill-grid-table'>
                    <div className="resume-idiom">
                        <div>
                            <p className='language-name'>{t('skills.lang.languages.0.name')}</p>
                        </div>

                        <div>
                            <p className='language-level'>{t('skills.lang.languages.0.level')}</p>
                        </div>
                    </div>

                    <div className="resume-idiom">
                        <div>
                            <p className='language-name'>{t('skills.lang.languages.1.name')}</p>
                        </div>

                        <div>
                            <p className='language-level'>{t('skills.lang.languages.1.level')}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='resume-idioms-container education-container'>
                <div>
                    <p className='resume-title'>Educacion</p>
                </div>

                <div>
                    <div>
                        <div className='information-education-container'>
                            <div className='icon-education-container'>
                                <SkillsFilledIcon width={20} height={20} />
                            </div>

                            <div>
                                <p className='formation-title-name'>Ingenieria en Tecnologias de la informacion y Comunicaciones</p>
                                <p className='school-title-name'>Instituto Tecnologico de Puebla</p>
                                <p className='location-school'>Puebla, Pue.</p>
                                <p className='timeline-school-studied'>Ago. 2014 - Dic. 2019</p>
                            </div>
                        </div>

                        <div className='information-education-container'>
                            <div className='icon-education-container'>
                                <SkillsFilledIcon width={20} height={20} />
                            </div>

                            <div>
                                <p className='formation-title-name'>PTB. Mantenimiento de equipo de computo y control digital.</p>
                                <p className='school-title-name'>CONALEP (Colegio Nacional de Educacion Prfesional Tecnica)</p>
                                <p className='location-school'>Puebla, Pue.</p>
                                <p className='timeline-school-studied'>Ago. 2011 - Jul. 2014</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
