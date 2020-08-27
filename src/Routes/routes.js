import React, { Suspense } from 'react';
import {  Route, Switch } from 'react-router-dom';

//Components
import ErrorBoundary from '../components/ErrorBoundary';
import Spinner from '../components/Spinner';


import Navbar from '../components/Nav/Navbar';
import Footer from '../components/Footer';

//Pages
import Home from '../Pages/Home';
import Gallery from '../Pages/Gallery';
import Menu from '../Pages/Menu';
import Contact from '../Pages/Contact';

const Routes = () => {
  return (
    <>
      <Navbar />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path='/' component={Home} />
              <Route exact path='/galleria' component={Gallery} />
              <Route exact path='/menu' component={Menu} />
              <Route exact path='/contatti' component={Contact} />
            </Suspense>
          </ErrorBoundary>
      </Switch>
      <Footer />
    </>
  );
};

export default Routes;
