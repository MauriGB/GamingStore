import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase/config';

const ItemDetailContainer = () => {

  const { id } = useParams()
  

  const [producto, setProducto] = useState([null])

  useEffect(()=> {
    const docRef = doc(db, "productos", id)
    getDoc(docRef)
    .then((resp) =>{
      setProducto(
        {...resp.data(), id: resp.id}
      );
    })
  }, [id])
  

  
  return (
    <>
  
        
      <ItemDetail producto={producto}/>
      
         
      
    </>
  )
}

export default ItemDetailContainer