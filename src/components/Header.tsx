import { useState } from "react";
import { MoonIcon, SunIcon } from "../assets/icons";
import './css/header.css';
import img_dark from './../assets/img/logo-dark-theme.png';
import img_light from './../assets/img/logo-light-theme.webp';
import { LanguageIcon } from '../assets/icons/LanguageIcon';
import { Link, useLocation } from 'react-router';
import { Button } from "./Button";

export const Header = () => {
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
    const { pathname } = useLocation();

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }

    return (
        <header>
            <div className="main-container">
                <nav className="options-container">
                    <div className="img-container">
                        <Link to="/">
                            <img src={isDarkTheme ? img_light : img_dark} alt="LexDev - Diego Romero" className="logo-img" />
                        </Link>
                    </div>

                    <div>
                        <ul className="list-group">
                            <li>
                                <Button
                                    className={`menu-option button-header`}
                                    routeName="Proyectos"
                                    routeDestination="/projects"
                                    active={pathname == "/projects"}
                                />
                            </li>


                            <li>
                                <Button
                                    className={`menu-option button-header`}
                                    routeName="Experiencia"
                                    routeDestination="/experience"
                                    active={pathname == "/experience"}
                                />
                            </li>

                            <li>
                                <Button
                                    className={`menu-option button-header`}
                                    routeName="Sobre mi"
                                    routeDestination="/about-me"
                                    active={pathname == "/about-me"}
                                />
                            </li>

                            <li className="logo-theme" onClick={toggleTheme}>
                                <button className="theme-toggle-button" onClick={toggleTheme}>
                                    <div className="logo-item-container">
                                        <div className="logo-theme-container">{isDarkTheme ? <MoonIcon /> : <SunIcon />}</div>
                                    </div>
                                </button>
                            </li>

                            <li className={`logo-idioms`}>
                                <div className="idioms-container">
                                    <div>
                                        <span className="icon-idioms">{LanguageIcon}</span>
                                        <select className="language-selector">
                                            <option>EN</option>
                                            <option>ES</option>
                                        </select>
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