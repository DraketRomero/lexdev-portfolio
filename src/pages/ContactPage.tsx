export const ContactPage = () => {
    return (
        <div style={{ margin: "40px 30px" }}>
            <div style={{ fontFamily: "'Fraunces'", fontWeight: "bold", fontSize: "large", color: "var(--secondary-text)" }}>
                <h2 style={{ color: "var(--text-color)" }}>!Contactame!</h2>
                <br />
                <em>Me encantara platicar contigo! :)</em>
            </div>
            <div style={{ margin: "10px 0", color: "var(--secondary-text)", borderBottom: "1px solid var(--secondary-text)"  }}>
                <div style={{ padding: "10px 0", fontSize: "13px" }}>
                    <p style={{ fontSize: "14px", fontWeight: "bold", color: "var(--text-color)" }}>Correo</p>
                    <a href="">draketromero@gmail.com</a>
                </div>
                <div style={{ padding: "10px 0", fontSize: "13px" }}>
                    <p style={{ fontSize: "14px", fontWeight: "bold", color: "var(--text-color)" }}>Telefono</p>
                    <a href="">+52 22 226 13 45 31</a>
                </div>
                <div style={{ padding: "10px 0", fontSize: "13px" }}>
                    <p style={{ fontSize: "14px", fontWeight: "bold", color: "var(--text-color)" }}>Ubicacion</p>
                    <span>Puebla, Mx</span>
                </div>
                <div style={{ padding: "10px 0", fontSize: "13px", margin: "0 0 30px 0" }}>
                    <p style={{ fontSize: "14px", fontWeight: "bold", color: "var(--text-color)" }}>Disponibilidad</p>
                    <p>Con amplia disponibilidad para oportunidades tanto hibiridas como remotas.</p>
                </div>
            </div>
            <div style={{ textAlign: "left" }}>
                <form action="">
                    <div style={{ display: "flex", width: "100%", margin: "30px 0" }}>
                        <label htmlFor="name">
                            <span style={{ color: "var(--text-color)" }}>Nombre</span>
                            <input type="text" id="name" placeholder='John Doe' style={{ margin: "10px 0 0 0", width: "300px", border: "none", height: "35px", borderRadius: "8px", backgroundColor: "var(--secondary-text)", color: "var(--base-color)", outline: "none", padding: "0 0 0 15px" }} />
                        </label>
                    </div>
                    <div style={{ display: "flex", width: "100%", margin: "30px 0" }}>
                        <label htmlFor="email">
                            <span style={{ color: "var(--text-color)" }}>Correo</span>
                            <input type="email" id="email" placeholder='jhondoe@mail.com' style={{ margin: "10px 0 0 0", width: "300px", border: "none", height: "35px", borderRadius: "8px", backgroundColor: "var(--secondary-text)", color: "var(--base-color)", outline: "none", padding: "0 0 0 15px" }} />
                        </label>

                    </div>
                    <div style={{ display: "flex", width: "100%", margin: "30px 0" }}>
                        <label htmlFor="message">
                            <span style={{ color: "var(--text-color)" }}>Mensaje</span>
                            <textarea id="message" placeholder="Tu mensaje :)" style={{ margin: "10px 0 0 0", width: "300px", height: "250px", border: "none", borderRadius: "8px", backgroundColor: "var(--secondary-text)", color: "var(--base-color)", outline: "none", padding: "20px 0 0 15px" }} />
                        </label>
                    </div>
                </form>
                <div style={{ color: "var(--secondary-text)", width: "100%" }}>
                    <p style={{ textAlign: "left", fontSize: "13px", color: "var(--text-color)" }}>Me pondre en contacto contigo lo mas pronto posible.</p>

                    <div style={{ textAlign: "center", margin: "30px 0 0 0" }}>
                        <button style={{ padding: "8px 10px", border: "1px solid var(--text-color)", backgroundColor: "var(--base-color)", color: "var(--secondary-text)", borderRadius: "8px", cursor: "pointer", boxShadow: "3px 4px var(--text-color)", transition: "color 0.15s ease, border-color 0.15s ease", width: "90px" }}>Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}