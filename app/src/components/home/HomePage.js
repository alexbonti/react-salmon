import React, { Component } from 'react'
import {Link} from 'react-router'

class HomePage extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="jumbotron page">
                <h1>My Admin Page</h1>
                <p> React React REact for MRL</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
            </div>

        )
    }

}

export default HomePage