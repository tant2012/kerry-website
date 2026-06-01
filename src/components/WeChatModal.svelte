<script>
  import { asset } from '../lib/constants';

  export let open = false;
  export let onClose = () => {};

  const keydown = (event) => {
    if (event.key === 'Escape') onClose();
  };

  const backdropKeydown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') onClose();
  };
</script>

<svelte:window on:keydown={keydown} />

{#if open}
  <div class="fixed inset-0 z-[60] flex cursor-pointer items-center justify-center bg-black/75 p-6 backdrop-blur" on:click={onClose} on:keydown={backdropKeydown} role="button" tabindex="0" aria-label="Close WeChat modal">
    <div class="relative block w-full max-w-[300px] cursor-default rounded-lg border border-gold/30 bg-[#1b1a17] px-8 py-9 text-center" on:click|stopPropagation on:keydown|stopPropagation role="dialog" aria-modal="true" tabindex="-1">
      <button class="absolute right-4 top-3 text-xl leading-none text-cream/50 hover:text-cream" on:click={onClose} aria-label="Close">×</button>
      <span class="mb-4 block text-xs font-semibold uppercase tracking-[0.18em] text-gold">微信视频号</span>
      <img class="mx-auto mb-4 w-[210px] rounded" src={asset('wechat.jpg')} alt="WeChat QR code" />
      <span class="block text-sm text-cream/65">Scan to follow Kerry's WeChat channel</span>
      <span class="mt-1 block text-xs text-cream/40">Kerry入境游外宾商务接待</span>
    </div>
  </div>
{/if}
