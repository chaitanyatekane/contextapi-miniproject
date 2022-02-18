import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import CartPage from "./components/CartPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
