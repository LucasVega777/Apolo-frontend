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
    mutation UpdateProjectByIdProyecto($input: UpdateProjectInput!) {
        updateProject(input: $input) {
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
