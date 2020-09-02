import React, { Suspense, lazy, useContext, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Cookies from "js-cookie";
//Components
import ErrorBoundary from "../components/ErrorBoundary";
import Spinner from "../components/Spinner";

import Navbar from "../components/Nav/Navbar";
import Footer from "../components/Footer";

//context
import { AuthContext } from "../context/authContext";

//firebase
import { auth, createUserProfileDocument } from '../firebase/config'

//Pages
import CookiePolicy from '../Pages/CookiePolicy';
import PageNotFound from '../Pages/PageNotFound';
const Home = lazy(() => import("../Pages/Home"));
const Gallery = lazy(() => import("../Pages/Gallery"));
const Menu = lazy(() => import("../Pages/Menu"));
const Contact = lazy(() => import("../Pages/Contact"));
const Login = lazy(() => import("../Pages/Login"))

const Routes = () => {
  const authContext = useContext(AuthContext);

  const { setIsAuthenticated, setUserData } = authContext
  
   const authCookie = (e) => {
     const authToken = Cookies.get("auth-token");
     if (authToken) {
       setIsAuthenticated(true);
     }
   };
  
  useEffect(() => {
    authCookie();
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const useRef = await createUserProfileDocument(userAuth);

        useRef.onSnapshot((snapShot) => {
          setUserData({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setUserData(userAuth);
    });

    return () => {
      unsubscribeFromAuth();
    };
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Navbar />
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/galleria" component={Gallery} />
              <Route path="/menu" component={Menu} />
              <Route path="/contatti" component={Contact} />
              <Route path="/login" component={Login} />
              <Route path="/cookie-policy" component={CookiePolicy} />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </Suspense>
        </ErrorBoundary>
      <Footer />
    </>
  );
};

export default Routes;
