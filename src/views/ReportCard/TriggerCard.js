import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Grid, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: '#006687',
    borderRadius: 5,
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
    height: 120,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      height: 100,
    },
    [theme.breakpoints.up('md')]: {
      height: 150,
    },
  },
  title: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
    color: '#f0dfd3'

  },
  value: {
    fontSize: '1.7rem',
    color: '#f0f2f8',
  },
}));

const TriggerCard = () => {
  const classes = useStyles();

  const fields = [
    { label: 'Fleet Utilization Rate', value: '75%' },
    { label: 'On-time Delivery Rate', value: '90%' },
    { label: 'Fuel Consumption Rate', value: '10 mpg' },
    { label: 'Veh Maintenance Cost', value: '$500/yr' },
    { label: 'Driver Behavior Score', value: '80/100' },
    { label: 'Vehicle Idle Time', value: '2 hr/day' },
    { label: 'Delivery Time Accuracy', value: '95%' },
    { label: 'Vehicle Downtime', value: '10 hr/month' },
    { label: 'Customer Satisfaction Rating', value: '4/5' },
    { label: 'Number of Accidents', value: '1/Q' },
    { label: 'Avg Delivery Time', value: '2.5 hr' },
    { label: 'Vehicle Utilization Rate', value: '90%' },
    { label: 'Distance Traveled', value: '1,000 mi/day' },
    { label: 'Vehicle Idle Fuel Consumption', value: '0.5 gal/hr' },
    { label: 'Delivery Performance Index', value: '85%' },
    { label: 'Route Optimization Effectiveness', value: '20% reduction' },
    { label: 'Carbon Footprint', value: '20 tons CO2/month' },
    { label: 'Driver Turnover Rate', value: '15%' },
    { label: 'Vehicle Utilization Efficiency', value: '95%' },
    { label: 'Revenue per Vehicle', value: '$10K/mo' }
  ];



  return (
    <div style={{ width: '100%', margin: '4rem 10px' }}>
      <Card>
        <CardContent>

          <h1> Key Performance Indicator</h1>

          <Grid container spacing={2}>
            {fields.map((field) => (
              <Grid item xs={12} sm={6} md={3} key={field.label}>
                <Paper className={classes.paper}>
                  <Typography variant="h3" className={classes.value}>
                    {field.value}
                  </Typography>
                  <Typography variant="h5" className={classes.title}>
                    {field.label}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default TriggerCard;
