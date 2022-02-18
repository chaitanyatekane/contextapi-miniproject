import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import CartPage from "./components/CartPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        {/* <Switch> */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
        {/* </Switch> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
