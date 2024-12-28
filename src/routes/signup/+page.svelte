<script lang="ts">
	import { SignUpForm } from '$lib/components/manager';
	import type { FormFields } from '$lib/components/manager';

	const handleSubmit = (fields: FormFields) => {
		console.log('Form submitted with fields:', fields);
		// Здесь будет логика отправки данных на сервер
	};
</script>

<div class="container mx-auto flex min-h-dvh w-full max-w-screen-md flex-col pt-8 md:pt-32">
	<SignUpForm onSubmit={handleSubmit} />
</div>
