import { gql } from '@apollo/client';

export const usersQuery = gql`
    query User {
        users @rest(type: "User", path: "users"){
            id,
            username,
            email,
            company {
                name
            }
        }
    }
`;

