<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { Header } from '$lib/components/manager/header';
	import '../app.css';
	import '$lib/styles/fonts.css';

	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<Header />
	<div class="bg-background main-layout flex min-h-screen flex-col font-sans antialiased">
		{@render children()}
	</div>
</ParaglideJS>

<style>
	.main-layout {
		font-family:
			'Inter',
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			sans-serif;
	}
</style>
