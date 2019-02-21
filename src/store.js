import {createStore} from 'redux'
import {initialState, reducer} from './reducers/reducer.js'

export const store = createStore(reducer,
    initialState,
    window.devToolsExtension ?
        window.devToolsExtension() :
        undefined
)