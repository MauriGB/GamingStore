import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

const ItemCount = () => {
    const [contador, setContador] = useState(0)

    const resta = ()=>{
        if (contador > 0){
            setContador(contador - 1)
        }
    }

  return (
    <Stack direction="row" spacing={2} >
      <Button variant="contained"onClick={resta}>-</Button>
      <Button variant="contained" disabled>
        {contador}
      </Button>
      <Button variant="contained"onClick={()=> setContador(contador + 1)}>+</Button>
      <Button variant="contained"color="success">
        Agregar al carrito
      </Button>
    </Stack>
  )
}

export default ItemCount


