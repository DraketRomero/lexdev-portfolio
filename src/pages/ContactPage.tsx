import './css/contactPage.css';

export const ContactPage = () => {
    return (
        <div className='contact-main-container'>
            <div className='titles-container'>
                <h1 className='title'>¡Contáctame!</h1>
                <br />
                <em style={{ fontSize: "25px"}}>¡Me encantará platicar contigo! :)</em>
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
                <form action="">
                    <div className='form-field-container'>
                        <label htmlFor="name">
                            <span className='form-label'>Nombre</span>
                            <input type="text" id="name" placeholder='John Doe' className='input-text' />
                        </label>
                    </div>
                    <div className='form-field-container'>
                        <label htmlFor="email">
                            <span className='form-label'>Correo</span>
                            <input type="email" id="email" placeholder='jhondoe@mail.com' className='input-text' />
                        </label>

                    </div>
                    <div className='form-field-container'>
                        <label htmlFor="message">
                            <span className='form-label'>Mensaje</span>
                            <textarea id="message" placeholder="Tu mensaje :)" className='text-area' />
                        </label>
                    </div>
                </form>
                <div className='message-button-container'>
                    <p className='message'>Me pondre en contacto contigo lo mas pronto posible.</p>

                    <div className='button-contact-contaner'>
                        <button className='button-form'>Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}