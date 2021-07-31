import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import Payment from './Payment';
import { Elements } from "@stripe/react-stripe-js" ;
import { loadStripe } from '@stripe/stripe-js';
import Orders from './Orders';

const promise = loadStripe(
  "pk_test_51JJBWfSICKLPd5FP5P1z3ZozwG3XCzSg3U4Py15haFWixieWVDfeYv1gYbifhEATTKfHZcNgTEbyx7VTUN5a1kLO00krWmh6vT"
)
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path="/orders">
            
            <Orders />
          </Route>
          <Route path="/checkout">
            <Header/> 
            <Checkout/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/payment">
            <Header/> 
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
