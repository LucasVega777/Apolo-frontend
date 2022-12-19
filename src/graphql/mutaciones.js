import { gql } from "@apollo/client";

/**Mutaciones de roles
 * - CREAR_ROL
 * - ELIMINAR_ROL
 * - EDITAR_ROL
 */
export const CREAR_ROL = gql`
    mutation CreateRule($input: CreateRuleInput!) {
        createRule(input: $input) {
            rule {
                idRol
                descripcion
            }
        }
    }
`;

export const EDITAR_ROL = gql`
    mutation UpdateRuleByIdRol($input: UpdateRuleByIdRolInput!) {
        updateRuleByIdRol(input: $input) {
            rule {
                descripcion
            }
        }
    }
`;

export const ELIMINAR_ROL = gql`
    mutation DeleteRuleByIdRol($input: DeleteRuleByIdRolInput!) {
        deleteRuleByIdRol(input: $input) {
            deletedRoleId
        }
    }
`;

/**
 * Mutaciones de permiso
 * - CREAR_PERMISO
 * - EDITAR_PERMISO
 * - ELIMINAR_PERMISO
 */
export const CREAR_PERMISO = gql`
    mutation CreatePermission($input: CreatePermissionInput!) {
        createPermission(input: $input) {
            permission {
                idPermiso
                descripcion
            }
        }
    }
`;

export const EDITAR_PERMISO = gql`
    mutation UpdatePermissionByIdPermiso(
        $input: UpdatePermissionByIdPermisoInput!
    ) {
        updatePermissionByIdPermiso(input: $input) {
            permission {
                idPermiso
                descripcion
            }
        }
    }
`;

export const ELIMINAR_PERMISO = gql`
    mutation DeletePermissionByIdPermiso(
        $input: DeletePermissionByIdPermisoInput!
    ) {
        deletePermissionByIdPermiso(input: $input) {
            deletedPermisoId
        }
    }
`;

/**
 * Mutaciones de proyecto
 * - CREAR_PROYECTO
 * - EDITAR_PROYECTO
 * - ELIMINAR_PROYECTO
 */
export const CREAR_PROYECTO = gql`
    mutation CreateProject($input: CreateProjectInput!) {
        createProject(input: $input) {
            project {
                descripcion
            }
        }
    }
`;

export const EDITAR_PROYECTO = gql`
    mutation UpdateProjectByIdProyecto(
        $input: UpdateProjectByIdProyectoInput!
    ) {
        updateProjectByIdProyecto(input: $input) {
            project {
                idProyecto
            }
        }
    }
`;

export const ELIMINAR_PROYECTO = gql`
    mutation DeleteProjectByIdProyecto(
        $input: DeleteProjectByIdProyectoInput!
    ) {
        deleteProjectByIdProyecto(input: $input) {
            deletedProyectoId
        }
    }
`;

export const CREATE_USER = gql`
    mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      user {
        idUser
        name
        password
      }
    }
  }
`;

export const DELETE_USER = gql`
    mutation DeleteUserByIdUser($input: DeleteUserByIdUserInput!) {
    deleteUserByIdUser(input: $input) {
      user {
        name
      }
    }
  }
`;
/**
 * Roles y permisos
*/

export const CREAR_ROL_PERMISO = gql`
    mutation CreateRulesPermission($input: CreateRulesPermissionInput!) {
    createRulesPermission(input: $input) {
        permissionByIdPermiso {
            descripcion
        }
        ruleByIdRol {
            descripcion
        }
    }
    }
`

export const EDITAR_ROL_PERMISO = gql`
mutation UpdateRulesPermissionByIdRolPermiso($input: UpdateRulesPermissionByIdRolPermisoInput!) {
  updateRulesPermissionByIdRolPermiso(input: $input) {
    ruleByIdRol {
      descripcion
    }

    permissionByIdPermiso {
      descripcion
    }
  }
}  
`

export const ELIMINAR_ROL_PERMISO = gql`
    mutation DeleteRulesPermissionByIdRolPermiso($input: DeleteRulesPermissionByIdRolPermisoInput!) {
    deleteRulesPermissionByIdRolPermiso(input: $input) {
        ruleByIdRol {
            descripcion
        }
        permissionByIdPermiso {
            descripcion
        }
    }
    }
`

/**
 * Formulario
*/

export const CREATE_FORM = gql`
    mutation CreateForm($input: CreateFormInput!) {
        createForm(input: $input) {
            form {
            idFormulario
            detalle
            nombre
            }
        }
    }
`

export const ELIMINAR_FORMULARIO = gql`
    mutation DeleteFormByIdFormulario($input: DeleteFormByIdFormularioInput!) {
        deleteFormByIdFormulario(input: $input) {
            deletedFormularioId  
        }
    }
`

export const EDITAR_FORM = gql`
    mutation UpdateFormByIdFormulario($input: UpdateFormByIdFormularioInput!) {
    updateFormByIdFormulario(input: $input) {
        clientMutationId  
    }
    }
`

/**
 * Backlogs
 */

export const CREAR_BACKLOG = gql`
    mutation CreateBacklog($input: CreateBacklogInput!) {
    createBacklog(input: $input) {
        backlog {
        descripcion
        }
    }
    }
`

export const DELETE_BACKLOG = gql`
    mutation DeleteBacklogByIdBacklog($input: DeleteBacklogByIdBacklogInput!) {
    deleteBacklogByIdBacklog(input: $input) {
        deletedBacklogId
    }
    }
`

export const EDITAR_BACKLOG = gql`
    mutation UpdateBacklogByIdBacklog($input: UpdateBacklogByIdBacklogInput!) {
    updateBacklogByIdBacklog(input: $input) {
        clientMutationId
    }
    }
`
