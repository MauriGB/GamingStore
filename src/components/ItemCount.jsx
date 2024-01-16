import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


const ItemCount = ({contador, sumar, resta, agregar}) => {

  
    
  return (
    <Stack direction="row" spacing={2} >
      <Button variant="contained"onClick={resta}>-</Button>
      <Button variant="contained" disabled>
        {contador}
      </Button>
      <Button variant="contained"onClick={sumar}>+</Button>
      <Button variant="contained"color="success" onClick={agregar}>
        Agregar al carrito
      </Button>
    </Stack>
  )
}

export default ItemCount


