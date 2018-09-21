import { EventEmitter } from 'events'
import Dispatcher from './dispatcher.js'
import ActionTypes from './actionType'

const counterValues = {
    'First': 0,
    'Second': 1,
    'Third': 30
}

const CHANGE_EVENT = 'counter-change'

const CounterStore = Object.assign({}, EventEmitter.prototype, {
    getCounter () {
        return counterValues
    },
    emitChange () {
        this.emit(CHANGE_EVENT)
    },
    addChangeListener (callback) {
        this.on(CHANGE_EVENT, callback)
    },
    remoteChangeListener (callback) {
        this.removeListener(CHANGE_EVENT, callback)
    }
})

CounterStore.dispatchToken = Dispatcher.register((action) => {
    if (action.type === ActionTypes.INCREMENT) {
        counterValues[action.counterCaption] ++
        CounterStore.emitChange()
    } else if (action.type === ActionTypes.DECREMENT) {
        counterValues[action.counterCaption] --
        CounterStore.emitChange()
    }
})

export default CounterStore