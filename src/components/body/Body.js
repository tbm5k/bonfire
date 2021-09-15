import React, {lazy, Suspense} from 'react';
import './Body.css';
import { Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('../../pages/home/Home'));
const Places = lazy(() => import('../../pages/places/Places'));
const Deals = lazy(() => import('../../pages/deals/Deals'));
const NotFound = lazy(() => import('../../pages/notfound/NotFound'));

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