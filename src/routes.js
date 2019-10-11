import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Shoes from './pages/Home/Shoes';
import Tshirt from './pages/Home/T-shirts';
import Short from './pages/Home/Shorts';
import Hat from './pages/Home/Hats';
import Clock from './pages/Home/Clocks';
import Sockets from './pages/Home/Sockets';
import Accessories from './pages/Home/Accessories';
import Promotion from './pages/Home/Promotion';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="/shoes" component={Shoes} />
            <Route path="/t-shirt" component={Tshirt} />
            <Route path="/short" component={Short} />
            <Route path="/hat" component={Hat} />
            <Route path="/clock" component={Clock} />
            <Route path="/sockets" component={Sockets} />
            <Route path="/accessories" component={Accessories} />
            <Route path="/promotion" component={Promotion} />
        </Switch>
    );
}
