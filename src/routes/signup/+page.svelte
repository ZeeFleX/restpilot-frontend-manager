<script lang="ts">
	import { SignUpForm } from '$lib/components/manager';
	import type { FormFields } from '$lib/components/manager';
	import { AuthStore } from '$lib/stores';
	import { goto } from '$app/navigation';

	const handleSubmit = async (fields: FormFields) => {
		console.log('Form submitted with fields:', fields);
		// Здесь будет логика отправки данных на сервер

		const company = await AuthStore.companySignUp(fields);
		if (company) {
			goto('/signin');
		}
	};
</script>

<div class="container mx-auto flex min-h-dvh w-full max-w-screen-md flex-col pt-8 md:pt-16">
	<SignUpForm onSubmit={handleSubmit} />
</div>
