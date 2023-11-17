import Surtidos from '../../Assets/Images/sandwiches-surtidos.jpg'
import Palitos from '../../Assets/Images/palitos-de-queso.jpg'
import Pastel from '../../Assets/Images/pastel-de-dulce-de-leche.jpg'
import Bocata from '../../Assets/Images/bocata.jpg'
import Pizzetas from '../../Assets/Images/pizzetas-con-gustos.jpg'
import PastelCarne from '../../Assets/Images/pastel-de-carne.jpg'
import EnsaladaFrutas from '../../Assets/Images/ensalada-de-frutas.jpg'

const HomePage = () => {
    return (
        <main class="container-fluid">
            <section class="animation__zone">
            </section>
            <section>
                <h1 class="index__animation">Somos Panadería Josefina</h1>
                <p class="main-paragraph">¡Bienvenidos a Panadería Josefina! Somos una empresa artesanal que ha estado elaborando deliciosos panes y pasteles durante generaciones. Desde 1950, hemos estado ofreciendo productos horneados frescos y de alta calidad a nuestra comunidad, y seguimos haciéndolo con el mismo compromiso y pasión que nos ha mantenido en el negocio por tantos años.
                <br/>
                En nuestra panadería, creemos en el poder de los ingredientes frescos y de la tradición, por lo que utilizamos solo los mejores ingredientes naturales y técnicas de horneado clásicas para producir nuestros productos. Desde panes rústicos y crocantes hasta pasteles suaves y esponjosos, todo lo que hacemos está hecho a mano con amor y cuidado.
                <br/>
                Si está buscando una experiencia de panadería auténtica y deliciosa, ¡venga a visitarnos! Estamos ansiosos por compartir nuestra pasión por la panadería con usted y hacerle sentir como en casa en nuestra acogedora tienda. ¡Gracias por elegir a Panadería Josefina!</p>
            </section>
            <section>
                <h2 class="h2center text-center">Nuestras especialidades</h2>
                <div class="row index-images_div">
                    <div class="col-xl-3 col-md-6 col-sm-12 text-center">
                        <img class="indeximages img-fluid" src={Surtidos} alt="Sandwiches surtidos"/>
                    </div>
                    <div class="col-xl-3 col-md-6 col-sm-12 text-center">
                        <img class="indeximages img-fluid" src={Palitos} alt="Palitos de queso"/>
                    </div>
                    <div class="col-xl-3 col-md-6 col-sm-12 text-center">
                        <img class="indeximages img-fluid" src={Pastel} alt="Pastel de dulce de leche"/>
                    </div>
                    <div class="col-xl-3 col-md-6 col-sm-12 text-center">
                        <img class="indeximages img-fluid" src={Bocata} alt="Bocata"/>
                    </div>
                    <div class="col-xl-4 col-md-6 col-sm-12 text-center">
                        <img class="indeximages img-fluid" src={Pizzetas} alt="Pizzetas con gustos"/>
                    </div>
                    <div class="col-xl-4 col-md-6 col-sm-12 text-center">
                        <img class="indeximages img-fluid" src={PastelCarne} alt="Pastel de carne"/>
                    </div>
                    <div class="col-xl-4 col-md-12 col-sm-12 text-center">
                        <img class="indeximages img-fluid" src={EnsaladaFrutas} alt="Ensalada de frutas"/>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default HomePage