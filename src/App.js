import React from 'react';
// Router Imports
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Restaurants from "./Pages/Restaurants";
import Activities from "./Pages/Activities";
import Hotels from "./Pages/Hotels";
import Flights from "./Pages/Flights";
import theme from './theme';
import Featured from "./Pages/Featured";

function App() {

  const styles = {
    myAppBar: {
      backgroundColor: 'white',
      color: 'black',
      textAlign: 'left',
    },

    heroBox: {
      backgroundImage: `url('https://cdn.wallpapersafari.com/13/97/OiPluc.jpg')`,
      height: '500px',
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position:"relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      fontSize: "5rem"
    },

    articleContainer: {
      paddingTop: theme.spacing(3)
    },

    articleTitle: {
      fontWeight: 800,
      paddingBottom: theme.spacing(3),
      textAlign: "left"
    },

    card: {
      maxWidth: '100%',
    },

    media: {
      height: 240,
    },
  }
  
  return (
    <div className="App">
{/* *************ROUTES************ */}
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/restaurants" element={<Restaurants />}></Route>
            <Route path="/activities" element={<Activities />}></Route>
            <Route path="/hotels" element={<Hotels />}></Route>
            <Route path="/flights" element={<Flights />}></Route>
            <Route path="/featured/:name" element={<Featured/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
