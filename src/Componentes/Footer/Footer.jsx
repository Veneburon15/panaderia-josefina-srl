import Facebook from '../../Assets/Icons/facebook-logo.png'
import Instagram from '../../Assets/Icons/instagram-final-icon.png'
import Logo from '../../Assets/Icons/logo-removebg-preview.png'


const Footer = () => {
    return (
        <footer>
            <div class="footer__maindiv row">
              <div class="footer__branddiv text-center col-xl-6 col-md-6 col-sm-12">
                <a class="footer-brand" href="contacto.html"><img class="footer__logo" src={Logo} alt="Logo panadería Josefina"/></a>
                <p class="copyright-text">©2023 Derechos reservados</p>
              </div>
              <div class="footer__socialmedia text-center col-xl-6 col-md-6 col-sm-12">
                <a class="" href="https://www.instagram.com/josefina.panaderia7/?hl=es" target="_blank">
                    <img class="socialmedia-logo" src={Instagram} alt="Logo Instagram"/>
                </a>
                <a class="" href="https://www.facebook.com/Panaderia-Josefina-1278468518974569/?paipv=0&eav=AfZuhR7jQ5IK3cWWifn8PY06hIKT4BokoZFICbpJLkoE5bOs24n6lsSbELlIW4T06jw&_rdr" target="_blank">
                    <img class="socialmedia-logo" src={Facebook} alt="Logo facebook"/>
                </a>
                <p class="footer__socialmedia-text">Síguenos</p>
              </div>
            </div>
            <p class="text-center footertext">Desarrollado por Ángel León | Todos los derechos reservados©</p>
        </footer>
    )
} 


export default Footer