import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { Container } from "@mui/material"
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {

  
  
  return (
    <BrowserRouter>
      <Container sx={{ boxShadow: 3, backgroundColor: '#673ab7', textAlign: 'center'}}>
        <NavBar/>
      </Container>

      <Routes>
        <Route exact path='/' element={<ItemListContainer/>} />
        <Route exact path='/categoria/:categoriaId' element={<ItemListContainer/>} />
        <Route exact path='/producto/:id' element={<ItemDetailContainer/>} />
        
      </Routes>

  



    </BrowserRouter>
    
  )
}

export default App
