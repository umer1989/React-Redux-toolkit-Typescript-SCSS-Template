import nock from 'nock'
import { render, screen } from '@testing-library/react'
import MovieContainer from './index'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

//Configuring a mockStore
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
test('test getSomeData', () => {
    const store = mockStore({})

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
    const linkElement = screen.getByText(/No Movie Selected/i)
    expect(linkElement).toBeInTheDocument()
})
