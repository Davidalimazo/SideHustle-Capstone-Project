import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Product from "./component/Product";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";


function App() {
  return (
<<<<<<< HEAD
  <Router>
    <div className="App">
   
    <Switch>
    <Route exact path='/'>
    <Home />
    </Route>
    <Route exact path='/menu'>
    <Product />
    </Route>
    <Route exact path='/contact'>
    <Contact />
    </Route>
    <Route exact path='/about'>
    <About />
    </Route>
    </Switch>
    <Footer />
    </div>
=======
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/product">
            <Product />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </div>
>>>>>>> 9c64e83640e6f7520a2f28596b6732eb148aa83f
    </Router>
  );
}

export default App;
