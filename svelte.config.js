import { vitePreprocess } from '@astrojs/svelte';
import { getViteConfig } from 'astro/config';

export default getViteConfig({
  preprocess: vitePreprocess(),
})
