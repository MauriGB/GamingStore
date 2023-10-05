import React from 'react'
import CartWidget from './CartWidget'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Grid, Typography } from '@mui/material';
import { SportsEsports } from '@mui/icons-material';

const NavBar = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    
    <Grid container direction="row" justifyContent="space-between" alignItems="center">
        <Grid item xs={4} sx={{color: 'white'}}>
            <Typography variant='h2'>Gaming<SportsEsports/>Store</Typography>
        </Grid>

        {/* menu */}
        <Grid  item xs={4}>

            <Button
                sx={{color: '#403E45'}}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                >
                Juegos
            </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                    >
                    <MenuItem onClick={handleClose}>Accion</MenuItem>
                    <MenuItem onClick={handleClose}>Terror</MenuItem>
                    <MenuItem onClick={handleClose}>Aventura</MenuItem>
                </Menu>
            <Button variant="text" sx={{color: '#AD8CE6'}}>Novedades</Button>
            <Button variant="text" sx={{color: '#AD8CE6'}}>Ofertas</Button>
        </Grid>

        {/* carrito */}
        <Grid item xs={1}>
            <CartWidget/>
        </Grid>
    </Grid>
    
  )
}

export default NavBar