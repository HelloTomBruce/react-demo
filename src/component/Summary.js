import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import SummaryStore from '../store/summaryStore.js'
//import store from '../redux/store.js'

class Summary extends Component {
    constructor (props, context) {
        super(props, context)
        this.onUpdate = this.onUpdate.bind(this)
        // this.state = {
        //     sum: SummaryStore.getSummary()
        // }
        this.state = this.getOwnState()
    }
    getOwnState () {
        const state = this.context.store.getState()
        let sum = 0
        for (const key in state) {
            if (state.hasOwnProperty(key)) {
                sum += state[key]
            }
        }
        return {sum}
    }
    componentDidMount () {
        //SummaryStore.addChangeListener(this.onUpdate)
        this.context.store.subscribe(this.onUpdate)
    }
    componentWillUnmount () {
        //SummaryStore.removeChangeListener(this.onUpdate)
        this.context.store.unsubscribe(this.onUpdate)
    }
    onUpdate() {
        // this.setState({
        //   sum: SummaryStore.getSummary()
        // })
        this.setState(this.getOwnState())
    }
    render () {
        return (
            <div>{this.state.sum}</div>
        )
    }
}
Summary.contextTypes = {
    store: PropTypes.object
}
export default Summary