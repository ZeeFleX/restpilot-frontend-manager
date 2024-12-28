import type { INotification } from '$lib/types';
import { toast } from 'svelte-sonner';

class UIStore {
	async notify(data: INotification) {
		toast(data.message, {
			duration: 5000,
			position: 'top-center',
			//@ts-ignore
			type: data.type || 'info'
		});
	}
}

export default new UIStore();
