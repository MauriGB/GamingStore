import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Stack } from '@mui/material';
import ItemCount from './itemCount';




const ItemDetail = ({producto}) => {

   

  return (
    <Stack alignItems="center" justifyContent="center" >

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={producto.imagen}
            alt="green iguana"
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
        <ItemCount/>
      </Card>
    </Stack>
  )
}

export default ItemDetail