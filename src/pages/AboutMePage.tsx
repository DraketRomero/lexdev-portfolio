import { BookIcon, GymIcon, MusicIcon, TVIcon, VidegameIcon } from "../assets/icons"
import bunnie from './../assets/img/bunnie2.webp';

export const AboutMePage = () => {
    return(
        <div style={{ width: "100%", padding: "0 40px 0 40px" }}>
            <div style={{ padding: "35px 0 50px 0", borderBottom: "1px solid var(--base-variant)" }}>
                <div style={{ color: "var(--secondary-text)" }}>
                    <p style={{ fontSize: "25px", fontFamily: "'Fraunces'", fontWeight: "bolder", fontStyle: "italic", color: "var(--text-color)" }}>Sobre Mi</p>
                    <p style={{ fontSize: "12px", paddingTop: "25px" }}>
                        Desarrollador full-stack con más de 6 años de experiencia en el diseño y la implementación de aplicaciones web escalables y API RESTful.
                    </p>
                    <p style={{ fontSize: "12px", paddingTop: "10px" }}>
                        Experiencia práctica en pruebas automatizadas, patrones de diseño y sistemas de mensajería asíncrona.
                    </p>
                    <p style={{ fontSize: "12px", paddingTop: "10px" }}>
                        Sólida formación en implementaciones en la nube en AWS/Azure y procesos de CI/CD.
                    </p>
                    <p style={{ fontSize: "12px", paddingTop: "10px" }}>
                        Comprometido con el código limpio, los principios SOLID, las mejores prácticas de revisión de código y la arquitectura de nivel empresarial.
                    </p>
                    <p style={{ fontSize: "12px", paddingTop: "10px" }}>
                        Aplico de forma activa los estándares de accesibilidad (WCAG 2.1) y las técnicas de optimización del rendimiento, incluyendo componentes independientes, señales, carga diferida y la estrategia de detección de cambios OnPush.
                    </p>
                </div>
            </div>

            <div style={{ padding: "40px 0 0 0" }}>
                <div style={{ color: "var(--secondary-text)" }}>
                    <p style={{ fontSize: "22px", fontFamily: "'Fraunces'", fontWeight: "bolder", fontStyle: "italic", color: "var(--text-color)" }}>Hobbies e intereses</p>
                    <p style={{ fontSize: "13px", paddingTop: "20px" }}>
                        Actividades que me gusta hacer más allá del IDE.
                    </p>

                    <div style={{ border: "1px solid var(--base-variant)", margin: "40px 0 0 0", borderRadius: "10px", padding: "10px 20px", boxShadow: "4px 6px var(--text-color)" }}>
                        <div style={{ display: "flex", fontSize: "15px", padding: "10px 10px", borderBottom: "1px solid var(--base-variant)" }}>
                            <div style={{ paddingRight: "10px" }}>
                                <MusicIcon width={18} height={18} />
                            </div>
                            <div>
                                <p>
                                    Música
                                </p>
                            </div>
                        </div>

                        <div style={{ padding: "20px 0 20px 0", borderBottom: "1px solid var(--base-variant)" }}>
                            <p style={{ fontSize: "13px" }}>
                                Desde muy pequeño siempre me gustó la música y conforme fui creciendo, uno de mis sueños era aprender a tocar la guitarra. Durante la secundaria tuve la oportunidad de integrarme a la rondalla estudiantil y desde entonces no he dejado de tocar. En mis tiempos libres suelo aprender nuevas canciones y cantarlas a todo pulmon. Tambien suelo practicar mucho mi canto.
                            </p>
                        </div>

                        <div style={{ position: "relative", maxWidth: "1000px", margin: "30px auto" }}>
                            <div style={{ display: "flex", aspectRatio: "16 / 9", overflowX: "hidden", scrollSnapType: "x mandatory", scrollBehavior: "smooth", boxShadow: "0 .25rem .5rem #21212126", borderRadius: ".5rem" }}>
                                <img src={bunnie} alt="Bunnie" id="img-music-1" style={{ flex: "1 0 100%", scrollSnapAlign: "start", objectFit: "contain" }} />
                                <img src={bunnie} alt="Bunnie" id="img-music-2" style={{ flex: "1 0 100%", scrollSnapAlign: "start", objectFit: "contain" }} />
                                <img src={bunnie} alt="Bunnie" id="img-music-3" style={{ flex: "1 0 100%", scrollSnapAlign: "start", objectFit: "contain" }} />
                                <img src={bunnie} alt="Bunnie" id="img-music-4" style={{ flex: "1 0 100%", scrollSnapAlign: "start", objectFit: "contain" }} />
                            </div>

                            <div style={{ display: "flex", columnGap: "1rem", position: "absolute", bottom: "1.25rem", left: "50%", transform: "translateX(-50%)", zIndex: "1" }}>
                                <a href="#img-music-1" style={{ width: ".5rem", height: ".5rem", borderRadius: "50%", backgroundColor: "white", opacity: ".75", transition: "opacity ease 250ms" }} ></a>
                                <a href="#img-music-2" style={{ width: ".5rem", height: ".5rem", borderRadius: "50%", backgroundColor: "white", opacity: ".75", transition: "opacity ease 250ms" }} ></a>
                                <a href="#img-music-3" style={{ width: ".5rem", height: ".5rem", borderRadius: "50%", backgroundColor: "white", opacity: ".75", transition: "opacity ease 250ms" }} ></a>
                                <a href="#img-music-4" style={{ width: ".5rem", height: ".5rem", borderRadius: "50%", backgroundColor: "white", opacity: ".75", transition: "opacity ease 250ms" }} ></a>
                            </div>
                        </div>
                    </div>

                    <div style={{ border: "1px solid var(--base-variant)", margin: "40px 0 0 0", borderRadius: "10px", padding: "10px 20px", boxShadow: "4px 6px var(--text-color)" }}>
                        <div style={{ display: "flex", fontSize: "15px", padding: "10px 10px", borderBottom: "1px solid var(--base-variant)" }}>
                            <div style={{ paddingRight: "10px" }}>
                                <BookIcon width={18} height={18} />
                            </div>
                            <div>
                                <p>
                                    Lectura
                                </p>
                            </div>
                        </div>

                        <div style={{ paddingTop: "20px" }}>
                            <p style={{ fontSize: "13px" }}>
                                Unas de las actividades que mas que hobbie quise convertir en habito fue la lectura. Por años fue algo que me costaba realizar, ya que soy mas habil aprendiendo de manera practica. Los ultimos años me he puesto la meta de leer al menos 3 libros de manera anual.
                            </p>
                        </div>

                        <div style={{ position: "relative", maxWidth: "1000px", margin: "30px auto" }}>
                            <div style={{ display: "flex", aspectRatio: "16 / 9", overflowX: "hidden", scrollSnapType: "x mandatory", scrollBehavior: "smooth", boxShadow: "0 .25rem .5rem #21212126", borderRadius: ".5rem" }}>
                                <img src={bunnie} alt="Bunnie" id="img-music-1" style={{ flex: "1 0 100%", scrollSnapAlign: "start", objectFit: "contain" }} />
                                <img src={bunnie} alt="Bunnie" id="img-music-2" style={{ flex: "1 0 100%", scrollSnapAlign: "start", objectFit: "contain" }} />
                                <img src={bunnie} alt="Bunnie" id="img-music-3" style={{ flex: "1 0 100%", scrollSnapAlign: "start", objectFit: "contain" }} />
                                <img src={bunnie} alt="Bunnie" id="img-music-4" style={{ flex: "1 0 100%", scrollSnapAlign: "start", objectFit: "contain" }} />
                            </div>

                            <div style={{ display: "flex", columnGap: "1rem", position: "absolute", bottom: "1.25rem", left: "50%", transform: "translateX(-50%)", zIndex: "1" }}>
                                <a href="#img-music-1" style={{ width: ".5rem", height: ".5rem", borderRadius: "50%", backgroundColor: "white", opacity: ".75", transition: "opacity ease 250ms" }} ></a>
                                <a href="#img-music-2" style={{ width: ".5rem", height: ".5rem", borderRadius: "50%", backgroundColor: "white", opacity: ".75", transition: "opacity ease 250ms" }} ></a>
                                <a href="#img-music-3" style={{ width: ".5rem", height: ".5rem", borderRadius: "50%", backgroundColor: "white", opacity: ".75", transition: "opacity ease 250ms" }} ></a>
                                <a href="#img-music-4" style={{ width: ".5rem", height: ".5rem", borderRadius: "50%", backgroundColor: "white", opacity: ".75", transition: "opacity ease 250ms" }} ></a>
                            </div>
                        </div>
                    </div>

                    <div style={{ border: "1px solid var(--base-variant)", margin: "40px 0 0 0", borderRadius: "10px", padding: "10px 20px", boxShadow: "4px 6px var(--text-color)" }}>
                        <div style={{ display: "flex", fontSize: "15px", padding: "10px 10px", borderBottom: "1px solid var(--base-variant)" }}>
                            <div style={{ paddingRight: "10px" }}>
                                <VidegameIcon width={18} height={18} />
                            </div>
                            <div>
                                <p>
                                    Videojuegos
                                </p>
                            </div>
                        </div>

                        <div style={{ paddingTop: "20px" }}>
                            <p style={{ fontSize: "13px" }}>
                                Aunque es algo que ya he dejado de hacer mas con el tiempo, me gustan mucho los videojuegos. Uno que me gustaba jugar con amigos era League Of Legends y tambien Gears of Wars.
                            </p>
                        </div>

                        <div style={{ position: "relative", maxWidth: "1000px", margin: "30px auto" }}>
                            <div style={{ display: "flex", aspectRatio: "16 / 9", overflowX: "hidden", scrollSnapType: "x mandatory", scrollBehavior: "smooth", boxShadow: "0 .25rem .5rem #21212126", borderRadius: ".5rem" }}>
                                <img src={bunnie} alt="Bunnie" id="img-music-1" style={{ flex: "1 0 100%", scrollSnapAlign: "start", objectFit: "contain" }} />
                                <img src={bunnie} alt="Bunnie" id="img-music-2" style={{ flex: "1 0 100%", scrollSnapAlign: "start", objectFit: "contain" }} />
                                <img src={bunnie} alt="Bunnie" id="img-music-3" style={{ flex: "1 0 100%", scrollSnapAlign: "start", objectFit: "contain" }} />
                                <img src={bunnie} alt="Bunnie" id="img-music-4" style={{ flex: "1 0 100%", scrollSnapAlign: "start", objectFit: "contain" }} />
                            </div>

                            <div style={{ display: "flex", columnGap: "1rem", position: "absolute", bottom: "1.25rem", left: "50%", transform: "translateX(-50%)", zIndex: "1" }}>
                                <a href="#img-music-1" style={{ width: ".5rem", height: ".5rem", borderRadius: "50%", backgroundColor: "white", opacity: ".75", transition: "opacity ease 250ms" }} ></a>
                                <a href="#img-music-2" style={{ width: ".5rem", height: ".5rem", borderRadius: "50%", backgroundColor: "white", opacity: ".75", transition: "opacity ease 250ms" }} ></a>
                                <a href="#img-music-3" style={{ width: ".5rem", height: ".5rem", borderRadius: "50%", backgroundColor: "white", opacity: ".75", transition: "opacity ease 250ms" }} ></a>
                                <a href="#img-music-4" style={{ width: ".5rem", height: ".5rem", borderRadius: "50%", backgroundColor: "white", opacity: ".75", transition: "opacity ease 250ms" }} ></a>
                            </div>
                        </div>
                    </div>

                    <div style={{ border: "1px solid var(--base-variant)", margin: "40px 0 0 0", borderRadius: "10px", padding: "10px 20px", boxShadow: "4px 6px var(--text-color)" }}>
                        <div style={{ display: "flex", fontSize: "15px", padding: "10px 10px", borderBottom: "1px solid var(--base-variant)" }}>
                            <div style={{ paddingRight: "10px" }}>
                                <GymIcon width={18} height={18} />
                            </div>
                            <div>
                                <p>
                                    Gimnasio
                                </p>
                            </div>
                        </div>

                        <div style={{ paddingTop: "20px" }}>
                            <p style={{ fontSize: "13px" }}>
                                Este hobbie empezo principalmente por motivos de salud, pero eventualmente se convirtio en uno de mis favoritos, me divierto mucho cada vez que voy. Procuro acudir de 3 a 4 veces a la semana y le dedico de 2 a 3 horas.
                            </p>
                        </div>

                        <div style={{ position: "relative", maxWidth: "1000px", margin: "30px auto" }}>
                            <div style={{ display: "flex", aspectRatio: "16 / 9", overflowX: "hidden", scrollSnapType: "x mandatory", scrollBehavior: "smooth", boxShadow: "0 .25rem .5rem #21212126", borderRadius: ".5rem" }}>
                                <img src={bunnie} alt="Bunnie" id="img-music-1" style={{ flex: "1 0 100%", scrollSnapAlign: "start", objectFit: "contain" }} />
                                <img src={bunnie} alt="Bunnie" id="img-music-2" style={{ flex: "1 0 100%", scrollSnapAlign: "start", objectFit: "contain" }} />
                                <img src={bunnie} alt="Bunnie" id="img-music-3" style={{ flex: "1 0 100%", scrollSnapAlign: "start", objectFit: "contain" }} />
                                <img src={bunnie} alt="Bunnie" id="img-music-4" style={{ flex: "1 0 100%", scrollSnapAlign: "start", objectFit: "contain" }} />
                            </div>

                            <div style={{ display: "flex", columnGap: "1rem", position: "absolute", bottom: "1.25rem", left: "50%", transform: "translateX(-50%)", zIndex: "1" }}>
                                <a href="#img-music-1" style={{ width: ".5rem", height: ".5rem", borderRadius: "50%", backgroundColor: "white", opacity: ".75", transition: "opacity ease 250ms" }} ></a>
                                <a href="#img-music-2" style={{ width: ".5rem", height: ".5rem", borderRadius: "50%", backgroundColor: "white", opacity: ".75", transition: "opacity ease 250ms" }} ></a>
                                <a href="#img-music-3" style={{ width: ".5rem", height: ".5rem", borderRadius: "50%", backgroundColor: "white", opacity: ".75", transition: "opacity ease 250ms" }} ></a>
                                <a href="#img-music-4" style={{ width: ".5rem", height: ".5rem", borderRadius: "50%", backgroundColor: "white", opacity: ".75", transition: "opacity ease 250ms" }} ></a>
                            </div>
                        </div>
                    </div>

                    <div style={{ border: "1px solid var(--base-variant)", margin: "40px 0 70px 0", borderRadius: "10px", padding: "10px 20px", boxShadow: "4px 4px var(--text-color)" }}>
                        <div style={{ display: "flex", fontSize: "15px", padding: "10px 10px", borderBottom: "1px solid var(--base-variant)" }}>
                            <div style={{ paddingRight: "10px" }}>
                                <TVIcon width={18} height={18} />
                            </div>
                            <div>
                                <p>
                                    Peliculas y series
                                </p>
                            </div>
                        </div>

                        <div style={{ paddingTop: "20px" }}>
                            <p style={{ fontSize: "13px" }}>
                                Todos los dias, al finalizar el dia, antes de dormir me gusta ver una pelicula o una serie de manera que me ayude a despejar la mente y a relajarme, para poder terminar de cansar la vista y poder consiliar el sueño de manera mas sencilla.
                            </p>


                            <div>
                                <div>
                                    <p style={{ fontSize: "13px", paddingTop: "10px" }}>Las series que he visto y son mis favoritas:</p>

                                </div>

                                <div>
                                    <p style={{ fontSize: "13px", padding: "10px 0 0 45px" }}>
                                    </p>
                                </div>

                                <div>
                                    <ol>
                                        <li style={{ fontSize: "13px", margin: "10px 0 0 45px" }}>Como conoci a tu madre.</li>
                                        <li style={{ fontSize: "13px", margin: "10px 0 0 45px" }}>La ley de los audaces</li>
                                        <li style={{ fontSize: "13px", margin: "10px 0 0 45px" }}>Peaky Blinders</li>
                                        <li style={{ fontSize: "13px", margin: "10px 0 0 45px" }}>Mejor llama a Saul</li>
                                        <li style={{ fontSize: "13px", margin: "10px 0 0 45px" }}>Breaking Bad</li>
                                        <li style={{ fontSize: "13px", margin: "10px 0 0 45px" }}>La ley y el orden.</li>
                                    </ol>
                                </div>
                            </div>
                        </div>

                        <div style={{ position: "relative", maxWidth: "1000px", margin: "30px auto" }}>
                            <div style={{ display: "flex", aspectRatio: "16 / 9", overflowX: "hidden", scrollSnapType: "x mandatory", scrollBehavior: "smooth", boxShadow: "0 .25rem .5rem #21212126", borderRadius: ".5rem" }}>
                                <img src={bunnie} alt="Bunnie" id="img-music-1" style={{ flex: "1 0 100%", scrollSnapAlign: "start", objectFit: "contain" }} />
                                <img src={bunnie} alt="Bunnie" id="img-music-2" style={{ flex: "1 0 100%", scrollSnapAlign: "start", objectFit: "contain" }} />
                                <img src={bunnie} alt="Bunnie" id="img-music-3" style={{ flex: "1 0 100%", scrollSnapAlign: "start", objectFit: "contain" }} />
                                <img src={bunnie} alt="Bunnie" id="img-music-4" style={{ flex: "1 0 100%", scrollSnapAlign: "start", objectFit: "contain" }} />
                            </div>

                            <div style={{ display: "flex", columnGap: "1rem", position: "absolute", bottom: "1.25rem", left: "50%", transform: "translateX(-50%)", zIndex: "1" }}>
                                <a href="#img-music-1" style={{ width: ".5rem", height: ".5rem", borderRadius: "50%", backgroundColor: "white", opacity: ".75", transition: "opacity ease 250ms" }}></a>
                                <a href="#img-music-2" style={{ width: ".5rem", height: ".5rem", borderRadius: "50%", backgroundColor: "white", opacity: ".75", transition: "opacity ease 250ms" }} ></a>
                                <a href="#img-music-3" style={{ width: ".5rem", height: ".5rem", borderRadius: "50%", backgroundColor: "white", opacity: ".75", transition: "opacity ease 250ms" }} ></a>
                                <a href="#img-music-4" style={{ width: ".5rem", height: ".5rem", borderRadius: "50%", backgroundColor: "white", opacity: ".75", transition: "opacity ease 250ms" }} ></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}