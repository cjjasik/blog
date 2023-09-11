import * as React from 'react';
import Typography from '@mui/material/Typography';
import Navbar from '../Components/Navbar';
import Box from '@mui/material/Box';

// DIVIDERS
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

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
          pageDescription: {
            textAlign: 'center',
            marginTop: "30px",
            marginBottom: "50px",
        },

        boxOuter: {
            marginLeft: "100px",
            marginRight: "100px",
            marginBottom: "50px",
            backgroundColor: '#eaeef5',
            borderColor: '#dce3f1',
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
        }
        }

        
    return(
        <>
            <Navbar/>
{/* ****************************** MAIN TITLE ****************************** */}
            <Box sx={styles.heroBox} style={{color: "white"}}>Activities  <span style={{color: "darkred", marginLeft: "35px", marginRight: "35px"}}> in</span>  Manhattan</Box>

            <Box sx={styles.boxOuter}>
                <Typography sx={styles.pageDescription} variant="h4"><strong>“NEW YORK IS NOT A PLACE. IT'S A <span style={{color: "darkred"}}> FEELING</span>."</strong></Typography>
                <List
                    sx={{width: '1500', maxWidth: '1700', bgcolor: 'background.paper'}}>
                        <ListItem sx={styles.foodItem}>
                            <Grid container sx={styles.foodItemContainer}>

                                <Grid item md={4}>
                                    <img className="item-image" src="https://images.squarespace-cdn.com/content/v1/6231ff6bf0d49978468462a8/623bb58f-b406-49d2-95cd-d30f9a9d679e/Screenshot+2022-04-11+at+17.37.38.png" style={{ height: 140 }}/>
                                </Grid>
                                <Grid item md={8}>
                                    <Typography variant="h6"><strong>DEAD RABBIT</strong></Typography>
                                    <Typography>In a five-story, 19th-century townhouse, The Dead Rabbit offers three distinctly different dining and drinking experiences: The Taproom, The Parlor, and the Occasional Room. It’s a concept that works, and the bar remain the most awarded pub in the world. Stop by to try their iconic fish and chips, Irish coffee, and their Bailey's infused tirimisu.</Typography>
                                    <Typography sx={styles.foodType}>Irish Pub Fare</Typography>
                                </Grid>
                                
                            </Grid>

                        </ListItem>
                        <Divider variant="inset" component="li" />


                        <ListItem sx={styles.foodItem}>
                            <Grid container sx={styles.foodItemContainer}>

                                <Grid item md={4}>
                                    <img className="item-image" src="https://images.squarespace-cdn.com/content/v1/6231ff6bf0d49978468462a8/623bb58f-b406-49d2-95cd-d30f9a9d679e/Screenshot+2022-04-11+at+17.37.38.png" style={{ height: 140 }}/>
                                </Grid>
                                <Grid item md={8}>
                                    <Typography variant="h6"><strong>DEAD RABBIT</strong></Typography>
                                    <Typography>In a five-story, 19th-century townhouse, The Dead Rabbit offers three distinctly different dining and drinking experiences: The Taproom, The Parlor, and the Occasional Room. It’s a concept that works, and the bar remain the most awarded pub in the world. Stop by to try their iconic fish and chips, Irish coffee, and their Bailey's infused tirimisu.</Typography>
                                    <Typography sx={styles.foodType}>Irish Pub Fare</Typography>
                                </Grid>
                                
                            </Grid>

                        </ListItem>


                        <Divider variant="inset" component="li" />
                        <ListItem sx={styles.foodItem}>
                            <Grid container sx={styles.foodItemContainer}>

                                <Grid item md={4}>
                                    <img className="item-image" src="https://images.squarespace-cdn.com/content/v1/6231ff6bf0d49978468462a8/623bb58f-b406-49d2-95cd-d30f9a9d679e/Screenshot+2022-04-11+at+17.37.38.png" style={{ height: 140 }}/>
                                </Grid>
                                <Grid item md={8}>
                                    <Typography variant="h6"><strong>DEAD RABBIT</strong></Typography>
                                    <Typography>In a five-story, 19th-century townhouse, The Dead Rabbit offers three distinctly different dining and drinking experiences: The Taproom, The Parlor, and the Occasional Room. It’s a concept that works, and the bar remain the most awarded pub in the world. Stop by to try their iconic fish and chips, Irish coffee, and their Bailey's infused tirimisu.</Typography>
                                    <Typography sx={styles.foodType}>Irish Pub Fare</Typography>
                                </Grid>
                                
                            </Grid>

                        </ListItem>

                        <Divider variant="inset" component="li" />

                        <ListItem sx={styles.foodItem}>
                            <Grid container sx={styles.foodItemContainer}>

                                <Grid item md={4}>
                                    <img className="item-image" src="https://images.squarespace-cdn.com/content/v1/6231ff6bf0d49978468462a8/623bb58f-b406-49d2-95cd-d30f9a9d679e/Screenshot+2022-04-11+at+17.37.38.png" style={{ height: 140 }}/>
                                </Grid>
                                <Grid item md={8}>
                                    <Typography variant="h6"><strong>DEAD RABBIT</strong></Typography>
                                    <Typography>In a five-story, 19th-century townhouse, The Dead Rabbit offers three distinctly different dining and drinking experiences: The Taproom, The Parlor, and the Occasional Room. It’s a concept that works, and the bar remain the most awarded pub in the world. Stop by to try their iconic fish and chips, Irish coffee, and their Bailey's infused tirimisu.</Typography>
                                    <Typography sx={styles.foodType}>Irish Pub Fare</Typography>
                                </Grid>
                                
                            </Grid>

                        </ListItem>

                        <Divider variant="inset" component="li" />

                        <ListItem sx={styles.foodItem}>
                            <Grid container sx={styles.foodItemContainer}>

                                <Grid item md={4}>
                                    <img className="item-image" src="https://images.squarespace-cdn.com/content/v1/6231ff6bf0d49978468462a8/623bb58f-b406-49d2-95cd-d30f9a9d679e/Screenshot+2022-04-11+at+17.37.38.png" style={{ height: 140 }}/>
                                </Grid>
                                <Grid item md={8}>
                                    <Typography variant="h6"><strong>DEAD RABBIT</strong></Typography>
                                    <Typography>In a five-story, 19th-century townhouse, The Dead Rabbit offers three distinctly different dining and drinking experiences: The Taproom, The Parlor, and the Occasional Room. It’s a concept that works, and the bar remain the most awarded pub in the world. Stop by to try their iconic fish and chips, Irish coffee, and their Bailey's infused tirimisu.</Typography>
                                    <Typography sx={styles.foodType}>Irish Pub Fare</Typography>
                                </Grid>
                                
                            </Grid>

                        </ListItem>

                        <Divider variant="inset" component="li" />

                        <ListItem sx={styles.foodItem}>
                            <Grid container sx={styles.foodItemContainer}>

                                <Grid item md={4}>
                                    <img className="item-image" src="https://images.squarespace-cdn.com/content/v1/6231ff6bf0d49978468462a8/623bb58f-b406-49d2-95cd-d30f9a9d679e/Screenshot+2022-04-11+at+17.37.38.png" style={{ height: 140 }}/>
                                </Grid>
                                <Grid item md={8}>
                                    <Typography variant="h6"><strong>DEAD RABBIT</strong></Typography>
                                    <Typography>In a five-story, 19th-century townhouse, The Dead Rabbit offers three distinctly different dining and drinking experiences: The Taproom, The Parlor, and the Occasional Room. It’s a concept that works, and the bar remain the most awarded pub in the world. Stop by to try their iconic fish and chips, Irish coffee, and their Bailey's infused tirimisu.</Typography>
                                    <Typography sx={styles.foodType}>Irish Pub Fare</Typography>
                                </Grid>
                                
                            </Grid>

                        </ListItem>

                        <Divider variant="inset" component="li" />

                        <ListItem sx={styles.foodItem}>
                            <Grid container sx={styles.foodItemContainer}>

                                <Grid item md={4}>
                                    <img className="item-image" src="https://images.squarespace-cdn.com/content/v1/6231ff6bf0d49978468462a8/623bb58f-b406-49d2-95cd-d30f9a9d679e/Screenshot+2022-04-11+at+17.37.38.png" style={{ height: 140 }}/>
                                </Grid>
                                <Grid item md={8}>
                                    <Typography variant="h6"><strong>DEAD RABBIT</strong></Typography>
                                    <Typography>In a five-story, 19th-century townhouse, The Dead Rabbit offers three distinctly different dining and drinking experiences: The Taproom, The Parlor, and the Occasional Room. It’s a concept that works, and the bar remain the most awarded pub in the world. Stop by to try their iconic fish and chips, Irish coffee, and their Bailey's infused tirimisu.</Typography>
                                    <Typography sx={styles.foodType}>Irish Pub Fare</Typography>
                                </Grid>
                                
                            </Grid>

                        </ListItem>
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