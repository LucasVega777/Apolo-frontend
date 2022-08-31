import { gql } from '@apollo/client';

/**
 * Se definen las mutaciones para crear, eliminar, o editar
 * los roles.
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
`


export const EDITAR_ROL = gql`
    mutation UpdateRuleByIdRol($input: UpdateRuleByIdRolInput!) {
        updateRuleByIdRol(input: $input) {
        rule {
            descripcion
        }
        }
    }
`


export const ELIMINAR_ROL = gql`
    mutation DeleteRuleByIdRol($input: DeleteRuleByIdRolInput!) {
        deleteRuleByIdRol(input: $input) {
        deletedRoleId  
        }
    }
`
