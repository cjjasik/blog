import * as React from 'react';
import Typography from '@mui/material/Typography';
import Navbar from '../Components/Navbar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

import featureData from '../data/featureData';
import {useParams} from "react-router-dom";




function Featured () {

    const {name} = useParams();
    const data = featureData[name];


    const styles = {
        
        backButton: {
            paddingTop: "500px",
        },

        briefOuterBox: {
            backgroundColor: "#e9be66",
            marginLeft: "100px",
            marginRight: "100px",
            marginTop: "30px",
            marginBottom: "30px",
            borderStyle: 'solid',
            paddingBottom: "20px",
            paddingTop: "20px",
            paddingRight: '20px',
            paddingLeft: '20px',
            alignItems: "center",
        },
        
        overviewOuterBox: {
            backgroundColor: "#e9be66",
            marginLeft: "100px",
            marginRight: "100px",
            marginBottom: "50px",
            borderStyle: 'solid',
            paddingBottom: "50px",
            paddingTop: "20px",
            paddingRight: '20px',
            paddingLeft: '20px',
            alignItems: "center",
        },
        
        featureContainer: {
            marginTop: "30px",
            marginBottom: "30px"
        },

        type: {
            color: "black",
            marginTop: "15px"
        },
        
        featureImage:{
            marginLeft: "30px",
            alignItems: "center"
        },

        featureDescription: {
            paddingRight: "30px",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: "center"
        },

        gap: {
            marginTop: "20px"
        },

        pageDescription: {
            textAlign: 'center',
            marginTop: "10px",
            marginBottom: "10px",
        },

        pointContainer: {
            marginLeft: "75px",
            marginRight: "75px"
        },

        articleTitle: {
            marginTop: "10px",
            marginBottom: "30px",
            textAlign: 'center',
        },

        // ********************************************* THIS IS NOT WORKING *********************************************
        locationSection: {
            alignItems: "center",
        }


    }

    return(
        <>
            <Navbar/>

{/* ********** TOP IMAGE + DESCRIPTION ********** */}
            <Box sx={styles.briefOuterBox}>
            <Grid container sx={styles.featureContainer}>
                {/* ********** IMAGE (LEFT)********** */}
                <Grid item md={6}>
                    <img src={data.image} style={styles.featureImage} height="450px" width="90%"/>
                </Grid>
                {/* ********** DESCRIPTION (RIGHT) ********** */}
                <Grid item md={6} sx={styles.featureDescription}>
                    <Typography variant="h2"><strong>{data.name}</strong></Typography>
                    <Typography variant="h6" sx={styles.gap}>{data.description}</Typography>
                    <Link variant="h6" href={data.website} sx={styles.type}>{data.website}</Link>

                </Grid>                 
            </Grid>
            </Box>
            
{/* ---------------------------------------------------------------------------------------------------------------- */}


            <Box sx={styles.overviewOuterBox}>
                <Typography sx={styles.articleTitle} variant="h4"><strong>{data.name} - Worth the hype?</strong></Typography>
                <List
                    sx={{width: '1500', maxWidth: '1700', bgcolor: 'background.paper'}}>
                        {/* ************************ LOCATION ************************ */}
                        <ListItem sx={styles.foodItem}>
                            <Grid container sx={styles.pointContainer}>

                                <Grid item md={4}>
                                    <img className="item-image" src={data.mapImage} style={{ height: 200, width: 350 }}/>
                                </Grid>
                                <Grid item md={8} sx={styles.locationSection}>
                                    <Typography variant="h6"><strong>LOCATION 📍 </strong></Typography>
                                    <Typography>{data.district}</Typography>
                                    <Typography>{data.location}   <strong>|     </strong>   {data.district}</Typography>
                                </Grid>
                                
                            </Grid>
                            </ListItem>

                        <Divider component="li" />

                        {/* ************************ DON'T MISS OUT ON... ************************ */}
                        <ListItem sx={styles.foodItem}>
                            <Grid container sx={styles.pointContainer}>

                                <Grid item md={4}>
                                    <img className="item-image" src={data.point2Image} style={{ height: 200, width: 350 }}/>
                                </Grid>
                                <Grid item md={8}>
                                    <Typography variant="h6"><strong>DON'T MISS OUT ON... </strong></Typography>
                                    <Typography><strong>No. 1:</strong> {data.no1}</Typography>
                                    <Typography><strong>No. 2:</strong> {data.no2}</Typography>
                                    <Typography><strong>No. 3:</strong> {data.no3}</Typography>
                                </Grid>
                                
                            </Grid>
                            </ListItem>


                        <Divider component="li" />

                        {/* ************************ WHAT MAKES IT SPECIAL? ************************ */}
                        <ListItem sx={styles.foodItem}>
                            <Grid container sx={styles.pointContainer}>

                                <Grid item md={4}>
                                    <img className="item-image" src={data.point3Image} style={{ height: 200, width: 350 }}/>
                                </Grid>
                                <Grid item md={8}>
                                    <Typography variant="h6"><strong>WHAT MAKES IT SPECIAL? </strong></Typography>
                                    <Typography><strong>What exactly makes it special:</strong> {data.special}</Typography>
                                    <Typography><strong>Final Thoughts:</strong> {data.other}</Typography>
                                </Grid>
                                
                            </Grid>

                        </ListItem>

                        <Divider  component="li" />

                        {/* ************************ IS IT ACTUALLY WORTH THE HYPE? ************************ */}
                        <ListItem sx={styles.foodItem}>
                            <Grid container sx={styles.pointContainer}>

                                <Grid item md={4}>
                                    <img className="item-image" src={data.point4Image} style={{ height: 200, width: 350 }}/>
                                </Grid>
                                <Grid item md={8}>
                                    <Typography variant="h6"><strong>IS IT ACTUALLY WORTH THE HYPE? </strong></Typography>
                                    <Typography>{data.rating}</Typography>
                                </Grid>
                                
                            </Grid>

                        </ListItem>


                    </List>

            </Box>



            


    </>
    )
}

export default Featured;