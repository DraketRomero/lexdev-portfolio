import { useState } from "react";
import { MoonIcon, SunIcon } from "../assets/icons";
import './css/header.css';
import img_dark from './../assets/img/logo-dark-theme.png';
import img_light from './../assets/img/logo-light-theme.webp';
import { LanguageIcon } from '../assets/icons/LanguageIcon';

export const Header = () => {
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
    const [isPressed, setIsPressed] = useState<boolean>(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }

    return (
        <header>
            <div className="main-container">
                <nav className="options-container">
                    <div className="img-container">
                        <img src={isDarkTheme ? img_light : img_dark} alt="LexDev - Diego Romero" className="logo-img" />
                    </div>

                    <div>
                        <ul className="list-group">

                            <li className={`menu-option ${isPressed ? 'menu-option-unselected' : 'menu-option-selected'}`}
                                onMouseDown={() => setIsPressed(true)}
                            >Proyectos</li>


                            <li className={`menu-option ${isPressed ? 'menu-option-unselected' : 'menu-option-selected'}`}>Experiencia</li>
                            <li className={`menu-option ${isPressed ? 'menu-option-unselected' : 'menu-option-selected'}`} onMouseDown={() => setIsPressed(true)}
                                onMouseUp={() => setIsPressed(false)}
                                onMouseLeave={() => setIsPressed(false)}>Sobre mi</li>
                            <li className={`logo-theme`} onClick={toggleTheme}>
                                <div className="logo-item-container">
                                    <div className="logo-theme-container">{isDarkTheme ? MoonIcon : SunIcon}</div>
                                </div>
                            </li>
                            <li className={`logo-idioms`}>
                                <div className="idioms-container">
                                    <div>
                                        <span className="icon-idioms">{LanguageIcon}</span>
                                        <select className="language-selector">
                                            <option style={{ color: "white" }}>EN</option>
                                            <option style={{ color: "white" }} >ES</option>
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