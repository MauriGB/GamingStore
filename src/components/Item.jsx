import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Stack } from '@mui/material';
import { Link } from 'react-router-dom';



const Item = ({titulo, id, img}) => {
  return (
    <Stack alignItems="center" justifyContent="center" >

      <Card sx={{ m: 1, minWidth: 200 }}>
        <CardActionArea>
          <Link to={`../producto/${id}`}>
          <CardMedia
            component="img"
            height="140"
            image={img}
            alt="green iguana"
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {titulo}
            </Typography>
          </CardContent>
          </Link>
        </CardActionArea>
        <CardActions>
          <Link to={`../producto/${id}`}>

          <Button size="small" color="primary">
            Ver mas
          </Button>
          </Link>
        </CardActions>
      </Card>
    </Stack>
  )
}

export default Item