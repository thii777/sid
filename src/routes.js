import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Attendance from './pages/Attendance';
import Help from './pages/Help';
import Cart from './pages/Cart';
import Shoes from './pages/Home/Shoes';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/attendance" component={Attendance} />
            <Route path="/help" component={Help} />
            <Route path="/cart" component={Cart} />
            <Route path="/shoes" component={Shoes} />
        </Switch>
    );
}
