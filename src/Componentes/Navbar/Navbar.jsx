import { Link, NavLink } from 'react-router-dom'
import Logo from '../../Assets/Icons/logo-removebg-preview.png'

const Navbar = () => {
    return (
        <header>
            <nav class="navbar navbar-expand-lg">
                <div class="navbar__maindiv container-fluid">
                    <Link to='/' class="navbar-brand"><img class="nav__logo d-inline-block align-text-center" src={Logo} alt="Logo panaderìa Josefina"/> Panadería Josefina SRL</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="navbar__itemsdiv collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ">
                            <li class="nav-item text-center">
                                <Link to='/' class="nav-link" aria-current="page">Inicio</Link>
                            </li>
                            <li class="nav-item text-center">
                                <Link to='/Sandwicheria' class="nav-link" aria-current="page">Sandwichería</Link>
                            </li>
                            <li class="nav-item text-center">
                                <Link to='/Rotiseria' class="nav-link">Rotisería</Link>
                            </li>
                            <li class="nav-item text-center">
                                <Link to='/lunchService' class="nav-link">Servicio de lunch</Link>
                            </li>
                            <li class="nav-item text-center">
                                <Link to='Contacto' class="nav-link">Contacto</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
} 

//El navbar carece de funcionalidad en vista móvil
//El manú de hamburguesa se crea, pero carece de funcionalidad

export default Navbar