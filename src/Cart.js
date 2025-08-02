import { Grid } from '@mui/material'
import React from 'react'
import Checkoutitem from './Checkoutitem'

const Cart =() => {
  return (
    <div>
        <Grid container>
          <Grid item={10}>
            <div>
                <div>Shopping Cart</div>
            </div>
            <Checkoutitem/>   
            <Checkoutitem/>            
            <Checkoutitem/>            
            <Checkoutitem/>            


          </Grid>
          <Grid item={2}>
            </Grid>
        </Grid>
    </div>
  )
}

export default Cart
