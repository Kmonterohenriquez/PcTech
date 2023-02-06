import React from 'react';
import './App.sass';
import routes from './routes';
import Footer from './Components/Footer/Footer';
import BottomLine from './Components/BottomLine/BottomLine';
import Nav from './Components/Nav/Nav';
import { withRouter } from 'react-router';

function App({ location }) {
  const shouldShowNav = ['/', '/admin_center/','/cart/'].includes(location.pathname);
  return (
    <div className='App'>
      { !shouldShowNav && <Nav />}
      {/* Page Body Information (Components) */}
      {routes}
      <Footer />
      <BottomLine />
    </div>
  );
}

export default withRouter(App);
