<script lang="ts">
	import { SignInForm } from '$lib/components/manager/forms/signInForm';
	import type { SignInInput } from '$lib/components/manager/forms/signInForm';
	import { AuthStore } from '$lib/stores';
	import { goto } from '$app/navigation';

	const handleSubmit = async (data: SignInInput) => {
		const response = await AuthStore.signIn(data);
		if (response) {
			goto('/manager/restaurants');
		}
	};
</script>

<div class="xs:pt-8 container mx-auto flex min-h-dvh flex-col md:pt-32">
	<div class="mx-auto max-w-sm">
		<SignInForm onSubmit={handleSubmit} />
	</div>
</div>
