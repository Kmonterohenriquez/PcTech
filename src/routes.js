import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Page/Home/Home';
import AdminCenter from './Page/AdminCenter/AdminCenter';
import Location from './Page/Location/Location';
import About from './Page/About/About';
import Cart from './Page/Cart/Cart';
import Details from './Page/Details/Details';
import Checkout from './Page/Checkout/Checkout';
import Invoice from './Components/Invoice/Invoice';
import Products from './Page/Products/Products';

export default (
  <Switch>
    <Route component={Home} exact path='/' />
    <Route component={AdminCenter} exact path='/admin_center' />
    <Route component={Products} exact path='/products/:itemsType' />
    <Route component={Location} exact path='/location' />
    <Route component={About} exact path='/about_us' />
    <Route component={Cart} exact path='/cart' />
    <Route component={Details} path='/details/:id' />
    <Route component={Checkout} exact path='/checkout' />
    <Route component={Invoice} exact path='/invoice' />
  </Switch>
);
