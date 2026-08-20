import { NavLink } from 'react-router';
import './css/footer.css';
import { DogIcon } from '../assets/icons';


export const Footer = () => {
    return (
        <footer>
            <div className='main-footer-container'>
                <div className='message-main-container'>
                    <div className='title-container'>
                        <span className='title-name'>Diego Romero - DraketDev</span>
                    </div>
                    <div className='message-container'>
                        <p className='message-paragraph'>
                            El presente portal es un proyecto que refleja y complementa mi formacion y experiencia. Fue diseñado con mucho amor y entusiasmo con el objetivo de mostrar al mundo lo que soy capaz de hacer como un ser humano lleno de imaginacion.
                        </p>
                        <p className='message-paragraph'>
                            Te invito a visitar mi <a href='https://github.com/DraketRomero/lexdev-portfolio' rel="noopener noreferrer" target="_blank" className='paragraph'>repo en Github</a> para que conozcas mas sobre mi camino como desarrollador. Asi mismo, te invito a <a href='https://github.com/DraketRomero/lexdev-portfolio' className='paragraph' rel="noopener noreferrer" target="_blank" >conectar en LinkedIn</a> o a <a href='https://github.com/DraketRomero/lexdev-portfolio' className='paragraph' rel="noopener noreferrer" target="_blank">dejar una huellita </a> para saber que estuviste aqui.
                        </p>
                    </div>
                </div>
                <div className='links-main-container'>
                    <div className='title-container second-title-container'>
                        <p className='title-footer'>Recorrer el sitio</p>
                    </div>
                    <div className='links-container'>
                        <ul className='list-items'>
                            <li className='list-footer-item'>
                                <NavLink to='/huellitas' viewTransition className='routes'>
                                    <div className='icons-footer'>
                                        <DogIcon />
                                        Huellitas
                                    </div>
                                </NavLink>
                            </li>
                            <li className='list-footer-item'>
                                <NavLink to='/projects' viewTransition className='routes'>
                                    <div className="icons-footer">
                                        <DogIcon />
                                        Proyectos
                                    </div>
                                </NavLink>
                            </li>
                            <li className='list-footer-item especial'>
                                <NavLink to='/experience' viewTransition className='routes'>
                                    <div className="icons-footer">
                                        <DogIcon />
                                        Experiencia
                                    </div>
                                </NavLink>
                            </li>
                            <li className='list-footer-item'>
                                <NavLink to='/about-me' viewTransition className='routes'>
                                    <div className="icons-footer">
                                        <DogIcon />
                                        Sobre mi
                                    </div>
                                </NavLink>
                            </li>
                            <li className='list-footer-item'>
                                <NavLink to='/contact' viewTransition className='routes'>
                                    <div className="icons-footer">
                                        <DogIcon />
                                        Contacto
                                    </div>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='contact-main-container'>
                    <div className='contact-container'>
                        <ul className='list-items'>
                            <li className='title-footer'>Contacto</li>
                            <li className='list-contact-item'><a href="mailto:draketromero@gmail.com" className='routes'>draketromero@gmail.com</a></li>
                            <li className='list-contact-item'><a href="tel:+522226134531" className='routes'>+52 22 26 13 45 31</a></li>
                        </ul>
                    </div>
                    <div className='copyright-container'>
                        <span className='copyright-text '>© 2026 Diego Romero · Puebla, MX  hecho con ❤️</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}