import React, { useContext, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Stack } from '@mui/material';
import ItemCount from './itemCount';
import { CartContext } from '../contex/CartContext';




const ItemDetail = ({producto}) => {

   const {carrito, agregar} = useContext(CartContext)
   
   const [contador, setContador] = useState(1)

    const resta = ()=>{
        contador > 1 && setContador(contador - 1)
    }
    const sumar = ()=>{
       contador < producto.stock && setContador(contador + 1)
    }

    
    

  return (
    <Stack alignItems="center"
     justifyContent="center"
     marginTop={10} >

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={producto.imagen}
            alt={producto.titulo}
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {producto.titulo}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {producto.descripcion}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            ${producto.precio}
          </Button>
        </CardActions>
        <ItemCount contador={contador} resta={resta} sumar={sumar} agregar={()=>{agregar(producto,contador)}}/>
      </Card>
    </Stack>
  )
}

export default ItemDetail