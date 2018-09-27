import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import CounterStore from '../store/counterStore.js'
//import  * as Action from '../store/action.js'
//import store from '../redux/store.js'
import * as Action from '../redux/action.js'

class Counter extends Component {
    constructor(props, context) {
        super(props, context)
        this.onChange = this.onChange.bind(this)
        this.onClickIncrementBtn = this.onClickIncrementBtn.bind(this)
        this.onClickDecrementBtn = this.onClickDecrementBtn.bind(this)
        // this.state = {
        //     count: CounterStore.getCounter()[props.caption]
        // }
        this.state = this.getOwnState()
    }
    getOwnState () {
        return {
            value: this.context.store.getState()[this.props.caption]
        }
    }
    onClickIncrementBtn () {
        this.context.store.dispatch(Action.increment(this.props.caption))
    }
    onClickDecrementBtn () {
        this.context.store.dispatch(Action.decrement(this.props.caption))
    }
    componentWillMount () {
        console.log('counter component will mount')
    }
    render () {
        const { caption } = this.props
        return (
            <div>
                <button onClick={this.onClickIncrementBtn}>+</button>
                <span>{caption} count: {this.state.value}</span>
                <button onClick={this.onClickDecrementBtn}>-</button>
            </div>
        )
    }
    componentDidMount () {
       // CounterStore.addChangeListener(this.onChange)
       this.context.store.subscribe(this.onChange)
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
        //CounterStore.removeChangeListener(this.onChange)
        this.context.store.unsubscribe(this.onChange)
    }
    onChange () {
        // const newCount = CounterStore.getCounter()[this.props.caption]
        // this.setState({
        //     count: newCount
        // })
        this.setState(this.getOwnState())
    }
}

Counter.PropTypes = {
    caption: PropTypes.string.isRequired
}

Counter.defaultProps = {
    caption: 'First'
}

Counter.contextTypes = {
    store: PropTypes.object
}
export default Counter