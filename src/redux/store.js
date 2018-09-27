import { createStore } from 'redux'
import reducer from './reducer.js'

const initValue = {
    'First': 1,
    'Second': 20,
    'Third': 30
}

const store = createStore(reducer, initValue)

export default store