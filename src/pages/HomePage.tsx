import { useEffect, useRef, useState } from 'react';
import bunnie from './../assets/img/bunnie2.webp';
import './css/homePage.css'
import { DownloadDocumentIcon, GithubIcon, LinkedInIcon } from '../assets/icons';
import { CopyClipboardIcon } from '../assets/icons/CopyClipboardIcon';
import { CheckIcon } from '../assets/icons/CheckIcon';
import { ButtonIcon } from '../components/ButtonIcon';

export const HomePage = () => {
    const words = ['Full Stack', 'Software'];
    const [index, setIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    const [email] = useState<string>('draketromero@gmail.com');
    const [copied, setCopied] = useState<boolean>(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

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

    const handleCopy = async () => {
        await navigator.clipboard.writeText(email);
        setCopied(true);

        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className='card-container'>
            <div className='card-bisel'>
                <div className='profile-image-container' >
                    <img src={bunnie} alt='imagen' className='profile-image' />
                </div>

                <div>
                    <p className='gretting'>Hola <span className='wave-icon'>👋</span>!, Soy Diego Romero</p>
                    <p className='role'>
                        Senior  
                        <span 
                            className={`word ${isVisible ? '' : 'hidden'}`} 
                            onTransitionEnd={handleTransitionEnd}>{` ${words[index]} `} 
                        </span> 
                         Engineer
                     </p>
                </div>

                <div className='icons-container'>
                    <div className='icons'>
                        <ButtonIcon href='/cv-diegoromero.pdf' text='Ver CV' icon={<DownloadDocumentIcon />} />
                        <ButtonIcon href='https://www.linkedin.com/in/rdiego-romero/' text='LinkedIn' icon={<LinkedInIcon />} />
                        <ButtonIcon href='https://github.com/DraketRomero' text='Github' icon={<GithubIcon />} />

                        <div className='button-email-container'>
                            <div className='data-contact-container' onClick={handleCopy}>
                                <div>
                                    {email}
                                </div>

                                <div className='icon-clipboard'>
                                    {copied ? <CheckIcon className='icon-pop' /> : <CopyClipboardIcon className='icon-pop' />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}