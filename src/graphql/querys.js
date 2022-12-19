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
    query Nodes {
        allRules {
            nodes {
                idRol
                descripcion
            }
        }
    }
`;

export const GET_USER_BY_CREDENTIALS = gql`
    query AllUsers($condition: UserCondition) {
        allUsers(condition: $condition) {
            nodes {
                name
                password
                idUser
            }
        }
    }
`;

export const GET_ALL_USERS = gql`
    query Nodes {
        allUsers {
            nodes {
                name
                password
                idUser
            }
        }
    }
`;

export const GET_PROYECTO_DETALLE = gql`
    query ProjectByIdProyecto($idProyecto: Int!) {
        projectByIdProyecto(idProyecto: $idProyecto) {
            fechaInicio
            fechaFin
            descripcion
            idProyecto
            backlogsByIdProyecto {
                totalCount
                nodes {
                    descripcion
                    fechaFin
                    fechaInicio
                    sprintsByIdBacklog {
                        nodes {
                            estado
                            fechaInicio
                            fechaFin
                            descripcion
                        }
                    }
                    usersStoriesByIdBacklog {
                        totalCount
                        nodes {
                            fechaInsercion
                            estimacion
                            descripcion
                            titulo
                        }
                    }
                }
            }
            usersProjectsByIdProyecto {
                totalCount
                nodes {
                    userByIdUser {
                        name
                        idUser
                        password
                    }
                }
            }
        }
    }
`;


/**
 * Listado de roles con los permisos asignados.
*/

export const GET_ROLES_PERMISOS = gql`
    query Nodes {
    allRulesPermissions {
        nodes {
        idRol
        idPermiso
        idRolPermiso
        ruleByIdRol {
            descripcion
        }
        permissionByIdPermiso {
            descripcion
        }
        }
    }
    }
`

/**
 * Listado de formularios
 */

export const GET_ALL_FORMS = gql`
    query Formulario {
    allForms {
        nodes {
        idFormulario
        detalle
        nombre
        }
    }
    }
`
