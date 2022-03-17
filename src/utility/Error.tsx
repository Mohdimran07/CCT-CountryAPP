import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

const Error = ():JSX.Element => {
    const navigate : NavigateFunction = useNavigate();
    const backButtonHandler = ():void => {
        navigate("/")
    }
    return (
       <Box>
           <h1>Something went wrong...</h1>
           <Button variant='contained' onClick={backButtonHandler}>Back</Button>
       </Box>
    );
};

export default Error;