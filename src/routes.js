import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Page/Home/Home';
import AdminCenter from './Page/AdminCenter/AdminCenter';

export default (
	<Switch>
		<Route component={Home} exact path='/' />
		<Route component={AdminCenter} exact path='/admin_center' />
	</Switch>
);
