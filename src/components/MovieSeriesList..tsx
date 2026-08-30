import './css/movieSeriesList.css';

export const MovieSeriesList = () => {
    return (
        <div className='movie-series-container'>
            <div>
                <p className='movie-series-paragraph-list'>Las series que he visto y son mis favoritas:</p>
            </div>

            <div className='movie-series-paragraph-list-container'>
                <ol>
                    <li className='movie-series-item-list'>Como conoci a tu madre.</li>
                    <li className='movie-series-item-list'>La ley de los audaces</li>
                    <li className='movie-series-item-list'>Peaky Blinders</li>
                    <li className='movie-series-item-list'>Mejor llama a Saul</li>
                    <li className='movie-series-item-list'>Breaking Bad</li>
                    <li className='movie-series-item-list'>La ley y el orden.</li>
                </ol>
            </div>
        </div>
    )
}