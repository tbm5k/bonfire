import React, {lazy, Suspense} from 'react';
import './Body.css';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/home/Home';
import NotFound from '../../pages/notfound/NotFound';

const Places = lazy(() => import('../../pages/places/Places'));
const Deals = lazy(() => import('../../pages/deals/Deals'));

function Body(){
    return(
        <div id="body">
            <Suspense fallback={<p>Loading...</p>}>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/places" component={Places}/>
                    <Route path="/deals" component={Deals}/>
                    <Route component={NotFound}/>
                </Switch>
            </Suspense>
        </div>
    );
}

export default Body;