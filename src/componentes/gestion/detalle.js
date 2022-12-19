// Component to show the details of a project
import { useQuery } from "@apollo/client";
import { GET_PROYECTO_DETALLE } from "../../graphql/querys";

export const DetalleProyecto = (props) => {
    const { idProyecto } = props;
    // View all projects in list format
    const { loading, error, data } = useQuery(GET_PROYECTO_DETALLE, {
        variables: { idProyecto: idProyecto },
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    // Create a list of project in select format
    // render the details of the project
    // render the name of users in the project if exist
    return (
        <div>
            <p>
                Fechas: {data.projectByIdProyecto.fechaInicio} -
                {data.projectByIdProyecto.fechaFin}
            </p>
            <h3>Backlog</h3>
            {data.projectByIdProyecto.backlogsByIdProyecto.nodes.map(
                (backlog) => (
                    <div key={backlog.idBacklog}>
                        <p>Descripcion: {backlog.descripcion}</p>
                        <p>Fecha inicio: {backlog.fechaInicio}</p>
                        <p>Fecha fin: {backlog.fechaFin}</p>
                        <p>
                            <h4>Sprint</h4>
                            {backlog.sprintsByIdBacklog.nodes.map((sprint) => (
                                <div key={sprint.idSprint}>
                                    <p>Descripcion: {sprint.descripcion}</p>
                                    <p>Fecha inicio: {sprint.fechaInicio}</p>
                                    <p>Fecha fin: {sprint.fechaFin}</p>
                                    <p>Estado: {sprint.estado}</p>
                                </div>
                            ))}
                        </p>
                    </div>
                )
            )}

            <p>
                <h3>Usuarios</h3>
                Cantidad:{" "}
                {data.projectByIdProyecto.usersProjectsByIdProyecto.totalCount}
                <ul>
                    {data.projectByIdProyecto.usersProjectsByIdProyecto.nodes.map(
                        (user) => (
                            <li key={user.userByIdUser.idUser}>
                                {user.userByIdUser.name}
                                <button
                                    onClick={() => {
                                        console.log("Eliminar usuario");
                                    }}
                                >
                                    Eliminar
                                </button>
                            </li>
                        )
                    )}
                </ul>
            </p>
        </div>
    );
};
