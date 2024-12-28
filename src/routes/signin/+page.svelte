<script lang="ts">
	import { Spinner } from '$lib/components/shared';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';

	import { field, form } from 'svelte-forms';
	import { pattern, required } from 'svelte-forms/validators';

	const phone = field('phone', '', [pattern(/^(?:\+?[7-8])?[0-9]{10}$/)], { checkOnInit: true });
	const password = field('password', '', [required()], { checkOnInit: true });
	const signInForm = form(phone, password);

	const onSubmit = () => {
		console.log($signInForm);
	};
</script>

<div class="xs:pt-8 container mx-auto flex min-h-dvh flex-col md:pt-32">
	<Card.Root class="mx-auto max-w-sm">
		<Card.Header>
			<Card.Title class="text-2xl">Авторизация</Card.Title>
			<Card.Description>Введите телефон и пароль для входа в аккаунт</Card.Description>
		</Card.Header>
		<Card.Content>
			<div class="grid gap-4">
				<div class="grid gap-2">
					<Label for="phone">Телефон</Label>
					<Input id="phone" type="phone" placeholder="+7" required bind:value={$phone.value} />
				</div>
				<div class="grid gap-2">
					<div class="flex items-center">
						<Label for="password">Пароль</Label>
						<a href="##" class="ml-auto inline-block text-sm underline">Забыли пароль?</a>
					</div>
					<Input id="password" type="password" required bind:value={$password.value} />
				</div>
				<Button onclick={onSubmit} disabled={!$signInForm.valid} type="submit" class="w-full"
					>Войти</Button
				>
			</div>
			<div class="mt-4 text-center text-sm">
				Еще нет аккаунта
				<a href="/signup" class="underline">Зарегистрироваться</a>
			</div>
		</Card.Content>
	</Card.Root>
</div>
