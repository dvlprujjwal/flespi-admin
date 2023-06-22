import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {  Card, CardContent, Grid, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    secondary: {
        marginTop: '.5rem',

    },

    primary: {
        fontSize: '3rem',
    },
    footer: {
        textAlign: 'center',
        padding: theme.spacing(1.2),
        paddingLeft: '20px',
        paddingRight: '20px',
        color: theme.palette.common.white,
    },
}));

const ReportCard = (props) => {
    const { primary, secondary, iconPrimary, color, footerData, iconFooter } = props;
    const classes = useStyles();

    const IconPrimary = iconPrimary;
    const primaryIcon = iconPrimary ? <IconPrimary fontSize="large" /> : null;

    const IconFooter = iconFooter;
    const footerIcon = iconFooter ? <IconFooter /> : null;

    return (
        <Card>
            <CardContent>
                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item>
                        <Typography variant="h3" className={classes.primary} style={{ color: color }}>
                            {primary}
                        </Typography>
                        <Typography variant="subtitle1" className={classes.secondary}>
                            {secondary}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h2" style={{ color: color }}>
                            {primaryIcon}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <div style={{ background: color }}>
                <Grid container justifyContent="space-between" className={classes.footer}>
                    <Grid item>
                        <Typography variant="body2">{footerData}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2">{footerIcon}</Typography>
                    </Grid>
                </Grid>
            </div>
        </Card>
    );
};

export default ReportCard;
