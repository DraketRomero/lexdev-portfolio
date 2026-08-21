import { NavLink } from 'react-router';
import './css/footer.css';
import { DogIcon } from '../assets/icons';
import { useTranslation } from 'react-i18next';


export const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer>
            <div className='main-footer-container'>
                <div className='message-main-container'>
                    <div className='title-container'>
                        <span className='title-name'>{"</>"} Diego Romero - DraketDev</span>
                    </div>
                    <div className='message-container'>
                        <p className='message-paragraph'>{t('footer.primaryText')}</p>
                        <p className='message-paragraph'>
                            {t('footer.secondaryText.0')}
                            <a href='https://github.com/DraketRomero/lexdev-portfolio' rel="noopener noreferrer" target="_blank" className='paragraph'>{t('footer.secondaryText.1')}</a> {t('footer.secondaryText.2')} <a href='https://github.com/DraketRomero/lexdev-portfolio' className='paragraph' rel="noopener noreferrer" target="_blank" >{t('footer.secondaryText.3')}</a>{t('footer.secondaryText.4')}<a href='https://github.com/DraketRomero/lexdev-portfolio' className='paragraph' rel="noopener noreferrer" target="_blank">{t('footer.secondaryText.5')}</a>{t('footer.secondaryText.6')}
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
                                    <div className='icons-footer'>
                                        <DogIcon />
                                        {t('footer.navigation.options.0')}
                                    </div>
                                </NavLink>
                            </li>
                            <li className='list-footer-item'>
                                <NavLink to='/projects' viewTransition className='routes'>
                                    <div className="icons-footer">
                                        <DogIcon />
                                         {t('footer.navigation.options.1')}
                                    </div>
                                </NavLink>
                            </li>
                            <li className='list-footer-item'>
                                <NavLink to='/experience' viewTransition className='routes'>
                                    <div className="icons-footer">
                                        <DogIcon />
                                         {t('footer.navigation.options.2')}
                                    </div>
                                </NavLink>
                            </li>
                            <li className='list-footer-item'>
                                <NavLink to='/about-me' viewTransition className='routes'>
                                    <div className="icons-footer">
                                        <DogIcon />
                                         {t('footer.navigation.options.3')}
                                    </div>
                                </NavLink>
                            </li>
                            <li className='list-footer-item'>
                                <NavLink to='/contact' viewTransition className='routes'>
                                    <div className="icons-footer">
                                        <DogIcon />
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
                            <li className='list-contact-item'><a href="mailto:draketromero@gmail.com" className='routes'>draketromero@gmail.com</a></li>
                            <li className='list-contact-item'><a href="tel:+522226134531" className='routes'>+52 22 26 13 45 31</a></li>
                        </ul>
                    </div>
                    <div className='copyright-container'>
                        <span className='copyright-text '>© 2026 Diego Romero · Puebla, MX {t('footer.navigation.copyright')} ❤️</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}