import React, { Component } from 'react'
import ControlPanel from './ControlPanel'
class ClickCounter extends Component {
    constructor(props) {
        super(props)
        this.onClickButton = this.onClickButton.bind(this)
        this.state = {
            count: 0
        }
    }
    onClickButton() {
        this.setState({
            count: this.state.count + 1
        })
    }
    render () {
        return (
            <div>
                <ControlPanel/>
            </div>
        )
    }
}

export default ClickCounter