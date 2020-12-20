import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

import '../Asteroids.jsx'

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, 'Machine Learning', 'IN2064',  'Informatics', 'WiSe 20/21'),
  createData(1, 'Foundations in Artificial Intelligence', 'IN2062', 'Informatics', 'WiSe 20/21'),
  createData(2, 'Programming Database Web Applications', 'IN2140', 'Informatics', 'WiSe 20/21'),
  createData(3, 'Data Mining and Knowledge Discovery', 'IN2030', 'Informatics', 'WiSe 20/21'),
  createData(4, 'Foundations in Data Engineering', 'IN2326', 'Informatics', 'WiSe 20/21'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Your Courses</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Course Name</TableCell>
            <TableCell>CourseID</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Semester</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link href="/Courses" color="primary">
          Search for more courses
        </Link>
      </div>
    </React.Fragment>
  );
}