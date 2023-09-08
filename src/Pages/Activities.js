import * as React from 'react';
import Navbar from '../Components/Navbar';
import Box from '@mui/material/Box';

function Activities () {

    const styles = {

        heroBox: {
            backgroundImage: `url('https://images.squarespace-cdn.com/content/v1/617429993039ec793bfb3450/1682709078030-AW7ZI4LWI133A7QF1STM/GettyImages-1485762413.jpg')`,
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
<Box sx={styles.heroBox} style={{color: "white"}}>Activities  <span style={{color: "darkred", marginLeft: "35px", marginRight: "35px"}}> in</span>  Manhattan</Box>
            Activities
        </>
    )
}

export default Activities;

// ATTRACTIONS HERO IMAGE
// https://s1.citypass.net/_next/gcms/media/resize=fit:clip,width:1920/resize=fit:crop,height:512/quality=value:85/compress/sdDk8EobTX2a671kw4RI
// url('https://www.chicagotribune.com/resizer/i8P_AHh7H6rA7GTa_GOCFHxscoY=/arc-anglerfish-arc2-prod-tronc/public/E4U3NR4EHJF5NP7FI27B44TTR4.jpg