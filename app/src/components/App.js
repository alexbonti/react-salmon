import React from 'react'
import { Link } from 'react-router'
import Header from './header/Header'
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

const app = React.createClass({
    render: function(props) {

        var path = this.props.location.pathname;
        var segment = path.split('/')[1] || 'root';

        return (<div>
                <Header />
                <ReactCSSTransitionGroup transitionName="pageAppear"
                                         transitionAppearTimeout={500}
                                         transitionEnterTimeout={200}
                                         transitionLeaveTimeout={200}
                >
                    {React.cloneElement(this.props.children, { key: segment })}
                </ReactCSSTransitionGroup>

            </div>
        )
    }
})


app.propTypes = {
    children: React.PropTypes.node,
}

export default app
