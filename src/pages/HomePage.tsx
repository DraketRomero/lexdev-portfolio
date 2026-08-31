import { useRef, useState } from 'react';
import bunnie from './../assets/img/bunnie2.webp';
import './css/homePage.css'
import {
    CheckIcon,
    ContactFilledIcon,
    CopyClipboardIcon,
    DownloadDocumentIcon,
    GithubIcon,
    LinkedInIcon,
    StarIcon
} from '../assets/icons';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { ButtonIcon } from '../components/ButtonIcon';
import { useEmployContext } from '../context/context';

export const HomePage = () => {
    const { t } = useTranslation();

    const { email, name, social_media } = useEmployContext();

    const [copied, setCopied] = useState<boolean>(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

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

                <div className='dev-info'>
                    <p className='gretting'>{t('hero.greeting')} <span className='wave-icon'>👋</span>{t('hero.pronoun')}<span className='word'>{name}</span></p>
                    <p className='role'>
                        Senior
                        <span
                            className={`word ${isVisible ? '' : 'hidden'}`}
                            onTransitionEnd={handleTransitionEnd}>{` ${words[index]} `}
                        </span>
                        Engineer
                    </p>

                    <div className='description-container'>
                        <p className='description-text'>
                            {t('hero.description')}
                            <span className='description-text-tech'>{t('hero.ai')}</span>
                        </p>

                        <p className='description-text-experience'>
                            <StarIcon />
                            <span>
                                {t('hero.extra')}
                            </span>
                        </p>

                        <ul className='lista-info'>
                            <li className='lista-info-item line'>
                                <span className='text'>{t('hero.workmode.notice.title')}</span>
                                <span className='text-table'>{t('hero.workmode.notice.mode')}</span>
                            </li>
                            <li className='lista-info-item line'>
                                <span className='text'>{t('hero.workmode.path.title')}</span>
                                <span className='text-table'>{t('hero.workmode.path.job')}</span>
                            </li>
                            <li className='lista-info-item'>
                                <span className='text'>{t('hero.workmode.focus.title')}</span>
                                <span className='text-table'>{t('hero.workmode.focus.focus')}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='icons-container'>
                <div className='icons'>
                    <ButtonIcon href='/cv-diegoromero.pdf' text={t('buttonText.cv')} icon={<DownloadDocumentIcon />} />
                    <ButtonIcon href={social_media[0].url} text={social_media[0].name} icon={<GithubIcon />} />
                    <ButtonIcon href={social_media[1].url} text={social_media[1].name} icon={<LinkedInIcon />} />

                    <div className='document-button-container'>
                        <Link to='/contact' className="document-link" viewTransition>
                            <div className='document-icon'>
                                <ContactFilledIcon />
                            </div>

                            <span className='document-text document-text-span'>
                                {t('buttonText.contact')}
                            </span>
                        </Link>
                    </div>

                    <div className='button-email-container'>
                        <div className='data-contact-container' onClick={handleCopy}>
                            <div className='icon-clipboard'>
                                {copied ? <CheckIcon className='icon-pop' /> : <CopyClipboardIcon className='icon-pop' />}
                            </div>
                            <div className='email-text'>
                                {email}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}