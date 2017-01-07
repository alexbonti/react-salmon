import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import HomePage from './components/home/HomePage'
import About from './components/about/About'
import Arrivals from './components/arrivals/Arrivals'


export default(
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="about" component={About}/>
        <Route path="arrivals" component={Arrivals}/>
    </Route>
)