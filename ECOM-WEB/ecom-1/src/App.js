import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

import Footer from "./components/footer";
import HomePage from "./pages/homepage";

import { btm } from "./data";
import { product } from "./data2";
import { sales } from "./data3";
import { story } from "./data4";
import { Routes, Route, Outlet } from "react-router-dom";

import Header from "./components/header";
import ProductView from "./pages/productview";
import { prodview1 } from "./pages/pdv1data";
import AddTocart from "./components/addTocart";

function Layout() {
  return (
    <div className="">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

function App() {
  const handleClick = (h) => {
    console.log("item clicked", h.Name);
    alert(
      `Thank You! \n You have Selected \n  ${h.Name} \n ${h.itemName} \n  ${h.itemNum} \n Rated ${h.ratings} Stars \n Manufactured ${h.copyright} ${h.manufacturer} \n Discounted to ${h.price} from ${h.discount}. \n ${h.itemLeft}. \n Kindly Proceed To Cart!! `
    );
  };

  const handleLink = () => {
    console.log("item clicked");
  };

  
  return (
    <div className="App">
      <Routes>
        <>
          <Route path="/" element={<Layout />}>
            <Route
              path="/"
              element={
                <HomePage
                  btm={btm}
                  product={product}
                  sales={sales}
                  story={story}
                  handleClick={handleClick}
                  handleLink={handleLink}
                />
              }
            />

            <Route
              path="product/:id"
              element={<ProductView prodview1={prodview1} />}
              
            />
            <Route
              path="cart/:id"
              element={<AddTocart />}
              
            />
          </Route>
        </>
      </Routes>
    </div>
  );
}
export default App;
