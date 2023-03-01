import nock from 'nock'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import MovieContainer from './index'
import store from '../../redux/configure-store'

test('test getSomeData', () => {
    nock('https://swapi.dev/api/films/?format=json')
        .get('/api')
        .once()
        .reply(200, {
            data: 'response',
        })
    render(
        <Provider store={store}>
            <MovieContainer />
        </Provider>,
    )
    const linkElement = screen.getByText(/Loading.../i)
    expect(linkElement).toBeInTheDocument()
})
