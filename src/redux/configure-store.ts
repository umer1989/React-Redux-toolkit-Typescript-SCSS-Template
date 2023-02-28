import { configureStore } from '@reduxjs/toolkit'
import movieSlice from '../pages/movie-container/redux/movie-reducer'

const store = configureStore({
    reducer: {
        movies: movieSlice,
    },
})

export default store
