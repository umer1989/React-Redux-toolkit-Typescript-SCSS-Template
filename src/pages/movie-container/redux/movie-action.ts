import apiUrls from '../../../api/APIConstants'
import axios from '../../../api/axios'

async function fetchMovies() {
    try {
        return axios.get(apiUrls.getFilmsUrl)
    } catch (error) {
        console.error(error)
        return []
    }
}
export default fetchMovies
