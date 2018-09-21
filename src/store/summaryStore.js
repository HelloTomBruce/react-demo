import { EventEmitter } from 'events'
import Dispatcher from './dispatcher.js'
import ActionTypes from './actionType.js'
import CounterStore from './counterStore.js'

const CHANGE_EVENT = 'counter-change'

function computeSummary (counterValues) {
    let sum = 0
    for (let key in counterValues) {
        if (counterValues.hasOwnProperty(key)) {
            sum += counterValues[key]
        }
    }
    return sum
}

const SummaryStore = Object.assign({}, EventEmitter.prototype, {
    getSummary () {
        return computeSummary(CounterStore.getCounter())
    },

    emitChange () {
        this.emit(CHANGE_EVENT)
    },

    addChangeListener (callback) {
        this.on(CHANGE_EVENT, callback)
    },

    removeListener (callback) {
        this.removeListener(CHANGE_EVENT, callback)
    }
})

SummaryStore.dispatchToken = Dispatcher.register((action) => {
    if ((action.type === ActionTypes.INCREMENT) || (action.type === ActionTypes.DECREMENT)) {
        Dispatcher.waitFor([CounterStore.dispatchToken])
        SummaryStore.emitChange()
    }
})

export default SummaryStore