import Logo from '../../Assets/Icons/logo-removebg-preview.png'

const Navbar = () => {
    return (
        <header>
            <nav class="navbar navbar-expand-lg">
                <div class="navbar__maindiv container-fluid">
                    <a class="navbar-brand" href="../index.html"><img class="nav__logo d-inline-block align-text-center" src={Logo} alt="Logo panaderìa Josefina"/> Panadería Josefina SRL</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="navbar__itemsdiv collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ">
                            <li class="nav-item text-center">
                                <a class="nav-link" aria-current="page" href="../index.html">Inicio</a>
                            </li>
                            <li class="nav-item text-center">
                                <a class="nav-link" aria-current="page" href="sandwicheria.html">Sandwichería</a>
                            </li>
                            <li class="nav-item text-center">
                                <a class="nav-link" href="rotiseria.html">Rotisería</a>
                            </li>
                            <li class="nav-item text-center">
                                <a class="nav-link" href="lunchservice.html">Servicio de lunch</a>
                            </li>
                            <li class="nav-item text-center">
                                <a class="nav-link" href="contacto.html">Contacto</a>
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