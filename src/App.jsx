import {useState} from "react"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import { Container } from "@mui/material"

function App() {

  
  
  return (
    <>
      <Container sx={{ boxShadow: 3, backgroundColor: '#673ab7', textAlign: 'center'}}>
        <NavBar/>
      </Container>
      <ItemListContainer greeting={"Bienvenido!"}/>
    </>
    
    
  )
}

export default App
