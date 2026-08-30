import { BookIcon, GymIcon, MusicIcon, TVIcon, VidegameIcon } from "../assets/icons"
import { CardHobbie } from "../components/CardHobbie";
import { MovieSeriesList } from "../components/MovieSeriesList.";
import bunnie from './../assets/img/bunnie2.webp';
import './css/aboutMePage.css'

export const AboutMePage = () => {
    return (
        <div className='aboutme-main-container'>
            <div className='aboutme-description-container'>
                <div style={{ color: "var(--secondary-text)" }}>
                    <p className='aboutme-title'>Sobre Mi</p>
                    <p className='aboutme-description'>
                        Desarrollador full-stack con más de 6 años de experiencia en el diseño y la implementación de aplicaciones web escalables y API RESTful.
                    </p>
                    <p className='aboutme-description'>
                        Experiencia práctica en pruebas automatizadas, patrones de diseño y sistemas de mensajería asíncrona.
                    </p>
                    <p className='aboutme-description'>
                        Sólida formación en implementaciones en la nube en AWS/Azure y procesos de CI/CD.
                    </p>
                    <p className='aboutme-description'>
                        Comprometido con el código limpio, los principios SOLID, las mejores prácticas de revisión de código y la arquitectura de nivel empresarial.
                    </p>
                    <p className='aboutme-description'>
                        Aplico de forma activa los estándares de accesibilidad (WCAG 2.1) y las técnicas de optimización del rendimiento, incluyendo componentes independientes, señales, carga diferida y la estrategia de detección de cambios OnPush.
                    </p>
                </div>
            </div>

            <div className='aboutme-hobbies-main-container'>
                <div className='aboutme-hobbies-container'>
                    <p className='aboutme-title'>Hobbies e intereses</p>
                    <p className='aboutme-description'>
                        Actividades que me gusta hacer más allá del IDE.
                    </p>

                    <CardHobbie
                        lightMode={false}
                        Icon={MusicIcon}
                        hobbieTitle="Música"
                        hobbieDescription="Desde muy pequeño siempre me gustó la música y conforme fui creciendo, uno de mis sueños era aprender a tocar la guitarra. Durante la secundaria tuve la oportunidad de integrarme a la rondalla estudiantil y desde entonces no he dejado de tocar. En mis tiempos libres suelo aprender nuevas canciones y cantarlas a todo pulmon. Tambien suelo practicar mucho mi canto."
                        hobbieImages={[bunnie, bunnie, bunnie, bunnie]}
                    />

                    <CardHobbie
                        lightMode={true}
                        Icon={BookIcon}
                        hobbieTitle="Lectura"
                        hobbieDescription="Unas de las actividades que mas que hobbie quise convertir en habito fue la lectura. Por años fue algo que me costaba realizar, ya que soy mas habil aprendiendo de manera practica. Los ultimos años me he puesto la meta de leer al menos 3 libros de manera anual."
                        hobbieImages={[bunnie, bunnie, bunnie, bunnie]}
                    />

                    <CardHobbie
                        lightMode={false}
                        Icon={VidegameIcon}
                        hobbieTitle="Videojuegos"
                        hobbieDescription="Aunque es algo que ya he dejado de hacer mas con el tiempo, me gustan mucho los videojuegos. Uno que me gustaba jugar con amigos era League Of Legends y tambien Gears of Wars."
                        hobbieImages={[bunnie, bunnie, bunnie, bunnie]}
                    />

                    <CardHobbie
                        lightMode={true}
                        Icon={GymIcon}
                        hobbieTitle="Gimnasio"
                        hobbieDescription="Este hobbie empezo principalmente por motivos de salud, pero eventualmente se convirtio en uno de mis favoritos, me divierto mucho cada vez que voy. Procuro acudir de 3 a 4 veces a la semana y le dedico de 2 a 3 horas."
                        hobbieImages={[bunnie, bunnie, bunnie, bunnie]}
                    />

                    <CardHobbie
                        lightMode={false}
                        Icon={TVIcon}
                        hobbieTitle="Peliculas y series"
                        hobbieDescription="Todos los dias, al finalizar el dia, antes de dormir me gusta ver una pelicula o una serie de manera que me ayude a despejar la mente y a relajarme, para poder terminar de cansar la vista y poder consiliar el sueño de manera mas sencilla."

                        children={<MovieSeriesList />}
                        hobbieImages={[bunnie, bunnie, bunnie, bunnie]}
                    />
                </div>
            </div>
        </div>
    )
}