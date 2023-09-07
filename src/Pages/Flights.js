import * as React from 'react';
import Navbar from '../Components/Navbar';
import Box from '@mui/material/Box';

function Flights () {

    const styles = {

        heroBox: {
            backgroundImage: `url('https://images.hdqwalls.com/wallpapers/plane-over-building-ic.jpg')`,
            height: '500px',
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position:"relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontSize: "5rem",
            marginBottom: 3      
          },
        }

        

    return(
        
        <div className="flights">
            <Navbar/>
{/* ****************************** MAIN TITLE ****************************** */}
<Box sx={styles.heroBox} style={{color: "black"}}>Flights  <span style={{color: "darkred", marginLeft: "35px", marginRight: "35px"}}> in</span>  Manhattan</Box>
            Flights
        </div>
    )
}

export default Flights;


// HERO IMAGE FLIGHT
// https://loving-newyork.com/wp-content/uploads/2017/11/5-Tips-Tricks-NYC-Trip-171108105604001.jpg