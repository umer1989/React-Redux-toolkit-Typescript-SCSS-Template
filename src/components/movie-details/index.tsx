/* eslint-disable no-unused-vars */
/* eslint-disable react/no-danger */

import { movie } from '../../pages/movie-container/index'
import convert from '../../utils/commonfunctions'
import './movie-details.scss'

export default function MovieDetails(props: { movie: movie }) {
    const { movie: movieDetails } = props
    return (
        <div className="movie-details">
            {movieDetails.episode_id !== -1 ? (
                <div className="movie-content">
                    <h2>
                        Episode {convert(movieDetails.episode_id)} -
                        {movieDetails.title}
                    </h2>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: movieDetails.opening_crawl,
                        }}
                    />
                    <br />
                    <span>Directed by: {movieDetails.director}</span>
                </div>
            ) : (
                <div className="no-movie-div">
                    <span>
                        <strong>No Movie Selected</strong>
                    </span>
                </div>
            )}
        </div>
    )
}
