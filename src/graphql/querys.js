import { gql, useQuery } from "@apollo/client";

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

export const GET_ALL_PERMISOSS = gql`
    query AllPermissions {
        allPermissions {
            nodes {
                idPermiso
                descripcion
            }
        }
    }
`;

export const GET_ALL_STATUSES = gql`
    query AllStatuses {
        allStatuses {
            nodes {
                idEstado
                descripcion
            }
        }
    }
`;

export const GET_ROL_BY_ID = gql`
    query RuleByIdRol($idRol: Int!) {
        ruleByIdRol(idRol: $idRol) {
            idRol
            descripcion
        }
    }
`;

export const GET_ALL_ROLES = gql`
    query AllRules {
        allRules {
            nodes {
                idRol
                descripcion
            }
        }
    }
`;

export const GET_USER_BY_CREDENTIALS = gql`
    query UserByCredentials($user: String!, $password: String!) {
        userByUsername(user: $user, password: $password) {
            id_user
            name
            user
        }
    }
`;