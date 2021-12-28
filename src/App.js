import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import IntroSegment from "./components/IntroSegment";
import SingleProduct from "./components/SingleProduct";

const App = () => {
  return (
      <div className="container mx-auto p-5">
        <BrowserRouter>
          <Navbar/>
          <Switch>
              <IntroSegment/>
          </Switch>
        </BrowserRouter>
      </div>
      

  );
}

export default App

