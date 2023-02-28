/* eslint-disable import/no-cycle */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress'
import { fetchMovieAsync, selectCount } from './redux/movie-reducer'
import MovieList from '../../components/movielistcomponent/index'
import MovieDetails from '../../components/movie-details/index'
import SearchComponent from '../../components/search/index'
import './movie-container.scss'

export interface movie {
    director: string
    opening_crawl: string
    episode_id: number
    release_date: string
    title: string
}

const emptyMovieObj = {
    opening_crawl: '',
    episode_id: -1,
    release_date: '',
    title: '',
    director: '',
}

function Movie() {
    const { results, status } = useSelector(selectCount)
    const [originalData, setOriginalData] = useState<movie[]>([])
    const [rows, setRows] = useState<movie[]>([])
    const [selectedMovie, setSelectedMovie] = useState<movie>(emptyMovieObj)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch<any>(fetchMovieAsync())
    }, [])

    const handleSelectChangCallback = (clonedMovieArray: movie[]) => {
        setRows(clonedMovieArray)
    }

    useEffect(() => {
        setOriginalData(results)
        setRows(results)
    }, [results])

    const searchInputChangeCallback = (filteredRows: movie[]) => {
        setRows(filteredRows)
        setSelectedMovie(emptyMovieObj)
    }

    const onMovieSelected = (movie: movie) => {
        setSelectedMovie(movie)
    }

    return (
        <>
            {status === 'loading' ? (
                <div className="progress-bar">
                    <CircularProgress />
                    <span>Loading...</span>
                </div>
            ) : (
                <>
                    <SearchComponent
                        searchInputChangeCallback={searchInputChangeCallback}
                        handleSelectChange={handleSelectChangCallback}
                        movieArray={rows}
                        orgMovieArray={originalData}
                    />
                    <div className="movie-container">
                        <MovieList
                            movies={rows}
                            onMovieSelected={onMovieSelected}
                        />
                        <MovieDetails movie={selectedMovie} />
                    </div>
                </>
            )}
        </>
    )
}
export default Movie
