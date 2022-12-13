import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {Link} from "react-router-dom";

const Navigator = () => {
    return (
        <div>
            <AppBar position="fixed">
                <Toolbar>
                    <Link to={'/'}>
                        <Button color="inherit">App</Button>
                    </Link>
                    <Link to={'/home'}>
                        <Button color="inherit">Home</Button>
                    </Link>
                    <Link to={'/about'}>
                        <Button color="inherit">About</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
    };
    
    
    export default Navigator;
    