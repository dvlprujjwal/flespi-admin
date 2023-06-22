import React, { memo } from 'react'
import { Card, CardContent, Grid } from '@mui/material'
import './Reports.scss'
import reportsCard from './ReportsJsonData/ReportFour.json'

const ReportFour = () => {
  return (
    <div>
      <Grid container spacing={2}>
        {reportsCard.map((report) => (
          <Grid item sm={4} key={report.title}>
            <Card>
              <CardContent className='repcardcon'>
                <h4 className='rep4h4'>{report.title}</h4>
                <h3 className='rep4h3'>{report.tons}</h3>
                <p>
                  Last Challan : {report.lastChallan} <br />
                  Yesterday Dispatch: {report.yesterdayDispatch}
                </p>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default memo(ReportFour)
