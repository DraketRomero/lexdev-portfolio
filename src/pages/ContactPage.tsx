import './css/contactPage.css';
import { useState } from 'react';

interface ContactData {
    name: string;
    email: string;
    messsage: string;
}


export const ContactPage = () => {
    const [contactData, setContactData] = useState<ContactData>({ name: "", email: "", messsage: "" });

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
                <h1 className='title'>¡Contáctame!</h1>
                <br />
                <em className='second-title'>¡Me encantará platicar contigo! :)</em>
            </div>
            <div className='info-main-container'>
                <div className='info-container'>
                    <p className='info-title'>Correo</p>
                    <a href="" className='link-contact'>draketromero@gmail.com</a>
                </div>
                <div className='info-container'>
                    <p className='info-title'>Telefono</p>
                    <a href="" className='link-contact'>+52 22 226 13 45 31</a>
                </div>
                <div className='info-container'>
                    <p className='info-title'>Ubicacion</p>
                    <span className='work-place'>Puebla, Mx</span>
                </div>
                <div className='info-container last'>
                    <p className='info-title'>Disponibilidad</p>
                    <p className='work-place'>Con amplia disponibilidad para oportunidades tanto hibiridas como remotas.</p>
                </div>
            </div>
            <div className='form-main-container'>
                <form onSubmit={handleSendContactInfo} autoComplete='off' method='POST' id='contact-form'>
                    <div className='form-field-container'>
                        <label htmlFor="name" className='input-label'>
                            <span className='form-label'>Nombre</span>
                            <input type="text" id="name" placeholder='John Doe' className='input-text' value={contactData.name} onChange={(e) => handleContactData(e, "name")} autoComplete='off' />
                        </label>
                    </div>
                    <div className='form-field-container'>
                        <label htmlFor="email" className='input-label'>
                            <span className='form-label'>Correo</span>
                            <input type="email" id="email" placeholder='jhondoe@mail.com' className='input-text' value={contactData.email} onChange={(e) => handleContactData(e, "email")} autoComplete='off' />
                        </label>

                    </div>
                    <div className='form-field-container'>
                        <label htmlFor="message" className='input-label'>
                            <span className='form-label'>Mensaje</span>
                            <textarea id="message" placeholder="Tu mensaje :)" className='text-area' value={contactData.messsage} onChange={(e) => handleContactData(e, "message")} />
                        </label>
                    </div>
                    <div className='message-button-container'>
                        <p className='message'>Me pondre en contacto contigo lo mas pronto posible.</p>

                        <div className='button-contact-contaner'>
                            <button type='submit' className='button-form'>Enviar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}