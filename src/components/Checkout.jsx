import React, { useContext } from 'react'
import { CartContext } from '../contex/cartContext'
import { Link } from 'react-router-dom'


const Checkout = () => {

    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)
    
    const vaciar = ()=>{
        vaciarCarrito()
      }
  return (
    <div>
        <h2>GRACIAS POR SU COMPRA</h2>
        {
        carrito.map((prod)=>(
            <div key={prod.id}>

              <h3>{prod.titulo}</h3>
                <p>cantidad: {prod.contador} unidades</p>
                
            </div>
          ))
        }
        <h3>Precio total: ${precioTotal()}</h3>
        <Link to={'/'} >
            <button onClick={vaciar}>Seguir comprando</button>
            
          </Link>
    </div>
  )
}

export default Checkout