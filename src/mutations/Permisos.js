import { gql } from '@apollo/client';

/**
 * Se definen las mutaciones para crear, eliminar, o editar
 * los permisos.
 */


export const CREAR_PERMISO = gql`
    mutation CreatePermission(
        $input: CreatePermissionInput!
        ) {
            createPermission(
                input: $input
            ) {
                permission {
                    idPermiso
                    descripcion
                }
            }
    }
`

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
`

export const ELIMINAR_PERMISO = gql`
    mutation DeletePermissionByIdPermiso(
        $input: DeletePermissionByIdPermisoInput!
    ) {
        deletePermissionByIdPermiso(input: $input) {
            deletedPermisoId
        }
    }
`