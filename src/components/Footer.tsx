import { NavLink } from 'react-router';
import './css/footer.css';
import { useTranslation } from 'react-i18next';
import {
    AboutMeFilledIcon,
    AboutMeOutlinedIcon,
    ContactFilledIcon,
    ContactOutlinedIcon,
    DogFilledIcon,
    DogOutlinedIcon,
    ExperienceFilledIcon,
    ExperienceOutlinedIcon,
    ProjectFilledIcon,
    ProjectOutilinedIcon,
    SkillsFilledIcon,
    SkillsOutlinedIcon
} from '../assets/icons';
import { useEmployContext } from '../context/context';


export const Footer = () => {
    const { t } = useTranslation();
    const { alias, email, name, phone, location, social_media } = useEmployContext();

    return (
        <footer>
            <div className='main-footer-container'>
                <div className='message-main-container'>
                    <div className='title-container'>
                        <span className='title-name'>{"</>"} {name} - {alias}</span>
                    </div>
                    <div className='message-container'>
                        <p className='message-paragraph'>{t('footer.primaryText')}</p>
                        <p className='message-paragraph'>
                            {t('footer.secondaryText.0')}
                            <a href={`${social_media[0].url}/lexdev-portfolio`} rel="noopener noreferrer" target="_blank" className='paragraph'>{t('footer.secondaryText.1')}</a> {t('footer.secondaryText.2')} <a href={`${social_media[1].url}`} className='paragraph' rel="noopener noreferrer" target="_blank" >{t('footer.secondaryText.3')}</a>{t('footer.secondaryText.4')}<a href='https://github.com/DraketRomero/lexdev-portfolio' className='paragraph' rel="noopener noreferrer" target="_blank">{t('footer.secondaryText.5')}</a>{t('footer.secondaryText.6')}
                        </p>
                    </div>
                </div>
                <div className='links-main-container'>
                    <div className='title-container second-title-container'>
                        <p className='title-footer'>{t('footer.navigation.title')}</p>
                    </div>
                    <div className='links-container'>
                        <ul className='list-items'>
                            <li className='list-footer-item'>
                                <NavLink to='/huellitas' viewTransition className='routes'>
                                    <div className="icons-footer">
                                        <DogFilledIcon className='icons-filled' />
                                        <DogOutlinedIcon className='icons-outlined' />
                                        {t('footer.navigation.options.0')}
                                    </div>
                                </NavLink>
                            </li>
                            <li className='list-footer-item'>
                                <NavLink to='/projects' viewTransition className='routes'>
                                    <div className="icons-footer">
                                        <ProjectOutilinedIcon className='icons-outlined' />
                                        <ProjectFilledIcon className='icons-filled' />
                                        {t('footer.navigation.options.1')}
                                    </div>
                                </NavLink>
                            </li>
                            <li className='list-footer-item'>
                                <NavLink to='/experience' viewTransition className='routes'>
                                    <div className="icons-footer">
                                        <ExperienceOutlinedIcon className='icons-outlined' />
                                        <ExperienceFilledIcon className='icons-filled' />
                                        {t('footer.navigation.options.2')}
                                    </div>
                                </NavLink>
                            </li>
                            <li className='list-footer-item'>
                                <NavLink to='/about-me' viewTransition className='routes'>
                                    <div className="icons-footer">
                                        <AboutMeFilledIcon className='icons-filled' />
                                        <AboutMeOutlinedIcon className='icons-outlined' />
                                        {t('footer.navigation.options.3')}
                                    </div>
                                </NavLink>
                            </li>
                            <li className='list-footer-item'>
                                <NavLink to='/contact' viewTransition className='routes'>
                                    <div className="icons-footer">
                                        <ContactFilledIcon width={24} height={15} className='icons-filled' />
                                        <ContactOutlinedIcon width={24} height={15} className='icons-outlined' />
                                        {t('footer.navigation.options.4')}
                                    </div>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='contact-main-container'>
                    <div className='contact-container'>
                        <ul className='list-items'>
                            <li className='title-footer'>{t('footer.navigation.contact.title')}</li>
                            <li className='list-contact-item'><a href={`mailto:${email}`} className='routes'>{email}</a></li>
                            <li className='list-contact-item'><a href="tel:+522226134531" className='routes'>{phone}</a></li>
                        </ul>
                    </div>
                    <div className='copyright-container'>
                        <span className='copyright-text '>© 2026 {name} · {location} {t('footer.navigation.copyright')} ❤️</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}