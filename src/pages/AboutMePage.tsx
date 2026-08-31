import { BookIcon, GymIcon, MusicIcon, TVIcon, VidegameIcon } from "../assets/icons"
import { CardHobbie } from "../components/CardHobbie";
import { MovieSeriesList } from "../components/MovieSeriesList.";
import bunnie from './../assets/img/bunnie2.webp';
import './css/aboutMePage.css'
import bunnie2 from '../assets/img/bunnie3.webp';
import { RandomRoleNameComponent } from "../components/RandomRoleNameComponent";
import { useEmployContext } from "../context/context";
import { useTranslation } from "react-i18next";

export const AboutMePage = () => {
    const { name } = useEmployContext();
    const { t } = useTranslation();

    return (
        <div className='aboutme-main-container'>
            <div className='aboutme-description-container'>
                <div>
                    <div>
                        <p className='aboutme-title'>{t('aboutme.title')}</p>
                    </div>

                    <div className='developer-main-container'>
                        <div className='developer-photo-container'>
                            <div className='developer-photo-main-container'>
                                <img src={bunnie2} alt="ProgramaGODr" className='developer-photo' />
                            </div>
                        </div>

                        <div className='developer-name-role-container'>
                            <div>
                                <p className='developer-name'>{name}</p>

                            </div>
                            <div className='developer-role-container'>
                                <RandomRoleNameComponent />
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className='aboutme-description'>
                            {t('aboutme.devDescription.0')}
                        </p>
                        <p className='aboutme-description'>
                            {t('aboutme.devDescription.1')}
                        </p>
                    </div>
                </div>
            </div>

            <div className='aboutme-hobbies-main-container'>
                <div className='aboutme-hobbies-container'>
                    <p className='aboutme-title'>{t('aboutme.subTitle')}</p>
                    <p className='aboutme-description'>
                        {t('aboutme.subTitleDescription')}
                    </p>

                    <CardHobbie
                        lightMode={false}
                        Icon={MusicIcon}
                        hobbieTitle={`${t('aboutme.cardContainers.music.title')}`}
                        hobbieDescription={`${t('aboutme.cardContainers.music.description')}`}
                        hobbieImages={[bunnie, bunnie, bunnie, bunnie]}
                    />

                    <CardHobbie
                        lightMode={true}
                        Icon={BookIcon}
                        hobbieTitle={`${t('aboutme.cardContainers.lecture.title')}`}
                        hobbieDescription={`${t('aboutme.cardContainers.lecture.description')}`}
                        hobbieImages={[bunnie, bunnie, bunnie, bunnie]}
                    />

                    <CardHobbie
                        lightMode={false}
                        Icon={VidegameIcon}
                        hobbieTitle={`${t('aboutme.cardContainers.game.title')}`}
                        hobbieDescription={`${t('aboutme.cardContainers.game.description')}`}
                        hobbieImages={[bunnie, bunnie, bunnie, bunnie]}
                    />

                    <CardHobbie
                        lightMode={true}
                        Icon={GymIcon}
                        hobbieTitle={`${t('aboutme.cardContainers.gym.title')}`}
                        hobbieDescription={`${t('aboutme.cardContainers.gym.description')}`}
                        hobbieImages={[bunnie, bunnie, bunnie, bunnie]}
                    />

                    <CardHobbie
                        lightMode={false}
                        Icon={TVIcon}
                        hobbieTitle={`${t('aboutme.cardContainers.tv.title')}`}
                        hobbieDescription={`${t('aboutme.cardContainers.tv.description')}`}
                        children={<MovieSeriesList />}
                        hobbieImages={[bunnie, bunnie, bunnie, bunnie]}
                    />
                </div>
            </div>
        </div>
    )
}