import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {initialState, reducer} from './reducers/reducer.js'
import App from './containers/App.js'

const store = createStore(reducer,
    initialState,
    window.devToolsExtension ?
        window.devToolsExtension() :
        undefined
)

ReactDOM.render(
                <Provider store={store}>
                <App/>       
                </Provider>, 
                document.getElementById('app'))