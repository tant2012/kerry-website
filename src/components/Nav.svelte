<script>
  import { navItems, whatsappUrl } from '../lib/constants';
  import WhatsAppIcon from './WhatsAppIcon.svelte';

  export let currentPath = '/';

  let menuOpen = false;
  let hidden = false;
  let lastY = 0;

  const normalize = (href) => (href === '/' ? '/' : href.replace('.html', ''));
  const active = (href) => normalize(currentPath) === normalize(href);

  const handleScroll = () => {
    const y = window.scrollY;
    hidden = y > lastY && y > 80;
    if (hidden) menuOpen = false;
    lastY = y;
  };
</script>

<svelte:window on:scroll={handleScroll} />

<nav class:nav-hidden={hidden} class="fixed inset-x-0 top-0 z-50 h-[var(--nav-h)] border-b border-gold/15 bg-bg/95 px-6 backdrop-blur transition-transform duration-300 lg:px-10">
<div class="mx-auto grid h-full max-w-7xl grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center gap-6">
    <a href="/" class="flex h-full items-center font-display text-[1.35rem] font-medium leading-none tracking-wide">
      Lux<span class="text-gold">China</span>Compass
    </a>

    <div class="hidden h-full items-center gap-8 md:flex">
      {#each navItems as item}
        <a class:active={active(item.href)} class="flex h-full items-center text-xs font-medium uppercase leading-none tracking-[0.1em] text-creamMuted transition hover:text-gold" href={item.href}>
          {item.label}
        </a>
      {/each}
    </div>

    <a href={whatsappUrl} target="_blank" rel="noopener" class="hidden h-10 items-center justify-self-end rounded-full border border-gold px-4 text-xs leading-none text-gold transition hover:bg-gold hover:text-bg md:inline-flex">
      <span class="h-4 w-4 fill-current"><WhatsAppIcon /></span>
      <span class="ml-1.5">WhatsApp Us</span>
    </a>

    <button class="flex flex-col gap-1.5 justify-self-end md:hidden" aria-label="Menu" on:click={() => (menuOpen = !menuOpen)}>
      <span class="h-0.5 w-6 bg-cream"></span>
      <span class="h-0.5 w-6 bg-cream"></span>
      <span class="h-0.5 w-6 bg-cream"></span>
    </button>
  </div>
</nav>

{#if menuOpen}
  <div class="fixed inset-x-0 top-[var(--nav-h)] z-40 bg-bg/95 px-8 py-7 backdrop-blur md:hidden">
    <div class="flex flex-col gap-5">
      {#each navItems as item}
        <a class:active={active(item.href)} class="text-sm font-medium uppercase tracking-[0.1em] text-creamMuted active:text-gold" href={item.href} on:click={() => (menuOpen = false)}>
          {item.label}
        </a>
      {/each}
      <a href={whatsappUrl} target="_blank" rel="noopener" class="btn btn-gold w-fit"> <span class="h-4 w-4 fill-current"><WhatsAppIcon /></span>WhatsApp</a>
    </div>
  </div>
{/if}

<style>
  .nav-hidden {
    transform: translateY(-100%);
  }

  .active {
    color: #b89558;
  }
</style>
