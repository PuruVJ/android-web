import { readable } from 'svelte/store';

export const time = readable(new Date(), (set) => {
  const timer = setInterval(() => set(new Date()), 1000);

  return () => clearInterval(timer);
});
