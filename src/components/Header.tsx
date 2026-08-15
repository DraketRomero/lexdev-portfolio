import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '../assets/icons';
import './css/header.css';
import { Link, useLocation } from 'react-router';
import { Button } from './Button';
import { LanguageSelector } from './LanguageSelector';

export const Header = () => {
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => localStorage.getItem('darkmode') === 'active');
    const { pathname } = useLocation();

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
                        <Link to='/' className='name'>
                            <span className='role word name'>DraketDev</span>
                        </Link>
                    </div>

                    <div>
                        <ul className='list-group'>
                            <li className='list-item'>
                                <Button
                                    className='menu-option button-header'
                                    routeName='Proyectos'
                                    routeDestination='/projects'
                                    active={pathname == '/projects'}
                                />
                            </li>


                            <li className='list-item'>
                                <Button
                                    className='menu-option button-header'
                                    routeName='Experiencia'
                                    routeDestination='/experience'
                                    active={pathname == '/experience'}
                                />
                            </li>

                            <li className='list-item'>
                                <Button
                                    className='menu-option button-header'
                                    routeName='Sobre mi'
                                    routeDestination='/about-me'
                                    active={pathname == '/about-me'}
                                />
                            </li>

                            <li className='list-item'>
                                <Button
                                    className='menu-option button-header'
                                    routeName='Contactar'
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