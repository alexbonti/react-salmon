import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'

import App from './components/App'
import Home from './components/home/HomePage'
import About from './components/about/About'
import routes from './routes'
import './styles/styles.css'
import './styles/transitions.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/configureStore'

/*render((
 <Router history={browserHistory}>
 <Route path="/" component={App}>
 <IndexRoute component={Home} />
 <Route path="/about" component={About} />
 </Route>
 </Router>
 ), document.getElementById('root'))*/

const initialState = {
    "arrivals": [
        { name: 'salmonella' }, { name: 'bob' }, { name: 'claire' }
    ]
}

const store = configureStore(initialState)
render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('root')
)

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
)
