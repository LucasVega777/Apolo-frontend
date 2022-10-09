//Create mutation
//use apollo client
import { gql } from "@apollo/client";

export const CREAR_PROYECTO = gql`
    mutation CreateProject($input: CreateProjectInput!) {
        createProject(input: $input) {
            project {
                descripcion
            }
        }
    }
`;
