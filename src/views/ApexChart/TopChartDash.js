import React from 'react';
import { makeStyles, Grid, Card, CardHeader, CardContent, Hidden, Typography, Divider, LinearProgress } from '@material-ui/core';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import SalesLineCard from './SalesLineCard';
import SalesLineCardData from './chart/sale-chart-1';
import RevenuChartCard from './RevenuChartCard';
import RevenuChartCardData from './chart/revenu-chart';



const useStyles = makeStyles((theme) => ({
  arrowicon: {
    '& svg': {
      width: '20px',
      height: '20px',
      verticalAlign: 'top',
    },
  },

  flatcardbody: {
    padding: '0px !important',
    '& svg': {
      width: '40px',
      height: '40px',
    },
  },
  flatcardblock: {
    padding: '25px 25px',
    borderLeft: '1px solid' + theme.palette.background.default,
    [theme.breakpoints.down('sm')]: {
      borderLeft: 'none',
      borderBottom: '1px solid' + theme.palette.background.default,
    },
    [theme.breakpoints.down('md')]: {
      borderBottom: '1px solid' + theme.palette.background.default,
    },
  },
  textsuccess: {
    color: theme.palette.success.main,
  },
  texterror: {
    color: theme.palette.error.main,
  },
}));

const TopChartDash = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Grid container spacing={3}>
        <Grid item lg={8} xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Grid container spacing={3} direction="column">
                <Grid item xs={12}>
                  <SalesLineCard
                    chartData={SalesLineCardData}
                    title="Sales Per Day"
                    percentage="3%"
                    icon={<TrendingDownIcon />}
                    footerData={[
                      {
                        value: '$4230',
                        label: 'Total Revenue',
                      },
                      {
                        value: '321',
                        label: 'Today Sales',
                      },
                    ]}
                  />
                </Grid>
                <Hidden only="sm">
                  <Grid item xs={12}>
                    <Card>
                      <CardContent className={classes.flatcardbody}>
                        <Grid container alignItems="center" spacing={0}>
                          <Grid item sm={6} xs={12} className={classes.flatcardblock}>
                            <Grid container alignItems="center" spacing={1}>
                              <Grid item>
                                <Typography variant="subtitle2" align="left">
                                  REALTY
                                </Typography>
                              </Grid>
                              <Grid item sm zeroMinWidth>
                                <Typography variant="h5" className={classes.texterror} align="right">
                                  -0.99
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item sm={6} xs={12} className={classes.flatcardblock}>
                            <Grid container alignItems="center" spacing={1}>
                              <Grid item>
                                <Typography variant="subtitle2" align="left">
                                  INFRA
                                </Typography>
                              </Grid>
                              <Grid item sm zeroMinWidth>
                                <Typography variant="h5" className={classes.textsuccess} align="right">
                                  -7.66
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                </Hidden>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <RevenuChartCard chartData={RevenuChartCardData} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={4} xs={12}>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Fleet Overview
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item sm zeroMinWidth>
                      <Typography variant="body2">Total Vehicles</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" align="right">
                        100
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item sm zeroMinWidth>
                      <Typography variant="body2">Online Vehicles</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" align="right">
                        80
                      </Typography>
                    </Grid>
                  </Grid>
                  <LinearProgress variant="determinate" value={80} />
                </Grid>
                <Grid item xs={12}>
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item sm zeroMinWidth>
                      <Typography variant="body2">Offline Vehicles</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" align="right">
                        20
                      </Typography>
                    </Grid>
                  </Grid>
                  <LinearProgress variant="determinate" value={20} color="primary" />

                </Grid>
                <Grid item xs={12}>
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item sm zeroMinWidth>
                      <Typography variant="body2">Maintenance Due</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" align="right">
                        10
                      </Typography>
                    </Grid>
                  </Grid>
                  <LinearProgress variant="determinate" value={10} color="primary" />

                </Grid>
                <Grid item xs={12}>
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item sm zeroMinWidth>
                      <Typography variant="body2">Maintenance Overdue</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" align="right">
                        50
                      </Typography>
                    </Grid>
                  </Grid>
                  <LinearProgress variant="determinate" value={50} color="secondary" />

                </Grid>
                <Grid item xs={12}>
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item sm zeroMinWidth>
                      <Typography variant="body2">Active Vehicles`</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" align="right">
                        70
                      </Typography>
                    </Grid>
                  </Grid>
                  <LinearProgress variant="determinate" value={70} color="secondary" />

                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Grid>

  )
}

export default TopChartDash