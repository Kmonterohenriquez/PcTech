import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Page/Home/Home';
import AdminCenter from './Page/AdminCenter/AdminCenter';
import Laptops from './Page/Laptops/Laptops';
import Desktops from './Page/Desktops/Desktops';
import Location from './Page/Location/Location';
import About from './Page/About/About';
export default (
	<Switch>
		<Route component={Home} exact path='/' />
		<Route component={AdminCenter} exact path='/admin_center' />
		<Route component={Laptops} exact path='/laptops' />
		<Route component={Desktops} exact path='/desktops' />
		<Route component={Location} exact path='/location' />
		<Route component={About} exact path='/about_us' />
	</Switch>
);
