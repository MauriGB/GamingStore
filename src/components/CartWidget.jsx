import { ShoppingCartOutlined } from '@mui/icons-material'
import { Button, colors } from '@mui/material'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../contex/cartContext'


const CartWidget = () => {

  const {cantidadEnCarrito}= useContext(CartContext)
  return (
    <>
      <Link to={'/carrito'}><Button variant="contained" color="error">{<ShoppingCartOutlined/>}
      <span>{cantidadEnCarrito()}</span>
      </Button>
      
      </Link>
        
    </>
  )
}

export default CartWidget