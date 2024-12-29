import { ApolloError, gql } from '@apollo/client/core/core.cjs';
import { client } from '../client';
import type { AuthDTO } from 'shared-types';
import { ERROR_CODES } from 'shared-types';

export const companySignUpMutation = async (
	companySignUpInput: AuthDTO.Request.CompanySignUp
): Promise<AuthDTO.Response.CompanySignUp> => {
	try {
		const response = await client.mutate({
			mutation: gql`
				mutation CompanySignUp($companySignUpInput: CompanySignUpInput!) {
					companySignUp(companySignUpInput: $companySignUpInput) {
						user {
							id
							phone
							email
							firstname
							lastname
							surname
						}
						company {
							id
							companyName
							inn
							address
						}
					}
				}
			`,
			variables: {
				companySignUpInput
			}
		});
		return response.data.companySignUp;
	} catch (error: unknown) {
		if (error instanceof ApolloError) {
			return {
				error: {
					code: error.graphQLErrors[0]?.extensions?.code as number,
					message: error.graphQLErrors[0]?.message as keyof typeof ERROR_CODES
				}
			};
		}

		return {
			error: {
				code: 1000,
				message: 'COMPANY_NOT_CREATED'
			}
		};
	}
};
