import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import { db } from "../firebase/config"

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const {categoriaId} = useParams()
  

  useEffect(() => {
    
    const productosRef = collection(db, "productos")

    getDocs(productosRef)
      .then((resp) => {
        
        setProductos(
          resp.docs.map((doc)=>{
            return {...doc.data(), id: doc.id}
          })
        );
      })

  }, [categoriaId])

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