function Footer () {
  return (
      <footer id="footer" class="footer">

        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-5 col-md-12 footer-info">
              <a href="/" class="logo d-flex align-items-center">
                <span>Contacto</span>
              </a>
              <p> Puedes contactar con nosotros mediante las siguientes redes sociales</p>
              <div class="social-links d-flex mt-4">
                <a href="https://www.instagram.com/lucas_vegap/" class="instagram"><i class="bi bi-instagram"></i></a>
                <a href="https://www.instagram.com/veronicanicoll97/" class="instagram"><i class="bi bi-instagram"></i></a>
                <a href="https://www.instagram.com/educardenas_/" class="instagram"><i class="bi bi-instagram"></i></a>
                <a href="https://www.instagram.com/alexamarilla99/" class="instagram"><i class="bi bi-instagram"></i></a>
              </div>
            </div>

            <div class="col-lg-2 col-6 footer-links">
              <h4>Tambien te puede interesar</h4>
              <ul>
                <li><a href="https://www.facebook.com/Atlassian">JIRA SOFTWARE</a></li>
                <li><a href="https://www.instagram.com/mondaydotcom/">TRELLO</a></li>
                <li><a href="https://www.scrum.org/">SCRUM</a></li>
              </ul>
            </div>

            <div class="col-lg-2 col-6 footer-links">
              <h4>Tecnologias utilizadas</h4>
              <ul>
                <li><a href="https://es.reactjs.org/docs/getting-started.html">React</a></li>
                <li><a href="https://nodejs.org/es/docs/">Node</a></li>
                <li><a href="https://www.heroku.com">Heroku</a></li>
                <li><a href="https://github.com">GitHub</a></li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Acerca de mi</h4>
              <p>
                Somos estudiantes de la Universidad Nacional de Asuncion<br/>
                Cursando la carrera de Licenciantura en Ciencias Informaticas <br/>
                <strong>Email:</strong> lukissvegap@fpuna.edu.py<br/>
                <strong>Email:</strong> eduardocardenas97@fpuna.edu.py<br/>
                <strong>Email:</strong> alex.socitamrofni@fpuna.edu.py<br/>
                <strong>Email:</strong> veronicanicoll97@fpuna.edu.py<br/>
              </p>

            </div>

          </div>
        </div>

        <div class="container mt-4">
          <div class="copyright">
            &copy; Copyright <strong><span>Logis</span></strong>. All Rights Reserved
          </div>
          <div class="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>

      </footer>
  )
}

export default Footer;