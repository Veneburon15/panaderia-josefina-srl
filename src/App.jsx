// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Componentes/Navbar/Navbar.jsx'
import HomePage from './Pages/HomePage/HomePage.jsx'
import Footer from './Componentes/Footer/Footer.jsx'
import './App.scss';

function App() {
  return (
    <main className="App">
      <Navbar/>
      <HomePage/>
      <Footer/>
    </main>
  );
}

export default App;
