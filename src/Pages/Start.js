import React, { useContext } from 'react';
import Button from '@mui/material/Button';

const Start = () => {
    return (
        <div>
            {/* ********** BANNER ********** */}
        <img 
            src="https://wallpaperaccess.com/full/1212069.jpg"
            alt='nyc'
            className='nyc'/>
            <div className="hero-text">
                <h1 className='welcome'>Welcome to ManhattanFoodie</h1>
            </div>
            <Button 
                variant="contained" 
                size='large'
                href='/home'
                sx={{ 
                    fontWeight:'bold', 
                    textAlign:'center', 
                    backgroundColor:'white', 
                    color:'black', 
                    position: 'absolute', 
                    top: '80%', left: '50%', 
                    transform: 'translate(-50%, -50%)', 
                    border: '3px solid white', 
                    "&:hover":{
                        color:'white', 
                        borderColor:'white', 
                        backgroundColor:'rgba(255, 255, 255, 0.219)'}
                }}>
                Get Started
            </Button>
        </div>
        
    )
  };
  
  export default Start;