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
        <div style={{ width: "100%", textAlign: "center", padding: "80px 0 0 0", color: "white", }}>
            <div style={{ padding: "70px 50px 70px 50px", margin: "0 650px 0 650px", borderRadius: "20px" }}
                className='bisel-elevado'
            >
                <div style={{ padding: "0 0 50px 0" }} >
                    <img src={bunnie} alt="imagen"
                        style={{ width: "150px", height: "150px", borderRadius: "70%", objectFit: "contain" }}
                    />
                </div>

                <div>
                    <p style={{ color: "white", padding: "0 0 20px 0", fontSize: "30px", fontWeight: "bolder" }}>Reyes Diego Garrido Romero</p>
                    <p className="role">Senior <span className={`word ${isVisible ? '' : 'hidden'}`} onTransitionEnd={handleTransitionEnd}>{words[index]}</span> Engineer</p>
                </div>

                <div style={{ display: "flex", justifyContent: "center", padding: "30px 0 0 0" }}>
                    <div style={{ padding: "14px 10px 10px 10px", cursor: "pointer", margin: "0 15px 0 15px" }}>
                        <a href="" download={"CV-diegoromero.pdf"} rel="noopener noreferrer" className="social-link">
                            {DownloadDocumentIcon}
                        </a>
                    </div>
                    <div style={{ padding: "10px 10px 10px 10px", cursor: "pointer", margin: "0 15px 0 15px" }}>
                        <a href="https://github.com/DraketRomero" target="_blank" rel="noopener noreferrer" className="social-link">
                            {GithubIcon}
                        </a>
                    </div>
                    <div style={{ padding: "12px 10px 5px 10px", cursor: "pointer", margin: "0 15px 0 15px", }}>
                        <a href="https://www.linkedin.com/in/rdiego-romero/" target="_blank" rel="noopener noreferrer" className="social-link">
                            {LinkedInIcon}
                        </a>
                    </div>
                </div>

                <div style={{ padding: "10px 0 0 0" }}>
                    {/* <button
                        style={{ border: "1px solid #7FC4F2", borderRadius: "6px", padding: "5px 12px", color: "#7FC4F2", cursor: "pointer", boxShadow: "3px 3px #7FC4F2" }} className='menu-option-selected'>Contactar</button> */}

                    <Button
                        className={`menu-option button-homepage`}
                        routeName="Contactar"
                        routeDestination="/contact"
                    />
                </div>
            </div>

        </div>
    )
}