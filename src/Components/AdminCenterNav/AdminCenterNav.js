import React from 'react';
import './AdminCenterNav.sass';
import { Link } from 'react-router-dom';
const AdminCenterNav = () => {
	return (
		<div className='AdminCenterNav sm-container'>
			<Link to='/' className='nav'>
				<i className='fas fa-chevron-left'></i>
				<p>Client Side</p>
			</Link>
            
		</div>
	);
};

export default AdminCenterNav;
