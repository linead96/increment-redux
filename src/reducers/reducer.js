import {
    INCREMENT,
    DECREMENT,
}  from '../constant.js'


export const initialState = {
    count: 0
}


export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case INCREMENT: {
            return Object.assign(
                {},
                state,
                {count: state.count + 1}
            )
        }
        case DECREMENT: {
            return Object.assign(
                {},
                state,
                {count: state.count - 1}
            )
        }
        default: return state
    }
}