import App from "./App.svelte";

const app = new App({
  target: document.getElementById("app") as HTMLElement,
});

(window as Window & Record<string, any>).app = app;

export default app;
