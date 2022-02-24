import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, InputLabel, MenuItem, Select } from '@mui/material';

const ManageAllOrder = () => {
    const[order,setOrder] = React.useState([]);
    const [status, setStatus] = React.useState('');
    
const approve = id =>{

  fetch(`https://morning-citadel-41858.herokuapp.com/order/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data?.modifiedCount) {
                    alert("Approved Successfully");
                }
            })
  
}
const handledelete = id =>{
  fetch(`https://morning-citadel-41858.herokuapp.com/order/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data?.deletedCount) {
                    alert("Approved Successfully");
                }
            })

}
  
    React.useEffect(() => {

        fetch(`https://morning-citadel-41858.herokuapp.com/allorder`)
            .then(res => res.json())
            .then(data => {
                setOrder(data)
                
            })
    }, [order])
    return (
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell align="left">email</TableCell>
            <TableCell align="left">Phone</TableCell>
            <TableCell align="left">Service Name</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="center">Action</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
        {order.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.userName}
              </TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.phone}</TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.price}</TableCell>
              <TableCell align="left">{row.status}</TableCell>
           
              <TableCell align="left"><Button onClick={()=>approve(row._id)}>Approve</Button>
               <Button onClick={()=>handledelete(row._id)}>Delete</Button></TableCell>
            </TableRow>
          ))} 
        </TableBody>
      </Table>
    </TableContainer>
    );
};

export default ManageAllOrder;