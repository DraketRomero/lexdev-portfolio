import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '../assets/icons';
import './css/header.css';
import img_dark from './../assets/img/logo-dark-theme.png';
import img_light from './../assets/img/logo-light-theme.png';
import { LanguageIcon } from '../assets/icons/LanguageIcon';
import { Link, useLocation } from 'react-router';
import { Button } from './Button';

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
                        <Link to='/'>
                            {
                                !isDarkTheme ? (
                                    <img src={img_dark} alt='LexDev - Diego Romero' className='logo-img-dark' />
                                ) : (
                                    <img src={img_light} alt='LexDev - Diego Romero' className='logo-img-light' />
                                )
                            }
                        </Link>
                    </div>

                    <div>
                        <ul className='list-group'>
                            <li>
                                <Button
                                    className='menu-option button-header'
                                    routeName='Proyectos'
                                    routeDestination='/projects'
                                    active={pathname == '/projects'}
                                />
                            </li>


                            <li>
                                <Button
                                    className='menu-option button-header'
                                    routeName='Experiencia'
                                    routeDestination='/experience'
                                    active={pathname == '/experience'}
                                />
                            </li>

                            <li>
                                <Button
                                    className='menu-option button-header'
                                    routeName='Sobre mi'
                                    routeDestination='/about-me'
                                    active={pathname == '/about-me'}
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
                                    <div className='select-wrapper'>
                                        <span className='icon-idioms'>{LanguageIcon}</span>
                                        <select className='language-selector'>
                                            <option>EN</option>
                                            <option>ES</option>
                                        </select>
                                        <span className="select-arrow"></span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}