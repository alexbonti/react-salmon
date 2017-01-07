/**
 *    Filename CurrentArrival
 * Created by alessiobonti on 5/01/2017
 */

import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6

import { Link } from 'react-router'

class CurrentArrival extends Component {

    renderEmtpy() {
        return (
            <div className="panel panel-danger">
                <div className="panel-heading">Current Virus</div>
                <div className="panel-body">None selected</div>
            </div>)

    }

    renderFull(props) {
        console.log(props)
        return (
            
            <div className="panel panel-primary">
                <div className="panel-heading">Current Virus</div>
                <div className="panel-body">This virus is called {props.currentArrival.name}</div>
            </div>)

    }


    render() {
        console.log(this.props.current)
        if (Object.keys(this.props.current).length === 0) {
            return this.renderEmtpy()
        } else {
            return this.renderFull(this.props.current)
        }

    }

}
export default CurrentArrival