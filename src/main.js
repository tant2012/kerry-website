import './styles.css';
import { mount } from 'svelte';
import App from './App.svelte';
import { writable } from 'svelte/store';

export const currentUrl = writable(new URL(window.location.href));

// Update the store whenever the user navigates
window.addEventListener('popstate', () => {
    currentUrl.set(new URL(window.location.href));
});

const app = mount(App, {
  target: document.getElementById('app')
});

export default app;
