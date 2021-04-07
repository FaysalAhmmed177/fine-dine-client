import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotMatch from './Components/NotMatch/NotMatch';
import { createContext } from 'react';
import { useState } from 'react';
import DeliveryDetails from './Components/OrderPlaced/OrderPlaced';
import Destination from './Components/OrderComplete/OrderComplete';
import Breakfast from './Components/Breakfast/Breakfast';
import Lunch from './Components/Lunch/Lunch';
import Dinner from './Components/Dinner/Dinner';
import Cart from './Components/Cart/Cart';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orderPlace">
            <DeliveryDetails />
          </Route>
          <Route path="/orderComplete">
            <Destination />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/breakfast">
            <Breakfast />
          </Route>
          <Route path="/lunch">
            <Lunch />
          </Route>
          <Route path="/dinner">
            <Dinner />
          </Route>
          <Router path="*">
            <NotMatch />
          </Router>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
