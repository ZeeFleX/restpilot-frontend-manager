import { companySignUpMutation } from '$lib/api/graphql/auth';
import type { AuthDTO } from 'shared-types';
import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';
import UIStore from './ui';

class AuthStore {
	currentUser: any = writable(null);

	async companySignUp(data: AuthDTO.Request.CompanySignUp) {
		UIStore.notify({
			type: 'error',
			message: 'Произошла ошибка'
		});
		try {
			const response = await companySignUpMutation(data);
			console.log(response);
		} catch (error: any) {
			UIStore.notify({
				type: 'error',
				message: error.toString()
			});
			console.log(error);
		}
	}
}

export default new AuthStore();
