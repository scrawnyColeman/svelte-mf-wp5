declare module "*.svelte" {
  import { SvelteComponent } from "svelte";
  const Component: typeof SvelteComponent;
  export default Component;
}
