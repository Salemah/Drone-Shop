import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, InputLabel, MenuItem, Select } from '@mui/material';
import OrderUpdateModal from './OrderUpdateModal';

const ManageProducts = () => {
  const [products, setProducts] = React.useState([]);
  const [productopen, setProductopen] = React.useState(false);
  const handleproductopen = () => setProductopen(true);
  const handleproductClose = () => setProductopen(false);


  const handledelete = id => {
    const confirm = window.confirm("Are you sure to delete this products");
    if (confirm) {
      fetch(`https://morning-citadel-41858.herokuapp.com/product/${id}`, {
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

  }

  React.useEffect(() => {

    fetch(`https://morning-citadel-41858.herokuapp.com/alldrone`)
      .then(res => res.json())
      .then(data => {
        setProducts(data)

      })
  }, [products]);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="center">Action</TableCell>


            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((row) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
               
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.price}</TableCell>
               

                <TableCell align="left"><Button onClick={handleproductopen}>Update</Button>
                  <Button onClick={() => handledelete(row._id)}>Delete</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <OrderUpdateModal

        products={products}
        productopen={productopen}
        handleproductClose={handleproductClose}
      ></OrderUpdateModal>
    </>
  );
};

export default ManageProducts;