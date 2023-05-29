import Load from "./components/LoadingScreen/Load";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Card from "./components/Card/Card";
import WatchPage from "./components/WatchPage/WatchPage";
import AirpodsPage from "./components/AirpodsPage/AirpodsPage";
import IPadPage from "./components/IPadPage/IPadPage";
import IphonePage from "./components/IphonePage/IphonePage";
import MacBookPage from "./components/MacBookPage/MacBookPage";
import CartPage from "./components/CartPage/CartPage";
import SearchPage from "./components/Search/SearchPage";
import Footer from "./components/Footer/Footer";

import { CartProvider }  from "../src/components/CartContext/CartContext";
import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";

function App() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 3000);
  }, []);

  return (
    <CartProvider>
    <div>
      {load ? (
        <Load />
      ) : (
        <div>
          <Navigation />
          <div>
            <Routes>
              <Route path="/" element={<Card />} /> {/* Modified route path */}
              <Route path="/WatchPage" element={<WatchPage />} />
              <Route path="/IPhonePage" element={<IphonePage />} />
              <Route path="/MacBookPage" element={<MacBookPage />} />
              <Route path="/AirpodsPage" element={<AirpodsPage />} />
              <Route path="/IPadPage" element={<IPadPage />} />
              <Route path="/CartPage" element={<CartPage />} />
              <Route path="/search" element={<SearchPage />} />
            </Routes>
          </div>
          <Footer/>
        </div>
      )}
    </div>
    </CartProvider>
  );
}

export default App;
