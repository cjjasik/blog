import * as React from 'react';
import Typography from '@mui/material/Typography';
import Navbar from '../Components/Navbar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

import featureData from '../data/featureData';
import {useParams} from "react-router-dom";




function Featured () {

    const {name} = useParams();
    const data = featureData[name];


    const styles = {
        featureContainer: {
            marginTop: "10px",
        },

        type: {
            color: "grey",
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
        }

    }

    return(
        <>
            <Navbar/>
{/* ********** TOP IMAGE + DESCRIPTION ********** */}
            <Grid container sx={styles.featureContainer}>
                {/* ********** IMAGE(LEFT)********** */}
                <Grid item md={6}>
                    <img src={data.image} style={styles.featureImage} height="450px" width="90%"/>
                </Grid>
                {/* ********** DESCRIPTION (RIGHT) ********** */}
                <Grid item md={6} sx={styles.featureDescription}>
                    <Typography variant="h2"><strong>{data.name}</strong></Typography>
                    <Typography variant="h6" sx={styles.gap}>{data.description}</Typography>
                    <Typography sx={styles.type}>{data.type}</Typography>
                </Grid>                 
            </Grid>


            


    </>
    )
}

export default Featured;