import { gql } from '@apollo/client/core/core.cjs';
import { client } from '../client';
import type { AuthDTO } from 'shared-types';

export const companySignUpMutation = async (companySignUpInput: AuthDTO.Request.CompanySignUp) => {
	try {
		const response = await client.mutate({
			mutation: gql`
				mutation CompanySignUp($companySignUpInput: CompanySignUpInput!) {
					companySignUp(companySignUpInput: $companySignUpInput) {
						user {
							id
							phone
						}
						company {
							id
							name
						}
					}
				}
			`,
			variables: {
				companySignUpInput
			}
		});
		return response;
	} catch (error) {
		return error;
	}
};
