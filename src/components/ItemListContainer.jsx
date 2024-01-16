import React from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

  const {categoriaId} = useParams()
  

  const productos = [
    {
      id: 1,
      titulo: "Call of Duty: Modern Warfare",
      descripcion: "Experimenta la intensidad de la guerra moderna en este popular juego de disparos en primera persona.",
      precio: 100,
      categoria: "accion",
      imagen: "https://dummyimage.com/200x100/ff91ff.jpg",
      stock: 10
    },
    {
      id: 2,
      titulo: "The Legend of Zelda: Breath of the Wild",
      descripcion: "Embárcate en una épica aventura en el vasto mundo de Hyrule, resolviendo acertijos y derrotando enemigos.",
      precio: 200,
      categoria: "aventura",
      imagen: "https://dummyimage.com/200x100/9197ff.jpg",
      stock: 10
    },
    {
      id: 3,
      titulo: "Resident Evil 7: Biohazard",
      descripcion: "Sumérgete en el horror con este juego de terror en primera persona, lleno de suspense y sustos inesperados.",
      precio: 300,
      categoria: "terror",
      imagen: "https://dummyimage.com/200x100/91ff93.jpg",
      stock: 10
    },
    {
      id: 4,
      titulo: "Uncharted 4: A Thief's End",
      descripcion: "Acompaña a Nathan Drake en su última aventura llena de acción, tesoros y traiciones.",
      precio: 400,
      categoria: "aventura",
      imagen: "https://dummyimage.com/200x100/ffe791.jpg",
      stock: 10
    },
    {
      id: 5,
      titulo: "Dead Space",
      descripcion: "Explora una nave espacial infestada de criaturas alienígenas grotescas en este juego de terror claustrofóbico.",
      precio: 500,
      categoria: "terror",
      imagen: "https://dummyimage.com/200x100/ff5252.jpg",
      stock: 10
    }
  ];
  
  

const productosFiltrados = productos.filter((productos)=> productos.categoria == categoriaId)

  return (
    <>
    {

      categoriaId ? <ItemList productos={productosFiltrados}/> : <ItemList productos={productos}/>
    }
    </>
  )
}

export default ItemListContainer