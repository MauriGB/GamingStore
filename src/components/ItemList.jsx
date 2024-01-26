import React from 'react'
import Item from './Item'
import { Container, Stack } from '@mui/material'

const ItemList = ({productos}) => {
  return (
    <Stack 
  direction="row"
  justifyContent="space-evenly"
  alignItems="center"
  spacing={4}
  margin="normal"
  marginTop={10}
  flexWrap="wrap"
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