import React, { Suspense } from 'react';
import {  Route, Switch } from 'react-router-dom';

//Components
import ErrorBoundary from '../components/ErrorBoundary';
import Spinner from '../components/Spinner';


import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

//Pages
import Home from '../Pages/Home';
import About from '../Pages/About';
import Menu from '../Pages/Menu';
import Contact from '../Pages/Contact';

const Routes = () => {
  return (
    <>
      <NavBar />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/menu' component={Menu} />
              <Route exact path='/contact' component={Contact} />
            </Suspense>
          </ErrorBoundary>
      </Switch>
      <Footer />
    </>
  );
};

export default Routes;
