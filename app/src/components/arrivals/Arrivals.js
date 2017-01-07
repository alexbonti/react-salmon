/**
 *    Filename Arrivals
 * Created by alessiobonti on 4/01/2017
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Sidebar from './Sidebar'
import CurrentArrival from './CurrentArrival'
import {setCurrent} from '../../actions/currentArrivalActions'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6
import './arrivals.css'


class Arrivals extends Component {

    constructor(props, context) {
        super(props, context)
        this.setCurrentHandleClick=this.setCurrentHandleClick.bind(this)
    }


    setCurrentHandleClick(currentItem){
        console.log(currentItem)
        this.props.setCurrentArrival(currentItem)
    }
    randomIdGenerator(){
        return Math.random()
    }





    render() {
        return (
            <div className="col-xs-12">
                <div className="col-xs-4">
                    <Sidebar arrivals={this.props.arrivals} current={this.props.current} handleItemClick={this.setCurrentHandleClick}/>
                </div>
                <div className="col-xs-8">
                    This is the main part
                    <ReactCSSTransitionGroup
                        transitionName="example"
                        transitionAppear={true}
                        transitionAppearTimeout={350}
                        transitionEnter={true}
                        transitionLeave={false}>

                    <CurrentArrival key={this.randomIdGenerator()}  current={this.props.current}/>
                    </ReactCSSTransitionGroup>


                </div>
            </div>
        )
    }

}

Arrivals.PropTypes = {
    //myProp:PropTypes.string.isRequired
}

//  this function makes the props available remapped to the component
function mapStateToProps(state) {
    console.log(state)
    return {
        arrivals: state.arrivals,
        current:state.current
    }

}

// here you can use the actions to dispatch and remapping them to make it easier to read
function mapDispatchToProps(dispatch) {
    return {
     setCurrentArrival: bindActionCreators(setCurrent,dispatch)
     }

}

export default connect(mapStateToProps, mapDispatchToProps)(Arrivals)