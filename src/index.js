// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// serviceWorker.unregister();

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider, connect} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import propTypes from 'prop-types'

//Actions
const INCREMENT = 'e.INCREMENT'

//Actions Creators
const increment = () => ({
    type: INCREMENT
})

//Store

//Initial State
const initialState = {
    count: 0
}

//Reducer
const reducer = (state=initialState, action) => {
    switch (action.type) {
        case INCREMENT: {
            return Object.assign(
                {},
                state,
                {count: state.count + 1}
            )
        }
        default: return state
    }
}

// Store Setup
const store = createStore(reducer,
    initialState,
    window.devToolsExtension ?
        window.devToolsExtension() :
        undefined
)

class App extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const {count,increment} = this.props
        return (
            <div>
                <div>{count}</div>
                <button onClick={increment}>
                    Sync Increment
                </button>
            </div>
        )
    }
}

App.propTypes = {
    count: propTypes.number.isRequired,
    increment: propTypes.func.isRequired
}

//Connect React & Redux
const mapStateToProps = state => ({
    count: state.count
})

const mapDispatchToProps = ({
    increment
})

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps)(App)

const Main = () => (
    <Provider store={store}>
        <AppContainer/>
    </Provider>
)
    
ReactDOM.render(<Main/>, document.getElementById('app'))