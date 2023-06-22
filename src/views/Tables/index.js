import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CardContent, Card } from '@mui/material';
import data from './basictable.json'
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});



export default function DataTable() {
    const classes = useStyles();

    return (
        <Card>
            <CardContent>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Vehicle</TableCell>
                                <TableCell>Driver</TableCell>
                                <TableCell>Delivery Date</TableCell>
                                <TableCell>Delivery Time</TableCell>
                                <TableCell>Delivery Status</TableCell>
                                <TableCell>Delivery Location</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell>{row.vehicle}</TableCell>
                                    <TableCell>{row.driver}</TableCell>
                                    <TableCell>{row.deliveryDate}</TableCell>
                                    <TableCell>{row.deliveryTime}</TableCell>
                                    <TableCell>{row.deliveryStatus}</TableCell>
                                    <TableCell>{row.deliveryLocation}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    );
}
