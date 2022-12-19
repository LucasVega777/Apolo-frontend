// Component to show the details of a project
import { useQuery } from "@apollo/client";
import { GET_PROYECTO_DETALLE } from "../../graphql/querys";

export default DetalleProyecto = ({ idProyecto }) => {
    // View all projects in list format
    const { loading, error, data } = useQuery(GET_PROYECTO_DETALLE, {
        variables: { idProyecto: idProyecto },
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    // Create a list of project in select format
    // render the details of the project
    return (
        <div>
            <h1>Detalles del proyecto</h1>
            <p>Descripcion: {data.proyectoByIdProyecto.descripcion}</p>
            <p>Fecha de inicio: {data.proyectoByIdProyecto.fechaInicio}</p>
            <p>Fecha de fin: {data.proyectoByIdProyecto.fechaFin}</p>
        </div>
    );
}