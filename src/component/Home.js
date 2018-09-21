import React, { Component } from 'react'
import ClickCounter from './ClickCounter'

class Home extends Component {
    render () {
        return (
            <div>
                <h1>Home</h1>
                <ClickCounter/>
            </div>
        )
    }
}

export default Home