const Home = {
  template: `
  <div>
    <!-- Hero Section -->
    <div class="hero relative bg-cover bg-center sm:h-64 md:h-80 lg:h-96 flex items-center justify-center text-white text-3xl font-bold rounded-lg overflow-hidden" 
        style="background-image: url('https://wallpapers.com/images/hd/historical-background-1920-x-1080-87vtgj2cw9635nwc.jpg');">
        
        <!-- Hero Text -->
        <div class="z-10 text-center flex flex-col items-center">
    
    <!-- Title -->
    <div class="text-3xl md:text-5xl font-bold">
      𝐓𝐇𝐄 𝐈𝐌𝐏𝐄𝐑𝐈𝐀𝐋 𝐓𝐇𝐑𝐄𝐀𝐃 🗡
    </div>
    
    <!-- Description below title -->
    <div class="text-base md:text-lg font-normal mt-2 text-gray-200">
      Explore dynasties, empires, and power across the ages.
    </div>
    <!-- Description below title -->
    <div class="text-base md:text-lg font-normal mt-2 text-gray-200">
      Select below to begin your journey.
    </div>

  </div>
    </div>
        <!-- Box Container -->
    <!-- Box Container -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl px-4 mt-6 shadow-md p-10">
        <div v-for="box in boxes" :key="box.link"
            @click="$router.push(box.link)"
            style="height: 24rem;"
            class="bg-gray-800 rounded-lg cursor-pointer overflow-hidden transform transition hover:scale-105 group relative shadow-lg flex">
        <!-- Title -->
        <div class="absolute inset-0 flex items-center justify-center text-xl font-bold z-10 transition duration-300 group-hover:opacity-0">
            {{ box.title }}
        </div>
    
        <!-- Hover Description -->
        <div class="absolute inset-0 bg-gray-600 bg-opacity-80 text-white flex items-center justify-center text-sm text-center px-4 opacity-0 group-hover:opacity-100 transition duration-300 z-20">
            {{ box.description }}
        </div>
        </div>
    </div>
  </div>

  `,
  data() {
    return {
      boxes: [
        { title: 'Timelines', description: 'Go to the first page', link: '/page1' },
        { title: 'Comparisons', description: 'Explore the second page', link: '/page2' },
        { title: 'Themes', description: 'Check out the third page', link: '/page3', Image: 'https://lh3.googleusercontent.com/proxy/qyTPPZZGWoUkiEYUCzwbbc3r60kHJAl0DjmX88JslGkmsP8SROfNZuy-DRGIbFBmgeu3IdWmmj9JBUPZjCa3qZjog15m5-25sETt977QJmfilFYDPgxoLtZ8xZvDJAgdYQ'}
      ]
    };
  }
};