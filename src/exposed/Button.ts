import { SvelteComponent } from "svelte";
import Button from "../Button.svelte";

export default function (id: string) {
  const button = new Button({
    target: document.getElementById(id) as HTMLElement,
  });
  (window as unknown as Window & Record<string, SvelteComponent>).button =
    button;
}
