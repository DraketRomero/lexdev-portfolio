import { NavLink } from 'react-router';


export const Footer = () => {
    return (
        <div style={{ borderTop: "1px solid var(--text-color)", margin: "20px 0 0 0", backgroundColor: "var(--text-color)", color: "var(--primary-color)" }}>
            <div style={{ margin: "50px 30px 0 30px" }}>
                <div style={{ textAlign: "left" }}>
                    <span style={{ fontSize: "19px", fontFamily: "'Fraunces'", fontWeight: "bold", fontStyle: "italic" }}>Diego Romero - DraketDev</span>
                </div>
                <div style={{ padding: "30px 0", fontSize: "13px" }}>
                    <p style={{ textAlign: "left" }}>
                        El presente portal es un proyecto que refleja y complementa mi formacion y experiencia. Fue diseñado con mucho amor y entusiasmo con el objetivo de mostrar al mundo lo que soy capaz de hacer como un ser humano lleno de imaginacion.
                    </p>
                    <p style={{ padding: "30px 0 0 0", fontSize: "13px" }}>
                        Te invito a visitar mi <a style={{ fontFamily: "'Fraunces'", fontWeight: "bold", fontStyle: "italic",  color: "var(--bg-icons)" }}>repo en Github</a> para que conozcas mas sobre mi camino como desarrollador. Asi mismo, te invito a <a style={{ fontFamily: "'Fraunces'", fontWeight: "bold", fontStyle: "italic",  color: "var(--bg-icons)" }}>conectar en LinkedIn</a> o a <a style={{ fontFamily: "'Fraunces'", fontWeight: "bold", fontStyle: "italic",  color: "var(--bg-icons)" }}>dejar una huellita </a> para saber que estuviste aqui.
                    </p>
                </div>
            </div>
            <div style={{ margin: "0 20px 0 30px", borderTop: "1px solid var(--base-color)" }}>
                <div style={{ margin: "40px 0 10px 0" }}>
                    <p style={{ fontSize: "16px", fontFamily: "'Fraunces'", fontWeight: "bold", fontStyle: "italic" }}>Recorrer el sitio</p>
                </div>
                <div style={{ padding: "0 0 20px 0"  }}>
                    <ul style={{ listStyle: "none" }}>
                        <li style={{ padding: "5px 0" }}>
                            <NavLink to='/huellitas' viewTransition style={{ fontSize: "14px" }}>
                                Huellitas
                            </NavLink>
                        </li>
                        <li style={{ padding: "5px 0" }}>
                            <NavLink to='/projects' viewTransition style={{ fontSize: "14px" }}>
                                Proyectos
                            </NavLink>
                        </li>
                        <li style={{ padding: "5px 0" }}>
                            <NavLink to='/experience' viewTransition style={{ fontSize: "14px",  borderStyle: "none" }}>
                                Experiencia
                            </NavLink>
                        </li>
                        <li style={{ padding: "5px 0" }}>
                            <NavLink to='/about-me' viewTransition style={{ fontSize: "14px" }}>
                                Sobre mi
                            </NavLink>
                        </li>
                        <li style={{ padding: "5px 0" }}>
                            <NavLink to='/contact' viewTransition style={{ fontSize: "14px" }}>
                                Contacto
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div style={{ margin: "20px 30px 0 30px", borderTop: "1px solid var(--base-color)" }}>
                <div style={{ margin: "40px 0 0 0" }}>
                    <ul  style={{ listStyle: "none" }}>
                        <li style={{ fontSize: "16px", fontFamily: "'Fraunces'", fontWeight: "bold", fontStyle: "italic" }}>Contacto</li>
                        <li style={{ fontSize: "12px", padding: "10px 0" }}><a href="">draketromero@gmail.com</a></li>
                        <li style={{ fontSize: "12px" }}><a href="">+52 22 26 13 45 31</a></li>
                    </ul>
                </div>
                <div style={{ padding: "30px 0 30px 0" }}>
                    <span  style={{ fontSize: "11px" }}>© 2026 Diego Romero · Puebla, MX  hecho con ❤️</span>
                </div>
            </div>
        </div>
    )
}