import * as React from 'react';
import Typography from '@mui/material/Typography';
import Navbar from '../Components/Navbar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import hotelsData from '../data/hotelsData';

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
            marginBottom: 5      
          },

        pageDescription: {
            textAlign: 'center',
            marginTop: "30px",
            marginBottom: "50px",
        },

        boxOuter: {
            marginLeft: "100px",
            marginRight: "100px",
            marginBottom: "50px",
            backgroundColor: '#f5f1e7',
            borderColor: '#fdf1d3',
            borderStyle: 'solid',
            paddingBottom: "50px",
            paddingTop: "20px",
            paddingRight: '20px',
            paddingLeft: '20px',
            alignItems: "center",
        },

        boxOptions: {
            backgroundCOlor: 'white',
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
        }
        
        
          
        }

        
    return(
        <>
            <Navbar/>
{/* ****************************** MAIN TITLE ****************************** */}
        <Box sx={styles.heroBox} style={{color: "black"}}>Hotels  <span style={{color: "darkred", marginLeft: "35px", marginRight: "35px"}}> in</span>  Manhattan</Box>
        
        <Box sx={styles.boxOuter}>
                <Typography sx={styles.pageDescription} variant="h4"><strong>“SLEEPLESS NIGHTS & CITY <span style={{color: "darkred"}}> LIGHTS</span>.”</strong></Typography>
                <List sx={{width: '1500', maxWidth: '1700', bgcolor: 'background.paper'}}>
                {Object.keys(hotelsData).map((key, idx) => <>
                        <ListItem sx={styles.foodItem} key={idx}>
                            <Grid container sx={styles.foodItemContainer}>
                                <Grid item md={4}>
                                    <img alt={hotelsData[key].name} className="item-image" src={hotelsData[key].image} style={{ height: 200, width: 350 }}/>
                                </Grid>
                                <Grid item md={8}>
                                    <Typography sx={styles.foodTitle} variant="h6"><strong>{hotelsData[key].name}</strong></Typography>
                                    <Typography>{hotelsData[key].description}</Typography>
                                    <Grid container>
                                        <Grid item md={6}>
                                            <Typography sx={styles.foodType}>Price: {hotelsData[key].costCategory}</Typography>
                                        </Grid>
                                        <Grid item md={6}>
                                            <Button sx={styles.learnMore} variant="outlined" href={hotelsData[key].website}>Book on Hotel Website</Button>
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

export default Hotels;

// HOTEL HERO IMAGE
// https://hips.hearstapps.com/harpersbazaar/assets/16/21/1464292253-standard-high-line-hudson-studio-01.jpg