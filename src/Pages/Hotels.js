import * as React from 'react';
import Navbar from '../Components/Navbar';
import Box from '@mui/material/Box';

function Hotels () {

    const styles = {

        heroBox: {
            backgroundImage: `url('https://cf.bstatic.com/xdata/images/hotel/max1024x768/348980987.jpg?k=015958abac95804ca8a859ec828b3c147936b950964aa59a9e4dab84e560016e&o=&hp=1')`,
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
        <>
            <Navbar/>
{/* ****************************** MAIN TITLE ****************************** */}
<Box sx={styles.heroBox} style={{color: ""}}>Hotels  <span style={{color: "darkred", marginLeft: "35px", marginRight: "35px"}}> in</span>  Manhattan</Box>
            Hotels
        </>
    )
}

export default Hotels;

// HOTEL HERO IMAGE
// https://hips.hearstapps.com/harpersbazaar/assets/16/21/1464292253-standard-high-line-hudson-studio-01.jpg