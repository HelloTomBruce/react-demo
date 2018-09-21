import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CounterStore from '../store/counterStore.js'
import  * as Action from '../store/action.js'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.onClickIncrementBtn = this.onClickIncrementBtn.bind(this)
        this.onClickDecrementBtn = this.onClickDecrementBtn.bind(this)
        this.state = {
            count: CounterStore.getCounter()[props.caption]
        }
    }
    onClickIncrementBtn () {
        Action.increment(this.props.caption)
    }
    onClickDecrementBtn () {
        Action.decrement(this.props.caption)
    }
    componentWillMount () {
        console.log('counter component will mount')
    }
    render () {
        const { caption } = this.props
        return (
            <div>
                <button onClick={this.onClickIncrementBtn}>+</button>
                <span>{caption} count: {this.state.count}</span>
                <button onClick={this.onClickDecrementBtn}>-</button>
            </div>
        )
    }
    componentDidMount () {
        CounterStore.addChangeListener(this.onChange)
    }
    componentWillReceiveProps (nextProps) {

    }
    shouldComponentUpdate (nextProps, nextState) {
        return nextState.count < 0 ? false : true
    }
    componentWillUpdate () {

    }
    componentDidUpdate () {

    }
    componentWillUnmount () {
        CounterStore.removeChangeListener(this.onChange)
    }
    onChange () {
        const newCount = CounterStore.getCounter()[this.props.caption]
        this.setState({
            count: newCount
        })
    }
}

Counter.PropTypes = {
    caption: PropTypes.string.isRequired
}

Counter.defaultProps = {
    caption: 'First'
}
export default Counter