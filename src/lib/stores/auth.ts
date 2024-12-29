import { companySignUpMutation, signInMutation } from '$lib/api/graphql/auth';
import type { AuthDTO, CompaniesDTO } from 'shared-types';
import { writable } from 'svelte/store';
import UIStore from './ui';

class AuthStore {
	currentUser: any = writable(null);

	async companySignUp(data: AuthDTO.Request.CompanySignUp) {
		try {
			const response: AuthDTO.Response.CompanySignUp = await companySignUpMutation(data);

			if (response.error?.message) {
				UIStore.notify({
					type: 'error',
					message: response.error.message
				});
			}

			if (response.company) {
				UIStore.notify({
					type: 'success',
					message: `Компания ${response.company.companyName} успешно зарегистрирована`
				});
			}

			return response.company;
		} catch (error: any) {
			console.log(error);
		}
	}

	async signIn(data: AuthDTO.Request.SignIn) {
		try {
			const response: AuthDTO.Response.SignIn = await signInMutation(data);

			if (response.error?.message) {
				UIStore.notify({
					type: 'error',
					message: response.error.message
				});
				return null;
			}

			if (response.accessToken) {
				localStorage.setItem('accessToken', response.accessToken);

				UIStore.notify({
					type: 'success',
					message: 'Добро пожаловать'
				});

				return response;
			}

			return null;
		} catch (error: any) {
			console.error(error);
			return null;
		}
	}
}

export default new AuthStore();
