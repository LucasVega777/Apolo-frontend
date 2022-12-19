import React from "react";
import Footer from "./componentes/footer";
import Header from './componentes/header'



function HomePage() {
  return (
      <div>
        <Header/>
        <section id={'hero'} className={'hero d-flex align-items-center'}>
        <div className={'container'}>
          <h1> Gestion de Proyectos </h1>
        </div>
        </section>
        <Footer/>
      </div>
  );
}

export default HomePage;
