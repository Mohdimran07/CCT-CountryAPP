import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

const NavigationBar = () => {
    return (
       <AppBar position='static' >
           <Toolbar>
               <Typography>Country Details</Typography>
           </Toolbar>
       </AppBar>
    );
};

export default NavigationBar;