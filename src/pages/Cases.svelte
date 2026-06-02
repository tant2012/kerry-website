<script>
import CaseCard from '../components/CaseCard.svelte';

import { cases } from '../lib/cases';


let filter = 'all';

let expandedId = '';



$: filteredCases = filter === 'all' ? cases : cases.filter((item) => item.category === filter);


</script>

<section class="px-6 pb-12 pt-36 text-center lg:px-10">
  <p class="section-label">Portfolio</p>
  <h1 class="display-1">Our Work</h1>
</section>

<div class="flex flex-wrap justify-center gap-2 px-6 pb-12">
  {#each ["all", "events", "cultural", "corporate"] as option}
    <button
      class:active={filter === option}
      class="rounded-full border border-gold/20 px-5 py-2 text-sm capitalize text-creamMuted transition hover:border-gold hover:text-cream"
      on:click={() => { filter = option; expandedId = ''; }}
    >
      {option}
    </button>
  {/each}
</div>

<section class="container-page grid gap-6 pb-20 md:grid-cols-2 lg:grid-cols-3">
  {#each filteredCases as item}
    <CaseCard
      {item}
      expanded={expandedId === item.id}
      onToggle={() => (expandedId = expandedId === item.id ? "" : item.id)}
    />
  {/each}
</section>

<section
  class="border-t border-gold/15 bg-forest px-6 py-20 text-center lg:px-10"
>
  <p class="section-label">Let's Talk</p>
  <h2 class="display-2 mb-2">Ready to plan yours?</h2>
  <p class="mb-7 text-creamMuted">
    Share your brief. We'll come back with a proposal.
  </p>
  <a class="btn btn-gold" href="/services">Explore Services</a>
</section>

<style>
  .active {
    border-color: #b89558;
    background: #b89558;
    color: #131210;
  }
</style>
