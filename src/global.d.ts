/// <reference types="svelte" />
/// <reference types="vite/client" />

declare namespace svelte.JSX {
  interface HTMLAttributes<T> {
    onswipe?: (
      e: CustomEvent<{ direction: 'top' | 'right' | 'bottom' | 'left'; target: HTMLElement }>
    ) => void;
  }
}
