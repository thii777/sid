import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Attendance from './components/Header/Attendance';
import Help from './components/Header/Help';
import Cart from './pages/Cart';
import Sneakers from './pages/Sneakers';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/attendance" component={Attendance} />
            <Route path="/help" component={Help} />
            <Route path="/sneakers" component={Sneakers} />
            <Route path="/cart" component={Cart} />
        </Switch>
    );
}
