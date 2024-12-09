import { browser } from '$app/environment';
import type { IUser } from '$lib/shared/types/user';
import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

class UserStore {
    currentUser: Writable<IUser | null> = writable(null);
};


export default new UserStore();


