/**
 *    Filename Header
 * Created by alessiobonti on 4/01/2017
 */

import React, { Component } from 'react'
import { Link } from 'react-router'

class Header extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link className="navbar-brand" to="/">Salmonella</Link>
                            <Link className="navbar-brand" to="/arrivals">Arrivals</Link>
                            <Link className="navbar-brand" to="/about">About</Link>

                        </div>
                    </div>
                </nav>
            </div>
        )
    }

}
export default Header