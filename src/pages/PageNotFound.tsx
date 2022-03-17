import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import {useNavigate, NavigateFunction } from 'react-router-dom';

const PageNotFound = (): JSX.Element => {
    const navigate: NavigateFunction = useNavigate();
    const returnHandler = (): void => {
        navigate("/")
    }
    return (
        <Box>
            <h1>Page Not Found</h1>
            <Button variant='contained' onClick={returnHandler}>Back</Button>
        </Box>
    );
};

export default PageNotFound;