import Elemento from "./components/Elemento";
import Formulario from "./components/Formulario";
import Lista from "./components/Lista";
import controller from "./controller";
import { GET_ALL_PROYECTOS } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import { useState } from "react";


export default function Proyecto() {
    

    const [proyectos, setProyectos] = useState([
        {
            id: 1,
            nombre: "Proyecto 1",
            descripcion: "Descripción del proyecto 1",
            fechaInicio: "2021-01-01",
            fechaFin: "2021-01-31",
        },
        {
            id: 2,
            nombre: "Proyecto 2",
            descripcion: "Descripción del proyecto 2",
            fechaInicio: "2021-02-01",
            fechaFin: "2021-02-28",
        },
    ]);

    return (
        <div>
            <h1>Proyecto</h1>
            <div>
                <h2>Lista de proyectos</h2>
                <Lista proyectos={proyectos} controlador={controller} />
            </div>
            <div>
                <h2>Formulario</h2>
                <Formulario controlador={controller} />
            </div>
        </div>
    );
}
