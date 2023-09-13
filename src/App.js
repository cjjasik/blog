import React from 'react';
// Router Imports
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Restaurants from "./Pages/Restaurants";
import Activities from "./Pages/Activities";
import Hotels from "./Pages/Hotels";
import Flights from "./Pages/Flights";
import Featured from "./Pages/Featured";
import RestaurantDisplay from './Pages/RestaurantDisplay';
import ActivityDisplay from './Pages/ActivityDisplay';

function App() {
  
  return (
    <div className="App">
{/* *************ROUTES************ */}
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/restaurants" element={<Restaurants />}></Route>
            <Route path="/restaurants/:name" element={<RestaurantDisplay/>}></Route>
            <Route path="/activities" element={<Activities />}></Route>
            <Route path="/activities/:name" element={<ActivityDisplay/>}></Route>
            <Route path="/hotels" element={<Hotels />}></Route>
            <Route path="/flights" element={<Flights />}></Route>
            <Route path="/featured/:name" element={<Featured/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
