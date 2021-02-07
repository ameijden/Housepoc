// import logo from './logo.svg';
// import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
// import { MoviesList, MoviesInsert, MoviesUpdate } from '../pages'
import { HousesList, HousesInsert} from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/houses/list" exact component={HousesList} />
                <Route path="/houses/create" exact component={HousesInsert} />
             </Switch>
        </Router>
    )
}

export default App;
