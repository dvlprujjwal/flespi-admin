import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { Card } from '@mui/material';


export default function DataGridTable() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 40,
  });

  return (

    <Card style={{ height: 700, width: '100%' }}>
    
        <DataGrid
          {...data}
          components={{
            Toolbar: GridToolbar,
          }}
        />
    
    </Card>



  );
}