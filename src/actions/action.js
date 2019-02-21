import {
    INCREMENT,
    DECREMENT
} from '../constant.js'

export const increment = () => ({
    type: INCREMENT
})

export const decrement = () => ({
    type: DECREMENT
})
