<script>
  import { asset, whatsappUrl } from '../lib/constants';
  import WhatsAppIcon from './WhatsAppIcon.svelte';

  export let item;
  export let expanded = false;
  export let onToggle = () => {};

  const images = (item) => item.gallery ?? item.groups?.flatMap((group) => group.images) ?? [];
</script>

<article class:expanded class="overflow-hidden rounded-md border border-gold/20 bg-[#1b1a17] transition">
  <button class="block w-full text-left" on:click={onToggle}>
    <div class="relative h-60 overflow-hidden">
      <img class="h-full w-full object-cover" src={`https://mtcbguwohuzkivbplupb.supabase.co/storage/v1/object/public/LuxChinaGallery/${(item.cover)}`} alt={item.title} />
      <div class="absolute bottom-3 left-3 flex gap-2 text-[11px] font-medium">
        <span class="rounded bg-bg/80 px-2.5 py-1 text-cream">{item.city}</span>
        <span class="rounded bg-gold px-2.5 py-1 text-bg">{item.type}</span>
      </div>
      <span class="absolute bottom-3 right-3 rounded-full border border-gold/40 bg-bg/75 px-3 py-1 text-[11px] uppercase tracking-wider text-creamMuted">
        View gallery
      </span>
    </div>
    <div class="p-6">
      <div class="mb-3 inline-flex rounded-full border border-gold px-3 py-1 text-[11px] tracking-wide text-gold">Available to Book</div>
      <h3 class="display-3 mb-1">{item.title}</h3>
      <p class="mb-3 text-xs text-gold">{item.client}</p>
      <p class="mb-5 text-sm leading-7 text-creamMuted">{item.description}</p>
      <span class="text-xs font-semibold uppercase tracking-widest text-gold">Discuss this experience →</span>
    </div>
  </button>

  {#if expanded}
    <div class="border-t border-gold/15">
      {#if item.groups}
        <div class="space-y-7 p-5">
          {#each item.groups as group}
            <section>
              <p class="mb-2 text-[11px] uppercase tracking-[0.18em] text-gold">{group.label}</p>
              <div class="gallery-grid">
                {#each group.images as image}
                  <img class={image[0]} src={`https://mtcbguwohuzkivbplupb.supabase.co/storage/v1/object/public/LuxChinaGallery/${image[1]}`} alt={item.title} style:object-position={image[2] ?? 'center'} />
                {/each}
              </div>
            </section>
          {/each}
        </div>
      {:else}
        <div class="gallery-grid p-5">
          {#each images(item) as image}
            <img class={image[0]} src={`https://mtcbguwohuzkivbplupb.supabase.co/storage/v1/object/public/LuxChinaGallery/${image[1]}`} alt={item.title} style:object-position={image[2] ?? 'center'} />
          {/each}
        </div>
      {/if}

      <div class="px-6 pb-7 text-center">
        <p class="mx-auto mb-5 max-w-5xl text-sm leading-7 text-creamMuted">{item.details}</p>
        <div class="flex flex-wrap justify-center gap-3">
          <a class="btn btn-gold" href={whatsappUrl} target="_blank" rel="noopener">
            <span class="h-4 w-4 fill-current"><WhatsAppIcon /></span>
            WhatsApp Us
          </a>
          <button class="btn rounded-full border border-gold/25 text-creamMuted hover:border-gold hover:text-cream" on:click={onToggle}>Close</button>
        </div>
      </div>
    </div>
  {/if}
</article>

<style>
  .expanded {
    grid-column: 1 / -1;
  }

  .expanded > button > div:first-child {
    height: 360px;
  }

  .expanded > button > div:nth-child(2) {
    display: none;
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-auto-rows: 220px;
    grid-auto-flow: dense;
    gap: 10px;
  }

  .gallery-grid img {
    height: 100%;
    width: 100%;
    border-radius: 3px;
    object-fit: cover;
  }

  .gallery-grid .landscape {
    grid-column: span 2;
  }

  .gallery-grid .portrait {
    grid-row: span 2;
  }

  @media (max-width: 768px) {
    .gallery-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-auto-rows: 180px;
    }
  }

  @media (max-width: 480px) {
    .gallery-grid {
      grid-template-columns: 1fr;
      grid-auto-rows: 260px;
    }

    .gallery-grid .landscape,
    .gallery-grid .portrait {
      grid-column: span 1;
      grid-row: span 1;
    }
  }
</style>
