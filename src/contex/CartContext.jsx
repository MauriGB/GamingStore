import { createContext, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])
    const agregar = (producto, contador) => {
    const productoAgregado = {...producto, contador}
    const nuevoCarrito = [...carrito]

    const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === productoAgregado.id)
    if (estaEnElCarrito) {
      estaEnElCarrito.contador += contador;
    
    } else {
      nuevoCarrito.push(productoAgregado)
    }
    setCarrito( nuevoCarrito)

    
  }
  const cantidadEnCarrito = ()=>{
    return carrito.reduce((acc,prod) => acc + prod.contador, 0)
  }
  
  const precioTotal =()=>{
    return carrito.reduce((acc,prod)=> acc + prod.precio * prod.contador,0);
  }

  const vaciarCarrito = ()=>{
    setCarrito([]);
  }
  return (
    <CartContext.Provider value= {{
        carrito, 
        agregar, 
        cantidadEnCarrito, 
        precioTotal, 
        vaciarCarrito
    }}>
        {children}
    </CartContext.Provider>

  )
}