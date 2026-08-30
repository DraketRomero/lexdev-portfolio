import { useRef } from "react";
import type { CardHobbieProps } from "./interfaces/ICardHobbie";
import './css/cardHobbie.css';

export const CardHobbie = ({ children, lightMode, Icon, hobbieTitle, hobbieDescription, hobbieImages }: CardHobbieProps) => {

    const themeMode = lightMode ? '-light' : '';
    const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

    const scrollToImage = (e: React.MouseEvent<HTMLAnchorElement>, index: number) => {
        e.preventDefault();

        imageRefs.current[index]?.scrollIntoView({
            behavior: 'smooth',
            inline: 'start',
            block: 'nearest'
        })
    }

    return (
        <div className={`card-hobbie${themeMode}`}>
            <div className={`card-hobbie-title-main-container${themeMode}`}>
                <div className={`card-hobbie-icon-container${themeMode}`}>
                    <Icon width={18} height={18} />
                </div>
                <div className={`card-hobbie-title-container${themeMode}`}>
                    <p>
                        {hobbieTitle}
                    </p>
                </div>
            </div>

            <div className={`card-hobbie-description-container${themeMode}`}>
                <p className={`card-hobbie-description${themeMode}`}>
                    {hobbieDescription}
                </p>
            </div>

            {children}

            <div className='card-hobbie-carrusel-main-container'>
                <div className='card-hobbie-images-container'>
                    {
                        hobbieImages.map((img, i) => (<img key={i} ref={(el) => { imageRefs.current[i] = el }} src={img} alt="" id={`img-music-${i}`} className='card-hobbie-image' />))
                    }
                </div>

                <div className="card-hobbie-navigation-container">
                    {
                        hobbieImages.map((_, i) => (<a key={i} href={`#img-music-${i + 1}`} onClick={(e) => scrollToImage(e, i)} aria-label={`${i + 1}`} className='card-hobbie-image-link' ></a>))
                    }
                </div>
            </div>
        </div>
    )
}