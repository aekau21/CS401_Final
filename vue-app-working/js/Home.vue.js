const Home = {
  template: `
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

  `,
  data() {
    return {
      boxes: [
        { title: 'Page 1', description: 'Go to the first page', link: '/page1' },
        { title: 'Page 2', description: 'Explore the second page', link: '/page2' },
        { title: 'Page 3', description: 'Check out the third page', link: '/page3' }
      ]
    };
  }
};
