<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { field, form } from 'svelte-forms';
	import { pattern, required, min } from 'svelte-forms/validators';
	let formIsValid = $state<boolean>(false);

	const phone = field('phone', '', [pattern(/^7\d{10}$/), required()], { checkOnInit: true });
	const email = field('email', '', [pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/), required()], {
		checkOnInit: true
	});
	const password = field(
		'password',
		'',
		[(value) => ({ valid: value.length >= 8, name: 'passwordLength' }), required()],
		{ checkOnInit: true }
	);
	const name = field('name', '', [required()], { checkOnInit: true });
	const inn = field(
		'inn',
		'',
		[
			(value) => ({
				valid: /^\d{10}$|^\d{12}$/.test(value),
				name: 'innFormat'
			}),
			required()
		],
		{ checkOnInit: true }
	);
	const address = field('address', '', [required()], { checkOnInit: true });

	const signUpForm = form(phone, email, password, name, inn, address);

	password.subscribe((state) => {
		console.log(state);
	});

	signUpForm.subscribe((state) => {
		// console.log(state);
		formIsValid = state.valid;
	});

	const onSubmit = () => {
		const formIsValid = $signUpForm.valid;
	};
</script>

<div class="container mx-auto flex min-h-dvh flex-col pt-32">
	<Card.Root class="mx-auto max-w-sm">
		<Card.Header>
			<Card.Title class="text-xl">Регистрация</Card.Title>
			<Card.Description>Введите основную информацию о Вашей компании</Card.Description>
		</Card.Header>
		<Card.Content>
			<div class="grid gap-4">
				<div class="grid gap-2">
					<Label for="phone">Телефон для входа <span class="text-red-500">*</span></Label>
					<Input
						maskOptions={{
							mask: '+7 (###) ###-##-##',
							eager: true,
							postProcess: (value) => {
								$phone.value = value.replace(/\D/g, '');
								return value;
							}
						}}
						placeholder="+7 (000) 000-00-00"
					/>
					{#if $phone.errors.includes('pattern') && $phone.value}
						<p class="text-sm text-red-500">Некорректный формат телефона</p>
					{/if}
				</div>
				<div class="grid gap-2">
					<Label for="email">Email (для уведомлений) <span class="text-red-500">*</span></Label>
					<Input
						id="email"
						bind:value={$email.value}
						type="email"
						placeholder="mycompany@example.com"
						required
					/>
					{#if $email.errors.includes('pattern') && $email.value}
						<p class="text-sm text-red-500">Неверный адрес электронной почты</p>
					{/if}
				</div>
				<div class="grid gap-2">
					<Label for="password">Password <span class="text-red-500">*</span></Label>
					<Input id="password" bind:value={$password.value} type="password" />
					{#if $password.errors.includes('passwordLength') && $password.value}
						<p class="text-sm text-red-500">Минимальная длина пароля 8 символов</p>
					{/if}
				</div>
				<div class="grid gap-2">
					<Label for="name">Наименование компании <span class="text-red-500">*</span></Label>
					<Input
						id="name"
						bind:value={$name.value}
						type="text"
						placeholder="Введите наименование юр.лица"
						required
					/>
				</div>
				<div class="grid gap-2">
					<Label for="inn">ИНН <span class="text-red-500">*</span></Label>
					<Input
						maskOptions={{
							mask: '####-######-##',
							postProcess: (value) => {
								$inn.value = value.replace(/\D/g, '');
								return value;
							}
						}}
						id="inn"
						type="text"
						placeholder="Введите ИНН"
						required
					/>
					{#if $inn.errors.includes('innFormat') && $inn.value}
						<p class="text-sm text-red-500">ИНН должен содержать 10 или 12 цифр</p>
					{/if}
				</div>
				<div class="grid gap-2">
					<Label for="address">Адрес регистрации <span class="text-red-500">*</span></Label>
					<Input
						id="address"
						bind:value={$address.value}
						type="text"
						placeholder="Введите адрес регистрации"
						required
					/>
				</div>
				<Button onclick={onSubmit} disabled={!formIsValid} type="submit" class="w-full"
					>Создать аккаунт</Button
				>
			</div>
			<div class="mt-4 text-center text-sm">
				Уже есть действующий аккаунт?
				<a href="/signin" class="underline">Войти</a>
			</div>
		</Card.Content>
	</Card.Root>
</div>
