import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Componentes/Navbar/Navbar.jsx'
import HomePage from './Pages/HomePage/HomePage.jsx'
import Sandwicheria from './Pages/Sandwicheria/Sandwicheria.jsx'
import Rotiseria from './Pages/Rotiseria/Rotiseria.jsx'
import LunchService from './Pages/LunchService/LunchService.jsx'
import Contacto from './Pages/Contacto/Contacto.jsx'
import Footer from './Componentes/Footer/Footer.jsx'
import './App.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/Sandwicheria' element={<Sandwicheria/>}/>
          <Route path='/Rotiseria' element={<Rotiseria/>}/>
          <Route path='/lunchService' element={<LunchService/>}/>
          <Route path='/Contacto' element={<Contacto/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
