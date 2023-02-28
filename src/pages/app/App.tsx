import { Provider } from 'react-redux'
import store from '../../redux/configure-store'
import Movie from '../movie-container/index'
import './App.scss'

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Movie />
            </div>
        </Provider>
    )
}

export default App
