import { gql } from '@apollo/client/core/core.cjs';

export const MENU_CATEGORIES_QUERY = gql`
	query GetMenuCategories {
		menuCategories {
			id
			name
		}
	}
`;
