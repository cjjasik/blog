import * as React from 'react';
import Typography from '@mui/material/Typography';
import Navbar from '../Components/Navbar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import activitiesData from '../data/activitiesData';

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
            marginBottom: 5      
          },

          heroBoxText: {
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            padding: "15px 30px",
        },
          
          pageDescription: {
            textAlign: 'center',
            marginTop: "30px",
            marginBottom: "50px",
            color: "white",
        },

        boxOuter: {
            marginLeft: "100px",
            marginRight: "100px",
            marginBottom: "50px",
            backgroundColor: '#7fa7e7',
            borderColor: '#6a8fca',
            borderStyle: 'solid',
            paddingBottom: "50px",
            paddingTop: "20px",
            paddingRight: '20px',
            paddingLeft: '20px',
            alignItems: "center",
        },

        media: {
            height: 240,
          },

        foodType: {
            color: "grey",
            marginTop: "15px"
        },

        foodItem: {
            marginBottom: "30px",
            marginTop: "30px"
        },

        foodItemContainer: {
            marginLeft: "75px",
            marginRight: "75px"
        },

        learnMore: {
            marginTop: "10px",
            left: "70%",
            color: "black",
            borderColor: "black",
            '&:hover': {
                borderColor: "black",
                backgroundColor: "lightgray"
            }
        },

        foodTitle: {
            marginBottom: "5px"
        },

        }

        
    return(
        <>
            <Navbar/>
{/* ****************************** MAIN TITLE ****************************** */}
            <Box sx={styles.heroBox} style={{color: "white"}}>
                <Box sx={styles.heroBoxText}>Activities  <span style={{color: "darkred", marginLeft: "35px", marginRight: "35px"}}> in</span>  Manhattan</Box>
            </Box>

            <Box sx={styles.boxOuter}>
                <Typography sx={styles.pageDescription} variant="h4"><strong>“NEW YORK IS NOT A PLACE. IT'S A <span style={{color: "darkred"}}> FEELING</span>."</strong></Typography>
                <List sx={{width: '1500', maxWidth: '1700', bgcolor: 'background.paper'}}>
                {Object.keys(activitiesData).map((key, idx) => <>
                        <ListItem sx={styles.foodItem} key={idx}>
                            <Grid container sx={styles.foodItemContainer}>
                                <Grid item md={4}>
                                    <img alt={activitiesData[key].name} className="item-image" src={activitiesData[key].image} style={{ height: 200, width: 350 }}/>
                                </Grid>
                                <Grid item md={8}>
                                    <Typography sx={styles.foodTitle} variant="h6"><strong>{activitiesData[key].name}</strong></Typography>
                                    <Typography>{activitiesData[key].description}</Typography>
                                    <Grid container>
                                        <Grid item md={6}>
                                            <Typography sx={styles.foodType}>Type: {activitiesData[key].type}</Typography>
                                        </Grid>
                                        <Grid item md={6}>
                                            <Button sx={styles.learnMore} variant="outlined" href={"/activities/" + key}>Learn More</Button>
                                        </Grid>
                                    </Grid>
                                </Grid>  
                            </Grid>
                        </ListItem>
                        <Divider component="li" />
                    </>)}
                </List>
            </Box>
        </>
    )
}

export default Activities;

// ATTRACTIONS HERO IMAGE
// https://s1.citypass.net/_next/gcms/media/resize=fit:clip,width:1920/resize=fit:crop,height:512/quality=value:85/compress/sdDk8EobTX2a671kw4RI
// url('https://www.chicagotribune.com/resizer/i8P_AHh7H6rA7GTa_GOCFHxscoY=/arc-anglerfish-arc2-prod-tronc/public/E4U3NR4EHJF5NP7FI27B44TTR4.jpg


// New York is not a place. It’s a feeling