<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
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
					<Label for="phone">Телефон для входа</Label>
					<Input id="phone" placeholder="+7" required />
				</div>
				<div class="grid gap-2">
					<Label for="email">Email (для уведомлений)</Label>
					<Input id="email" type="email" placeholder="mycompany@example.com" required />
				</div>
				<div class="grid gap-2">
					<Label for="password">Password</Label>
					<Input id="password" type="password" />
				</div>
				<div class="grid gap-2">
					<Label for="name">Наименование компании</Label>
					<Input id="name" type="name" placeholder="Введите наименование юр.лица" required />
				</div>
				<div class="grid gap-2">
					<Label for="name">ИНН</Label>
					<Input id="name" type="name" placeholder="Введите ИНН" required />
				</div>
				<div class="grid gap-2">
					<Label for="name">Адрес регистрации</Label>
					<Input id="name" type="name" placeholder="Введите адрес регистрации" required />
				</div>
				<Button type="submit" class="w-full">Создать аккаунт</Button>
			</div>
			<div class="mt-4 text-center text-sm">
				Уже есть действующий аккаунт?
				<a href="/signin" class="underline">Войти</a>
			</div>
		</Card.Content>
	</Card.Root>
</div>
