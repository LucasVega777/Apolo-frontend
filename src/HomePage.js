import React, {useState, useEffect} from "react";
import logo from './logo.png';
import logormbg from './logormbg.png';
import Footer from "./componentes/footer";
import Palabras from "./Palabras";
import axios from 'axios';

function HomePage() {
  const [menu, setMenu] = useState('mobile-nav-show');
  const [x, setX] = useState('mobile-nav-hide d-none');
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [datos, setDatos] = useState([]);

  const buscar = async(str) => {
    if (str.length === 0) {
        setTerminoBusqueda('')
        return;
    }
    setTerminoBusqueda(encodeURI(str));
  }

  
  const busqueda = async() => {
    let url = `https://api-lds.herokuapp.com/api/v1/palabras/busqueda?termino=${terminoBusqueda}`;
    let response = await axios.get(url);
    setDatos(response.data);    
  }

  useEffect(() => {}, [datos]);
  return (
      <div>
        <header id={'header'} className={'header d-flex align-items-center fixed-top'}>
          <div className={'container-fluid container-xl d-flex align-items-center justify-content-between'}>

            <a href={'https://lucasvega777.github.io/frontendAprendeLDS/'} className={'logo d-flex align-items-center'}>
              <h1>Signario</h1>
            </a>

            <i className={'mobile-nav-toggle ' + menu + ' bi bi-list'} onClick={() => {setX('mobile-nav-show'); setMenu('mobile-nav-hide d-none')}}></i>
            <i className={'mobile-nav-toggle ' + x + ' bi bi-x'} onClick={() => {setX('mobile-nav-hide d-none'); setMenu('mobile-nav-show')}}></i>
            <nav id={'navbar'} className={'navbar'}
            style={{right: (x === 'mobile-nav-show') ? '0' : '-100%'}}>
              <ul>
                <li><a href={'https://lucasvega777.github.io/frontendAprendeLDS/'} className={'active'}>Home</a></li>
                <li><a href={'https://api-lds.herokuapp.com/api/v1/palabras'}>WebService</a></li>
              </ul>
            </nav>

          </div>
        </header>

        <section id={'hero'} className={'hero d-flex align-items-center'}>
          <div className={'container'}>
            <div className={'row gy-4 d-flex justify-content-between'}>
              <div className={'col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center'}>
                <h2 data-aos={'fade-up'}> Aprende Lengua de Señas</h2>
                <p>
                  Te ayudaré a buscar la palabra que desees dentro de mi base de datos.
                </p>

                <section>
                  <div
                    className={'form-search d-flex align-items-stretch mb-3'} >
                      <input type={'text'} className={'form-control'} placeholder={'Ingrese un término de búsqueda'} 
                        id={'termino'} onChange={(event) => buscar(event.target.value)}
                      />
                      <button type={'submit'} className={'btn btn-primary'} onClick={()=> busqueda()}>
                        Buscar
                      </button>
                  </div>
                </section>
                
              </div>

              <div className={'col-lg-5 order-1 order-lg-2 hero-img'} data-aos={'zoom-out'}>
                <img src={logormbg} className={'img-fluid mb-3 mb-lg-0'} alt={''}/>
              </div>

            </div>
          </div>
        </section>

        <main id={'main'}>

          <section id="featured-services" className={'featured-services'}>
            <div className={'container'}>

              <div className={'row gy-4'}>

                <div className={'col-lg-4 col-md-6 service-item d-flex'} data-aos={'fade-up'}>
                  <div className={'icon flex-shrink-0'}><i className={'bi bi-search'}></i></div>
                  <div>
                    <h4 className={'title'}>Buscador de Palabras</h4>
                    <p className={'description'}>Puedes buscar las palabras que desees</p>
                  </div>
                </div>
                

                <div className={'col-lg-4 col-md-6 service-item d-flex'} data-aos={'fade-up'} data-aos-delay={'100'}>
                  <div className={'icon flex-shrink-0'}><i className={'bi bi-translate'}></i></div>
                  <div>
                    <h4 className={'title'}> Ayuda para crear oraciones </h4>
                    <p className={'description'}> Esta herramienta se incluirá en un futuro feature </p>
                  </div>
                </div>

                <div className={'col-lg-4 col-md-6 service-item d-flex'} data-aos={'fade-up'} data-aos-delay={'200'}>
                  <div className={'icon flex-shrink-0'}><i className={'bi bi-collection'}></i></div>
                  <div>
                    <h4 className={'title'}>Clasificacion de palabras</h4>
                    <p className={'description'}>Esta herramienta se incluirá en un futuro feature</p>
                  </div>
                </div>

              </div>

            </div>
          </section>

          
            
          {  (datos.length !== 0)? <Palabras datos={datos}/> : ''}
            
          
      
          <section id="about" className={'about pt-0'}>
            <div className={'container'} data-aos={'fade-up'}>

              <div className={'row gy-4'}>
                <div className={'col-lg-6 position-relative align-self-start order-lg-last order-first'}>
                  <img src={logo} className={'img-fluid'} alt={''}/>
                </div>
                <div className={'col-lg-6 content order-last  order-lg-first'}>
                  <h3>Acerca de Este Proyecto</h3>
                  <p>
                    Este es un proyecto OpenSource, sin fines de lucro, creada para facilitar la busqueda y aprendizaje de palabras de la lengua de señas, diseñado por Lucas Vega, si desea realizar algun aporte en el código fuente, no dude en visitar nuestros repositorios
                  </p>
                  <ul>
                    <li data-aos={'fade-up'} data-aos-delay={'100'}>
                      <i className={'bi bi-diagram-3'}></i>
                      <div>
                        <h5><a href={'https://github.com/LucasVega777/APIaprendeLDS'}> API </a></h5>
                        <p>API, es el que realiza las busquedas conectandose a nuestra Base de Datos</p>
                      </div>
                    </li>
                    <li data-aos={'fade-up'} data-aos-delay={'200'}>
                      <i className={'bi bi-window-sidebar'}></i>
                      <div>
                        <h5><a href={'https://github.com/LucasVega777/frontendAprendeLDS'}> FrontEnd</a></h5>
                        <p>Realizado en React</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </section>

          
          <section id={'faq'} className={'faq'}>
            <div className={'container'} data-aos={'fade-up'}>

              <div className={'section-header'}>
                <span>Preguntas Frecuentes</span>
                <h2>Preguntas Frecuentes</h2>

              </div>

              <div className={'row justify-content-center'} data-aos={'fade-up'} data-aos-delay={'200'}>
                <div className={'col-lg-10'}>

                  <div className={'accordion accordion-flush'} id={'faqlist'}>

                    <div className={'accordion-item'}>
                      <h3 className={'accordion-header'}>
                        <button className={'accordion-button collapsed'} type={'button'} data-bs-toggle={'collapse'} data-bs-target={'#faq-content-1'}>
                          <i className={'bi bi-question-circle question-icon'}></i>
                          ¿Que es la lengua de señas?
                        </button>
                      </h3>
                      <div id={'faq-content-1'} className={'accordion-collapse collapse'} data-bs-parent={'#faqlist'}>
                        <div className={'accordion-body'}>
                          La lengua de señas es la lengua natural de las personas Sordas. Una lengua que como cualquier otra, posee y cumple todas las leyes lingüísticas y se aprende dentro de la comunidad de usuarios a quienes facilita resolver todas las necesidades comunicativas y no comunicativas propias del ser humano, social y cultural. 
                        </div>
                      </div>
                    </div>

                    <div className={'accordion-item'}>
                      <h3 className={'accordion-header'}>
                        <button className={'accordion-button collapsed'} type={'button'} data-bs-toggle={'collapse'} data-bs-target={'#faq-content-2'}>
                          <i className={'bi bi-question-circle question-icon'}></i>
                          ¿Como contribuir a este proyecto?
                        </button>
                      </h3>
                      <div id="faq-content-2" className={'accordion-collapse collapse'} data-bs-parent={'#faqlist'}>
                        <div className={'accordion-body'}>
                          Puedes realizar un pull request a cualquiera de los repositorios en GitHub asociados al proyecto
                        </div>
                      </div>
                  </div>

                </div>
              </div>
              </div>
            </div>
          </section>
        </main>
        <Footer/>
      </div>
  );
}

export default HomePage;
