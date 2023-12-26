import React from 'react'
import Item from './Item'
import { Stack } from '@mui/material'

const ItemList = ({productos}) => {
  return (
    <Stack
  direction="row"
  justifyContent="space-evenly"
  alignItems="center"
  spacing={4}
  margin="normal"
>
      {
        productos.map((p)=>{
          return(
              <Item 
              key={p.id}
              titulo={p.titulo}
              descripcion={p.descripcion}
              precio={p.precio}
              id={p.id}
              img={p.imagen}
              />
          )
        })
      }
      </Stack>
  )
}

export default ItemList