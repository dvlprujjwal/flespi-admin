import React from 'react';
import "leaflet/dist/leaflet.css";


import { useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './../themes';
import Routes from '../Routes';

import { StylesProvider, } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';



// Configure JSS
const App = () => {
    const customization = useSelector((state) => state.customization);
    return (
        <React.Fragment>
            <CssBaseline />
            <StylesProvider >
                <ThemeProvider theme={theme(customization)}>
                    <Paper>
                        <Routes />
                    </Paper>
                </ThemeProvider>
            </StylesProvider>

        </React.Fragment>
    );
};

export default App;
