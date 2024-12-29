import { ApolloError, gql } from '@apollo/client/core/core.cjs';
import { client } from '../client';
import type { AuthDTO } from 'shared-types';
import { ERROR_CODES } from 'shared-types';

export const signInMutation = async (
	signInInput: AuthDTO.Request.SignIn
): Promise<AuthDTO.Response.SignIn> => {
	try {
		const response = await client.mutate({
			mutation: gql`
				mutation SignIn($signInInput: SignInInput!) {
					signIn(signInInput: $signInInput) {
						accessToken
						user {
							id
							phone
							email
							firstname
							lastname
							surname
						}
					}
				}
			`,
			variables: {
				signInInput
			}
		});

		return response.data.signIn;
	} catch (error: unknown) {
		if (error instanceof ApolloError) {
			console.log(error);
			return {
				error: {
					code: error.graphQLErrors[0]?.extensions?.code as number,
					message: error.graphQLErrors[0]?.message as keyof typeof ERROR_CODES
				}
			};
		}

		return {
			error: {
				code: 1003,
				message: 'AUTH_FAILED'
			}
		};
	}
};
