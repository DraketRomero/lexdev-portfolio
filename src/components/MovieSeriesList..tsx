import { useTranslation } from 'react-i18next';
import './css/movieSeriesList.css';

export const MovieSeriesList = () => {
    const { t } = useTranslation();
    return (
        <div className='movie-series-container'>
            <div>
                <p className='movie-series-paragraph-list'>{t('aboutme.cardContainers.tv.comment.0')}</p>
            </div>

            <div className='movie-series-paragraph-list-container'>
                <ol>
                    <li className='movie-series-item-list'>{t('aboutme.cardContainers.tv.comment.1.0')}</li>
                    <li className='movie-series-item-list'>{t('aboutme.cardContainers.tv.comment.1.1')}</li>
                    <li className='movie-series-item-list'>{t('aboutme.cardContainers.tv.comment.1.2')}</li>
                    <li className='movie-series-item-list'>{t('aboutme.cardContainers.tv.comment.1.3')}</li>
                    <li className='movie-series-item-list'>{t('aboutme.cardContainers.tv.comment.1.4')}</li>
                    <li className='movie-series-item-list'>{t('aboutme.cardContainers.tv.comment.1.5')}</li>
                </ol>
            </div>
        </div>
    )
}