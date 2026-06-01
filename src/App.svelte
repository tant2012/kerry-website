<script>
  import About from './pages/About.svelte';
  import Home from './pages/Home.svelte';
  import Services from './pages/Services.svelte';
  import Cases from './pages/Cases.svelte';
  import Footer from './components/Footer.svelte';
  import FloatingWhatsApp from './components/FloatingWhatsApp.svelte';
  import Nav from './components/Nav.svelte';
  import WeChatModal from './components/WeChatModal.svelte';

  let path = window.location.pathname;
  let showWeChat = false;

  const routes = {
    '/': Home,
    '/index.html': Home,
    '/cases': Cases,
    '/cases.html': Cases,
    '/services': Services,
    '/services.html': Services,
    '/about': About,
    '/about.html': About
  };

  const navigate = (event) => {
    const anchor = event.target.closest('a[href]');
    if (!anchor) return;

    const url = new URL(anchor.href);
    const isInternal = url.origin === window.location.origin;
    if (!isInternal || anchor.target || url.hash) return;

    event.preventDefault();
    history.pushState({}, '', url.pathname);
    path = window.location.pathname;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  $: Page = routes[path] ?? Home;

  window.onpopstate = () => {
    path = window.location.pathname;
  };
</script>

<svelte:window on:click={navigate} />

<Nav currentPath={path} />
<main>
  <svelte:component this={Page} />
</main>
<Footer onOpenWeChat={() => (showWeChat = true)} />
<FloatingWhatsApp />
<WeChatModal open={showWeChat} onClose={() => (showWeChat = false)} />
