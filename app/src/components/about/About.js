/**
 *    Filename About
 * Created by alessiobonti on 4/01/2017
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class About extends Component {

    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
            <div className="page">About</div>
        )
    }

}

About.PropTypes = {
    //myProp:PropTypes.string.isRequired
}

//  this function makes the props available remapped to the component
function mapStateToProps(state) {
    /*return {
     state:state
     }*/
    return {}
}

// here you can use the actions to dispatch and remapping them to make it easier to read
function mapDispatchToProps(dispatch) {
    /*return {
     actions: bindActionCreators(actions,dispatch)
     }*/
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(About)