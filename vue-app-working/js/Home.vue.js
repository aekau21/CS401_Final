const Home = {
  template: `
  <div>
    <!-- Hero Section -->
    <div class="hero relative bg-cover bg-center sm:h-64 md:h-80 lg:h-96 flex items-center justify-center text-white text-3xl font-bold rounded-lg overflow-hidden" 
        style="background-image: url('https://wallpapers.com/images/hd/historical-background-1920-x-1080-87vtgj2cw9635nwc.jpg');">
        
      <div class="z-10 text-center flex flex-col items-center">
        <div class="text-3xl md:text-5xl font-bold">
          𝐓𝐇𝐄 𝐈𝐌𝐏𝐄𝐑𝐈𝐀𝐋 𝐓𝐇𝐑𝐄𝐀𝐃 🗡
        </div>
        <div class="text-base md:text-lg font-normal mt-2 text-gray-200">
          Explore dynasties, empires, and power across the ages.
        </div>
        <div class="text-base md:text-lg font-normal mt-2 text-gray-200">
          Select below to begin your journey.
        </div>
      </div>
    </div>

    <!-- Box Container -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6 mt-10 p-6">
      <div v-for="box in boxes" :key="box.link"
           @click="$router.push(box.link)"
           class="h-64 bg-indigo-900 rounded-lg cursor-pointer overflow-hidden transform transition hover:scale-105 group relative shadow-lg flex">
        
        <!-- Title -->
        <div class="absolute inset-0 flex items-center justify-center text-lg font-bold z-10 transition duration-300 group-hover:opacity-0">
          {{ box.title }}
        </div>

        <!-- Hover Description -->
        <div class="absolute inset-0 bg-indigo-600 bg-opacity-80 text-white flex items-center justify-center text-sm text-center px-4 opacity-0 group-hover:opacity-100 transition duration-300 z-20">
          {{ box.description }}
        </div>

      </div>
    </div>

  </div>
  `,
  data() {
    return {
      boxes: [
        { title: 'About', description: 'More about this project', link: '/about' },
        { title: 'Timelines', description: 'View an indepth thread of differing ruling eras', link: '/page1' },
        { title: 'Comparisons', description: 'Compare and contrast aspects of the empires', link: '/page2' },
        { title: 'Themes', description: 'Analyze various recurring themes', link: '/page3' }
      ]
    };
  }
};
