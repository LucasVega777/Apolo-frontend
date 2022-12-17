import React from "react";

function Palabras({datos}) {
    return (
        <section id="service" className="services pt-0">
            <div className="container" data-aos="fade-up">

                <div className="section-header">
                <span>Resultados de Búsqueda</span>
                <h2>Resultados de Búsqueda</h2>

                </div>
                <div className="row gy-4">
                {
                    datos.map((palabra)=>{
                        if(palabra.plataforma === 'youtube')
                            return (
                                
                            
                                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                                        <div className="card">
                                            <h3><a href={palabra.url} className="stretched-link">{palabra.termino}</a></h3>


                                            <iframe src={palabra.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                                        </div> 
                                    </div>
                                
                                
                            )
                        else {
                            return (
                                
                            
                                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                                        <div className="card">
                                            <h3><a href={palabra.url} className="stretched-link">{palabra.termino}</a></h3>
                                            <h4> Se encontro un video en {palabra.plataforma}, y este es el enlace: {palabra.url}</h4>
                                        </div> 
                                    </div>
                                
                             
                            )
                        }
                    })

                }
                </div>

            </div>
        </section>
    )
    }


export default Palabras;