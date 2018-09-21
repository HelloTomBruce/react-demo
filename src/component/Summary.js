import React, { Component } from 'react'
import SummaryStore from '../store/summaryStore.js'

class Summary extends Component {
    constructor () {
        super()
        this.onUpdate = this.onUpdate.bind(this)
        this.state = {
            sum: SummaryStore.getSummary()
        }
    }
    componentDidMount () {
        SummaryStore.addChangeListener(this.onUpdate)
    }
    componentWillUnmount () {
        SummaryStore.removeChangeListener(this.onUpdate)
    }
    onUpdate() {
        this.setState({
          sum: SummaryStore.getSummary()
        })
    }
    render () {
        return (
            <div>{this.state.sum}</div>
        )
    }
}

export default Summary