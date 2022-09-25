import { SvelteComponent } from "svelte";
import App from "../App.svelte";

export default function (id: string) {
  const app = new App({
    target: document.getElementById(id) as HTMLElement,
  });
  (window as unknown as Window & Record<string, SvelteComponent>).app = app;
}
