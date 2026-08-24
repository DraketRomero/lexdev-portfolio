import { useTranslation } from 'react-i18next';
import './css/contactPage.css';
import { useState } from 'react';
import { useEmployContext } from '../context/context';

interface ContactData {
    name: string;
    email: string;
    messsage: string;
}


export const ContactPage = () => {
    const { t } = useTranslation();
    const [contactData, setContactData] = useState<ContactData>({ name: "", email: "", messsage: "" });
    const { email, phone, location } = useEmployContext();

    const handleContactData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, inputType: string) => {
        const { value } = e.target;

        switch (inputType) {
            case "name": setContactData({ ...contactData, name: value })
                break;
            case "email": setContactData({ ...contactData, email: value })
                break;
            case "message": setContactData({ ...contactData, messsage: value })
                break;
        }
    }

    // TODO: Agregar funcionalidad de API para envio de correo.
    const handleSendContactInfo = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <div className='contact-contact-container'>
            <div className='titles-container'>
                <h1 className='title'>{t('contact.titles.0')}</h1>
                <br />
                <em className='second-title'>{t('contact.titles.1')}</em>
            </div>
            <div className='info-main-container'>
                <div className='info-container'>
                    <p className='info-title'>{t('contact.contactInfo.mail')}</p>
                    <a href="" className='link-contact'>{email}</a>
                </div>
                <div className='info-container'>
                    <p className='info-title'>{t('contact.contactInfo.phone')}</p>
                    <a href="" className='link-contact'>{phone}</a>
                </div>
                <div className='info-container'>
                    <p className='info-title'>{t('contact.contactInfo.location')}</p>
                    <span className='work-place link-contact'>{location}</span>
                </div>
                <div className='info-container last'>
                    <p className='info-title'>{t('contact.contactInfo.availability')}</p>
                    <p className='work-place'>{t('contact.contactInfo.availabilityMessage')}</p>
                </div>
            </div>
            <div className='form-main-container'>
                <form onSubmit={handleSendContactInfo} autoComplete='off' method='POST' id='contact-form'>
                    <div className='form-field-container'>
                        <label htmlFor="name" className='input-label'>
                            <span className='form-label'>{t('contact.contactForm.name.label')}</span>
                            <input type="text" id="name" placeholder={`${t('contact.contactForm.name.placeholder')}`} className='input-text' value={contactData.name} onChange={(e) => handleContactData(e, "name")} autoComplete='off' />
                        </label>
                    </div>
                    <div className='form-field-container'>
                        <label htmlFor="email" className='input-label'>
                            <span className='form-label'>{t('contact.contactForm.email.label')}</span>
                            <input type="email" id="email" placeholder={`${t('contact.contactForm.email.placeholder')}`} className='input-text' value={contactData.email} onChange={(e) => handleContactData(e, "email")} autoComplete='off' />
                        </label>

                    </div>
                    <div className='form-field-container'>
                        <label htmlFor="message" className='input-label'>
                            <span className='form-label'>{t('contact.contactForm.message.label')}</span>
                            <textarea id="message" placeholder={`${t('contact.contactForm.message.placeholder')}`} className='text-area' value={contactData.messsage} onChange={(e) => handleContactData(e, "message")} />
                        </label>
                    </div>
                    <div className='message-button-container'>
                        <p className='message'>{t('contact.contactForm.textBottom')}</p>

                        <div className='button-contact-contaner'>
                            <button type='submit' className='button-form'>{t('contact.contactForm.textButtonBottom')}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}