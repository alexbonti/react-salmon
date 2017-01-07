/**
 *    Filename SidebarItem
 * Created by alessiobonti on 4/01/2017
 */

import React, { Component } from 'react'
import { Link } from 'react-router'

class SidebarItem extends Component {

    handleClick(e){
        console.log(this.props.data.name)
        this.props.handleItemClick(this.props.data)

    }

    render() {
        console.log('function',this.props)
        return (
            <div className="button btn-primary btn-block" onClick={this.handleClick.bind(this)}>{this.props.data.name}</div>
        )
    }

}
export default SidebarItem