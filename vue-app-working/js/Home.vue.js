const Home = {
  template: `
  <div>
    <!-- Hero Section -->
    <div class="hero relative bg-cover bg-center sm:h-64 md:h-80 lg:h-96 flex items-center justify-center text-white text-3xl font-bold" 
        style="background-image: url('https://wallpapercat.com/w/full/3/2/1/1324871-1920x1200-desktop-hd-history-background-image.jpg');">
        
        <!-- Hero Text -->
        <div class="z-10">
        The Imperial Thread
        </div>
    </div>
        <!-- Box Container -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl px-4">
        <div v-for="box in boxes" :key="box.link"
            @click="$router.push(box.link)"
            style="height: 24rem;"
            class="bg-blue-600 rounded-lg cursor-pointer overflow-hidden transform transition hover:scale-105 group relative shadow-lg flex">
        
        <!-- Title -->
        <div class="absolute inset-0 flex items-center justify-center text-xl font-bold z-10 transition duration-300 group-hover:opacity-0">
            {{ box.title }}
        </div>
    
        <!-- Hover Description -->
        <div class="absolute inset-0 bg-black bg-opacity-80 text-white flex items-center justify-center text-sm text-center px-4 opacity-0 group-hover:opacity-100 transition duration-300 z-20">
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
        { title: 'Themes', description: 'Check out the third page', link: '/page3' }
      ]
    };
  }
};