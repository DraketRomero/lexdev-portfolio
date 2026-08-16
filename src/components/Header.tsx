import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '../assets/icons';
import './css/header.css';
import { Link, useLocation } from 'react-router';
import { Button } from './Button';
import { LanguageSelector } from './LanguageSelector';
import { useTranslation } from 'react-i18next';

export const Header = () => {
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => localStorage.getItem('darkmode') === 'active');
    const { pathname } = useLocation();
    const { t } = useTranslation();

    useEffect(() => {
        document.body.classList.toggle('darkmode', isDarkTheme)
        localStorage.setItem('darkmode', isDarkTheme ? 'active' : '')
    }, [isDarkTheme]);

    const toggleTheme = () => {
        setIsDarkTheme((prev) => !prev);
    }

    return (
        <header>
            <div className='main-container'>
                <nav className='options-container'>
                    <div className='img-container'>
                        <Link to='/' className='name' viewTransition>
                            <span className='role word name'>DraketDev</span>
                        </Link>
                    </div>

                    <div className='nav-options'>
                        <ul className='list-group'>
                            <li className='list-item'>
                                <Button
                                    className='menu-option button-header'
                                    routeName={t('nav.projects')}
                                    routeDestination='/projects'
                                    active={pathname == '/projects'}
                                />
                            </li>


                            <li className='list-item'>
                                <Button
                                    className='menu-option button-header'
                                    routeName={t('nav.experience')}
                                    routeDestination='/experience'
                                    active={pathname == '/experience'}
                                />
                            </li>

                            <li className='list-item'>
                                <Button
                                    className='menu-option button-header'
                                    routeName={t('nav.aboutMe')}
                                    routeDestination='/about-me'
                                    active={pathname == '/about-me'}
                                />
                            </li>

                            <li className='list-item'>
                                <Button
                                    className='menu-option button-header'
                                    routeName={t('nav.contact')}
                                    routeDestination='/contact'
                                    active={pathname == '/contact'}
                                />
                            </li>

                            <li className='logo-theme'>
                                <button className='theme-toggle-button' onClick={toggleTheme}>
                                    <div className='logo-item-container'>
                                        <div className='logo-theme-container'>{isDarkTheme ? <SunIcon /> : <MoonIcon />}</div>
                                    </div>
                                </button>
                            </li>

                            <li className='logo-idioms'>
                                <div className='idioms-container'>
                                    <LanguageSelector />
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}