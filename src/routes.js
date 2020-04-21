import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Page/Home/Home';
import AdminCenter from './Page/AdminCenter/AdminCenter';
import Laptops from './Page/Laptops/Laptops';
export default (
	<Switch>
		<Route component={Home} exact path='/' />
		<Route component={AdminCenter} exact path='/admin_center' />
		<Route component={Laptops} exact path='/laptops'/>
	</Switch>
);
