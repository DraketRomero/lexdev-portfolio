import { useEffect, useState } from 'react';
import bunnie from './../assets/img/bunnie2.webp';
import './css/homePage.css'
import { DownloadDocumentIcon, GithubIcon, LinkedInIcon } from '../assets/icons';
import { Button } from '../components/Button';

export const HomePage = () => {
    const words = ['Full Stack', 'Software'];
    const [index, setIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false);
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    const handleTransitionEnd = (e: React.TransitionEvent) => {
        if (e.propertyName === 'opacity' && !isVisible) {
            setIndex((prev) => (prev + 1) % words.length);
            setIsVisible(true);
        }
    };

    return (
        <div className='card-container'>
            <div className='card-bisel'>
                <div className='profile-image-container' >
                    <img src={bunnie} alt="imagen" className='profile-image'/>
                </div>

                <div>
                    <p className='gretting'>Hola!👋, Soy Diego Romero</p>
                    <p className="role">Senior <span className={`word ${isVisible ? '' : 'hidden'}`} onTransitionEnd={handleTransitionEnd}>{words[index]}</span> Engineer</p>
                </div>

                <div className='icons-container'>
                    <div className='icon-file-container'>
                        <a href="" download={"CV-diegoromero.pdf"} rel="noopener noreferrer" className="social-link">
                            {DownloadDocumentIcon}
                        </a>
                    </div>
                    <div className='icon-gb-container'>
                        <a href="https://github.com/DraketRomero" target="_blank" rel="noopener noreferrer" className="social-link">
                            {GithubIcon}
                        </a>
                    </div>
                    <div className='icon-li-container'>
                        <a href="https://www.linkedin.com/in/rdiego-romero/" target="_blank" rel="noopener noreferrer" className="social-link">
                            {LinkedInIcon}
                        </a>
                    </div>
                </div>

                <div>
                    <Button
                        className='menu-option button-homepage'
                        routeName="Contactar"
                        routeDestination="/contact"
                    />
                </div>
            </div>

        </div>
    )
}