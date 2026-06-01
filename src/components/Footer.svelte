<script>
  export let onOpenWeChat = () => {};
</script>

<footer class="border-t border-gold/10 bg-[#0d0c0a] px-6 py-12 lg:px-10">
  <div class="mx-auto mb-12 grid max-w-7xl gap-10 md:grid-cols-3">
    <div>
      <div class="font-display text-xl font-medium">Lux<span class="text-gold">China</span>Compass</div>
      <p class="mt-4 text-sm leading-7 text-creamMuted">Event production and cultural experiences for international clients across China.</p>
      <p class="mt-3 text-xs leading-6 text-creamMuted/50">上海慧利佳商务咨询有限公司<br />Shanghai Huilijia Business Consulting Co. Ltd</p>
      <div class="mt-5 flex flex-wrap gap-3">
        <a class="border border-gold/25 px-3 py-1.5 text-xs text-creamMuted hover:border-gold hover:text-gold" href="https://www.xiaohongshu.com/user/profile/KK_15903680743" target="_blank" rel="noopener">小红书 Xiaohongshu</a>
        <button class="border border-gold/25 px-3 py-1.5 text-xs text-creamMuted hover:border-gold hover:text-gold" on:click={onOpenWeChat}>微信 WeChat</button>
      </div>
    </div>
    <div>
      <h4 class="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold">Services</h4>
      <div class="flex flex-col gap-2 text-sm text-creamMuted">
        <a href="/services#private-events" class="hover:text-gold">Private Events</a>
        <a href="/services#cultural" class="hover:text-gold">Cultural Experiences</a>
        <a href="/services#corporate" class="hover:text-gold">Corporate Support</a>
      </div>
    </div>
    <div>
      <h4 class="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold">Navigate</h4>
      <div class="flex flex-col gap-2 text-sm text-creamMuted">
        <a href="/" class="hover:text-gold">Home</a>
        <a href="/work" class="hover:text-gold">Our Work</a>
        <a href="/services" class="hover:text-gold">Services</a>
        <a href="/about" class="hover:text-gold">About Kerry</a>
      </div>
    </div>
  </div>
  <div class="mx-auto flex max-w-7xl flex-wrap justify-between gap-3 border-t border-white/5 pt-6 text-xs text-creamMuted/45">
    <p>© 2026 LuxChinaCompass · 上海慧利佳商务咨询有限公司</p>
    <p>Shanghai, China · info@luxchinacompass.com</p>
  </div>
</footer>
