import React, {lazy, Suspense} from 'react';
import './Body.css';
import { Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('../../pages/home/Home'));
const Places = lazy(() => import('../../pages/places/Places'));
const Deals = lazy(() => import('../../pages/deals/Deals'));
const NotFound = lazy(() => import('../../pages/notfound/NotFound'));
const Item = lazy(() => import('../../pages/item/Item'));
const Countries = lazy(() => import('../../pages/countries/Countries'));
const Cities = lazy(() => import('../../pages/cities/Cities'))

function Body(){
    return(
        <div id="body">
            <Suspense fallback={<p>Loading...</p>}>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/places" component={Places}/>
                    <Route exact path="/continent/:continentId" component={Countries}/>
                    <Route exact path="/continent/:continentId/country/:countryId" component={Cities}/>
                    <Route exact path="/continent/:continentId/country/:countryId/hotel/:hotelId" component={Item}/>
                    <Route path="/deals" component={Deals}/>
                    {/* <Route path="/item/:id" component={Item}/> */}
                    <Route component={NotFound}/>
                </Switch>
            </Suspense>
        </div>
    );
}

export default Body;