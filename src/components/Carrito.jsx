import React, { useContext } from 'react'
import { CartContext } from '../contex/cartContext'
import { Link } from 'react-router-dom'

const Carrito = () => {

    const {carrito, precioTotal, vaciarCarrito}= useContext(CartContext)
    const vaciar = ()=>{
      vaciarCarrito()
    }



  return (
    <div>
        {
        carrito.map((prod)=>(
            <div key={prod.id}>

              <h3>{prod.titulo}</h3>
                <p>Precio: ${prod.precio}</p>
                <p>total: ${prod.precio * prod.contador}</p>
                <p>cantidad: {prod.contador}</p>
            </div>
          ))
        }

        {carrito.length > 0 ?
        <>
            <h2>Precio Total: ${precioTotal()}</h2>
            <button onClick={vaciar}>Vaciar Carrito</button>
            <Link to="/checkout">Finalizar compra</Link>
        </> :
        <> 
          <h2>El carrito esta vacio!</h2>
          <Link to={'/'} >
            <button>Comprar</button>
          </Link>
        </>
        }

    </div>
  )
}

export default Carrito