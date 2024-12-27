import { gql } from '@apollo/client/core/core.cjs';

export const COMPANY_SIGNUP_QUERY = gql`
	query GetMenuCategories {
		menuCategories {
			id
			name
		}
	}
`;
