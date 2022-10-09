import { gql } from "@apollo/client";

export const GET_ALL_PROYECTOS = gql`
    query AllProjects {
        allProjects {
            totalCount
            nodes {
                idProyecto
                descripcion
                fechaInicio
                fechaFin
            }
        }
    }
`;
