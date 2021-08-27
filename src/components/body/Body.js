import React from 'react';
import './Body.css';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/home/Home';

function Body(){
    return(
        <div id="body">
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/places">places</Route>
                <Route path="/deals">deals</Route>
            </Switch>
        </div>
    );
}

export default Body;