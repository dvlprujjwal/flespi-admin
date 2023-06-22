import React from 'react';
import { Grid, } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import ReportCard from './index';




const DashboardCard = () => {
  const theme = useTheme();

  return (
    <div>
      <Grid container spacing={3}>

        <Grid item lg={3} sm={6} xs={12}>

          <ReportCard
            primary="302"
            secondary="Total "
            color={theme.palette.warning.main}
            footerData="Last updated 30 sec ago"

          />
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <ReportCard
            primary={145}
            secondary="Active"
            color={theme.palette.error.main}
            footerData="Last updated 2 min ago"
          />
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <ReportCard
            primary="290+"
            secondary="Offline"
            color={theme.palette.success.main}
            footerData="Last updated 10 sec ago"
          />
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <ReportCard
            primary={500}
            secondary="Moving"
            color={theme.palette.primary.main}
            footerData="Live data"
          />
        </Grid>

      </Grid>
    </div>
  )
}

export default DashboardCard