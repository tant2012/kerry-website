<script>
  import { whatsappUrl } from '../lib/constants';
  import WhatsAppIcon from './WhatsAppIcon.svelte';
</script>

<a href={whatsappUrl} target="_blank" rel="noopener" aria-label="WhatsApp" class="fixed bottom-7 right-7 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] shadow-[0_4px_20px_rgba(37,211,102,.35)] transition hover:scale-105">
  <span class="h-7 w-7 fill-white"><WhatsAppIcon /></span>
</a>
