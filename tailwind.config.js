export default {
  content: ['./index.html', './src/**/*.{svelte,js}'],
  theme: {
    extend: {
      colors: {
        bg: '#131210',
        gold: '#b89558',
        goldLight: '#d4b478',
        forest: '#1a2f25',
        forestMid: '#243d2f',
        cream: '#f8f5ef',
        creamMuted: '#c8c4bc'
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['DM Sans', 'sans-serif']
      }
    }
  },
  plugins: []
};
