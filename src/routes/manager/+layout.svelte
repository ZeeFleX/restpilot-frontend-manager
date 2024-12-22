<script lang="ts">
	import { Sidebar } from '$lib/components/manager';
	import { Breadcrumbs } from '$lib/components/manager/breadcrumbs';
	let { children } = $props();
</script>

<div class="bg-muted/40 flex min-h-screen w-full flex-col">
	<Sidebar />
	<div class="flex-1 pl-20 pr-6 pt-4">
		<Breadcrumbs />
		{@render children()}
	</div>
</div>

<style lang="postcss"></style>
