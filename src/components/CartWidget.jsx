import { ShoppingCartOutlined } from '@mui/icons-material'
import { Button, colors } from '@mui/material'
import React from 'react'


const CartWidget = () => {
  return (
    <>
        <Button variant="contained" color="error">{<ShoppingCartOutlined/>}</Button>
    </>
  )
}

export default CartWidget