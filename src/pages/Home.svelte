<script>
  import { asset, whatsappUrl } from '../lib/constants';
  import WhatsAppIcon from '../components/WhatsAppIcon.svelte';

  const trust = ['🇨🇳 National Carbon Center', '🇷🇺 Gazprom Media', '🇨🇳 Tsinghua University SEM', '🇨🇳 Fudan University EMBA', '🇶🇦 UHNW Families · Qatar', '🇿🇦 Private Client · South Africa', '🇮🇹 Global Impact Teams', '🇳🇱 Netherlands Consulate · Shanghai'];

  const services = [
    ['Private Groups & Families', 'Private Events & Celebrations', 'Exclusive venues, full production, bilingual coordination. From intimate dinners to 200-guest galas.', 'Index/homepage-events.jpg', '/services#private-events'],
    ['International Groups', 'Cultural Experiences', 'Adventures and hutong immersions, designed around your group and interests.', 'Index/homepage-cultural.jpg', '/services#cultural'],
    ['Companies & Institutions', 'Corporate & Conference Support', 'Bilingual coordination for VIP groups and conferences: interpretation, transport, and multi-city logistics.', 'Index/homepage-corporate.JPG', '/services#corporate']
  ];
</script>

<section class="relative flex min-h-[600px] h-screen items-end overflow-hidden">
  <video class="absolute inset-0 h-full w-full object-cover" autoplay muted loop playsinline preload="auto" >
    <source src={asset('Index/hero.mp4')} type="video/mp4" />
  </video>
  <div class="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/40 to-bg/10"></div>
  <div class="relative z-10 max-w-xl px-6 pb-20 lg:pl-16">
    <h1 class="mb-4 font-display text-[clamp(2rem,3.5vw,3rem)] leading-tight">We make China work <em>for international clients.</em></h1>
    <p class="subline mb-7 text-base">From exclusive gala dinners to corporate conferences, we source the venues, build the team, and orchestrate every detail. English-managed. Across China.</p>
    <div class="flex flex-wrap gap-4">
      <a class="btn btn-gold" href={whatsappUrl} target="_blank" rel="noopener"><span class="h-5 w-5 fill-current"><WhatsAppIcon /></span>WhatsApp</a>
      <a class="btn btn-outline" href="/services">What We Do →</a>
    </div>
  </div>
</section>

<section class="border-y border-gold/10 bg-forest/60 px-6 py-7 lg:px-10">
  <div class="mx-auto flex max-w-7xl flex-wrap items-center gap-4 lg:gap-7">
    <span class="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Our Clients</span>
    {#each trust as item}
      <span class="rounded-full border border-gold/20 px-3.5 py-1.5 text-xs text-creamMuted">{item}</span>
    {/each}
  </div>
</section>

<section class="section-pad container-page">
  <div class="mb-12 text-center">
    <p class="section-label">What We Do</p>
    <h2 class="display-2">Three things, <em>done well.</em></h2>
  </div>
  <div class="grid gap-7 md:grid-cols-3">
    {#each services as item}
      <article class="panel overflow-hidden transition hover:-translate-y-1 hover:border-gold/35">
        <div class="relative h-64">
          <img class="h-full w-full object-cover" src={asset(item[3])} alt={item[1]} />
          <span class="absolute left-4 top-4 border border-gold/50 bg-black/80 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-gold">{item[0]}</span>
        </div>
        <div class="p-7">
          <h3 class="display-3 mb-3">{item[1]}</h3>
          <p class="mb-5 text-sm leading-7 text-creamMuted">{item[2]}</p>
          <a class="text-xs font-semibold uppercase tracking-widest text-gold hover:text-goldLight" href={item[4]}>Learn More →</a>
        </div>
      </article>
    {/each}
  </div>
</section>

<section class="border-y border-gold/15 bg-forestMid px-6 py-16 text-center lg:px-10">
  <div class="mx-auto grid max-w-4xl gap-10 md:grid-cols-3">
    {#each [['100+', 'Projects Delivered'], ['12+', 'Cities Across China'], ['8', 'Countries Served']] as stat}
      <div>
        <div class="font-display text-[clamp(2.5rem,5vw,4rem)] font-light leading-none text-gold">{stat[0]}</div>
        <div class="mt-3 text-xs font-medium uppercase tracking-widest text-creamMuted">{stat[1]}</div>
      </div>
    {/each}
  </div>
</section>

<section class="section-pad container-page">
  <div class="mb-12 text-center">
    <p class="section-label">Client Words</p>
    <h2 class="display-2">What our clients say</h2>
  </div>
  <div class="mx-auto grid max-w-5xl gap-7 md:grid-cols-2">
    <blockquote class="panel p-10 font-display text-xl italic leading-8">Kerry provided exceptional strategic support for our business. Her ability to anticipate needs and propose efficient, well-considered solutions made a tangible difference.<p class="mt-6 font-body text-xs not-italic tracking-wider text-gold">— Director, Bridge Training Group, Italy</p></blockquote>
    <blockquote class="panel p-10 font-display text-xl italic leading-8">Lux China Compass transformed a rough idea into a seamless and deeply personal journey. Every detail was thoughtfully curated.<p class="mt-6 font-body text-xs not-italic tracking-wider text-gold">— Private Client, Amsterdam, Netherlands</p></blockquote>
  </div>
</section>

<section class="section-pad bg-forest">
  <div class="container-page grid items-center gap-12 md:grid-cols-[1fr_420px]">
    <div>
      <p class="section-label">Who is behind this?</p>
      <h2 class="display-2 mb-6">Kerry Kong</h2>
      <p class="mb-5 max-w-2xl text-creamMuted">Founder, lead coordinator, and Shanghai-based event producer with 6+ years delivering premium events and cultural programmes across China.</p>
      <a class="btn btn-outline" href="/about">About Kerry →</a>
    </div>
    <img class="h-[500px] w-full rounded object-cover" src={asset('Index/kerry-teaser.jpg')} alt="Kerry Kong" />
  </div>
</section>

<section class="section-pad container-page text-center">
  <p class="section-label">Get in Touch</p>
  <h2 class="display-2 mb-4">Have a project in China? <em>Let's talk.</em></h2>
  <p class="subline mx-auto mb-8">Tell us your vision. We'll design the experience around it.</p>
  <div class="flex flex-wrap justify-center gap-4">
    <a class="btn btn-gold" href={whatsappUrl} target="_blank" rel="noopener">WhatsApp Kerry</a>
    <a class="btn btn-outline" href="mailto:kerry@luxchinacompass.com">Send an Email</a>
  </div>
</section>
