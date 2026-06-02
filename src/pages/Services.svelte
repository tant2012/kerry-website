<script>
  import { asset, whatsappUrl } from '../lib/constants';

  const sectors = [
    {
      id: 'private-events',
      hash: 'events',
      label: 'Private Groups & Families',
      title: 'Private Events & Celebrations',
      image: 'services/A9A0D77F-3180-4038-A289-68C3562AB271.jpg',
      lead: 'Exclusive venues, full production, bilingual coordination. We source the location, assemble the team, and run the event with an English-speaking team on-site from start to finish.',
      cta: 'See real events we have produced →',
      link: '/cases?hash=events',
      pillars: [
        ['Venue & Production', 'Exclusive locations across China and full technical production: sound, lighting, staging. From intimate dinners to 200-guest galas.'],
        ['Catering & Floral Design', 'Private chefs, custom menus, wine and cocktail programmes, floral centrepieces designed for the venue and the occasion.'],
        ['Entertainment & Performances', 'Face-changing opera, guzheng, lion dance, DJs, pipa, calligraphy artists, and live performances selected for your group.']
      ]
    },
    {
      id: 'cultural',
      hash: 'cultural',
      label: 'International Groups',
      title: 'Cultural Experiences',
      image: 'services/ho-04.jpg',
      lead: 'Private sessions with nationally recognised masters at locations tourists never reach. For groups who want to understand China, not just see it.',
      cta: 'See real cultural projects we have run →',
      link: '/cases?hash=cultural',
      alt: true,
      pillars: [
        ['Private Master Sessions', 'Tea masters, calligraphy artists, martial arts instructors, and traditional craft experts with exclusive access to restricted cultural venues, including after-hours and private use, arranged through our established institutional partnerships.'],
        ['Local Immersion', 'Market tours, tea village visits, dumpling-making in private kitchens, and hands-on experiences that reveal how locals actually live.'],
        ['Custom Itinerary Design', 'Full-day or multi-day cultural programmes built around your group’s interests. From 2-person private sessions to 200-guest galas, across any Chinese city.']
      ]
    },
    {
      id: 'corporate',
      hash: 'corporate',
      label: 'Companies & Institutions',
      title: 'Corporate & Conference Support',
      image: 'services/WechatIMG19.jpg',
      lead: 'Bilingual coordination for international corporate visits and conferences in China. Airport reception through final departure: you focus on the business, we handle the logistics.',
      cta: 'See real corporate projects we have run →',
      link: '/cases?hash=corporate',
      pillars: [
        ['Multi-City Logistics', 'Chauffeured vehicles, VIP airport reception, inter-city transfers, and hotel coordination across any number of Chinese cities.'],
        ['Simultaneous Interpretation', 'Professional interpreters for conferences, meetings, and site visits in English, French, Spanish, Arabic, and Russian.'],
        ['On-Site Coordination', 'A bilingual coordinator present throughout, managing suppliers, solving problems in real time, and keeping your schedule on track.']
      ]
    }
  ];



</script>

<section class="px-6 pb-16 pt-40 text-center lg:px-10">
  <p class="section-label">Services</p>
  <h1 class="display-1 mb-4">Three sectors. Locally mastered.</h1>
  <p class="subline mx-auto">What we deliver, at a glance. Real examples on <a class="border-b border-gold text-gold" href="/cases">Our Work</a>.</p>
</section>

{#each sectors as sector, index}
  <section id={sector.id} class:alt={sector.alt} class="section-pad">
    <div class="container-page">
      <div class:md:[direction:rtl]={index === 1} class="mb-14 grid items-center gap-12 md:grid-cols-2">
        <img class="h-[420px] w-full rounded object-cover md:[direction:ltr]" src={`https://mtcbguwohuzkivbplupb.supabase.co/storage/v1/object/public/LuxChinaGallery/${(sector.image)}`} alt={sector.title} />
        <div class="md:[direction:ltr]">
          <p class="section-label">{sector.label}</p>
          <h2 class="display-2 mb-5">{sector.title}</h2>
          <p class="mb-6 leading-8 text-creamMuted">{sector.lead}</p>
          <a class="text-xs font-semibold uppercase tracking-widest text-gold hover:text-goldLight" href={sector.link}>{sector.cta}</a>
        </div>
      </div>
      <div class="grid gap-8 md:grid-cols-3">
        {#each sector.pillars as pillar}
          <div class="border-l-2 border-gold pl-6">
            <h3 class="mb-3 text-2xl">{pillar[0]}</h3>
            <p class="text-sm leading-7 text-creamMuted">{pillar[1]}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>
{/each}

<section class="section-pad border-t border-gold/15 bg-forest text-center">
  <div class="container-page">
    <p class="section-label">Get in Touch</p>
    <h2 class="display-2 mb-3">Tell us what you have in mind.</h2>
    <p class="subline mx-auto mb-8">Anything above can be customised, combined, or scaled.</p>
    <div class="flex flex-wrap justify-center gap-4">
      <a class="btn btn-gold" href={whatsappUrl} target="_blank" rel="noopener">WhatsApp Kerry</a>
      <a class="btn btn-outline" href="mailto:kerry@luxchinacompass.com">Send an Email</a>
    </div>
  </div>
</section>

<style>
  .alt {
    background: #1a2f25;
  }
</style>
  