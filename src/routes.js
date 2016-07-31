import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import NotFound from './components/notFound'
import FlightsIndex from './components/flightsIndex';
import AdminIndex from './components/adminIndex';
import FlightNew from './containers/flightNew';
import FlightShow from './containers/flightShow';
import Authentication from './containers/authenticated'

export default (
    <div>
        <Route path='/' component={App}>
            <IndexRoute component={FlightsIndex} />
            <Route path='admin' component={Authentication(AdminIndex)} />
            <Route path='admin/flight/new' component={Authentication(FlightNew)} />
            <Route path='admin/flight/:id' component={Authentication(FlightShow)} />
        </Route>
        <Route path='*' component={NotFound} />
    </div>
);