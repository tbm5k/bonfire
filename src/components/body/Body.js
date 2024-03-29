import React, {lazy, Suspense} from 'react';
import './Body.css';
import { Switch, Route } from 'react-router-dom';
import Form from '../bookForm/Form';

const Home = lazy(() => import('../../pages/home/Home'));
const Places = lazy(() => import('../../pages/places/Places'));
const Deals = lazy(() => import('../../pages/deals/Deals'));
const NotFound = lazy(() => import('../../pages/notfound/NotFound'));
const Item = lazy(() => import('../../pages/item/Item'));
const Countries = lazy(() => import('../../pages/countries/Countries'));
const Cities = lazy(() => import('../../pages/cities/Cities'))
const Admin = lazy(() => import('../../pages/admin/Admin'))

function Body(){
    return(
        <div className=' pt-24 pb-14 w-9/12 mx-auto'>
            <Suspense fallback={<p>Loading...</p>}>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/places" component={Places}/>
                    <Route exact path="/continent/:continentId" component={Countries}/>
                    <Route exact path="/continent/:continentId/country/:countryId" component={Cities}/>
                    <Route exact path="/continent/:continentId/country/:countryId/city/:cityId/hotel/:hotelId" component={Item}/>
                    <Route path="/deals" component={Deals}/>
                    {/* <Route path="/item/:id" component={Item}/> */}
                    <Route exact path="/continent/:continentId/country/:countryId/city/:cityId/hotel/:hotelId/book" component={Form}/>
                    <Route path="/admin" component={Admin}/>
                    <Route component={NotFound}/>
                </Switch>
            </Suspense>
        </div>
    );
}

export default Body;