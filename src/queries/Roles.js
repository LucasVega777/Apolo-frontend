import { gql } from '@apollo/client';


/**
 * Se definen los queries que otendrán todos los roles, o
 * uno específico a partir de su identificador.
 */


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
`
