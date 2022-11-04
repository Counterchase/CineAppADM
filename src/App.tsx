import {MainPage} from "./components/MainPage/MainPage";
import {Home} from "./pages/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Categorias} from "./pages/Categorias";
import {Sessoes} from "./pages/Sessoes";
import {Reservas} from "./pages/Reservas";
import {Filmes} from "./pages/Filmes";


function App() {


  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/categorias' element={<Categorias/>} />
            <Route path='/sessões' element={<Sessoes/>} />
            <Route path='/reservas' element={<Reservas/>} />
            <Route path='/filmes' element={<Filmes/>} />
        </Routes>
      <MainPage/>
    </BrowserRouter>
  )
}

export default App
