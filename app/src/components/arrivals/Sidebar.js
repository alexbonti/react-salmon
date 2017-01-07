/**
 *    Filename Sidebar
 * Created by alessiobonti on 4/01/2017
 */

import React, { Component } from 'react'
import { Link } from 'react-router'
import SidebarItem from './SidebarItem'

class Sidebar extends Component {

    render() {
        console.log(this.props)

        return (
            <div className="col-xs-12">
                <h3>List</h3>
                {this.props.arrivals.map(arrival=>
                    <SidebarItem key={arrival.name} data={arrival} handleItemClick={this.props.handleItemClick}/>)
                }


            </div>
        )
    }

}
export default Sidebar