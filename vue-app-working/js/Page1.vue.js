const Page1 = {
  template: `
    <div>
      <a @click="$router.push('/')" class="text-blue-400 hover:text-blue-200 underline cursor-pointer">← Home</a>
      
      <div class="bg-white shadow-md rounded-lg p-4 mb-6" v-for="time in timeline" :key="timeline.id">
        <img 
  class="w-16 h-16 object-cover rounded-full mx-auto my-2" 
  src="https://png.pngtree.com/png-vector/20231031/ourmid/pngtree-golden-wreath-laurel-wreath-white-background-png-image_10410085.png" 
  alt="Card Icon"
>
          <div class="px-6 py-4">
           <h2 class="text-lg font-bold text-gray-800 mb-2">{{time.dates_ruled}}</h2>
            <p class="text-gray-700 text-base">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
              <div class="px-6 py-2">
              <a href="#" class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Read More</a>
            </div>
          </div>
      </div>
    </div>
  `,
  data() {
    return {
      timeline: []
    };
  },
  mounted() {
    // GET request
fetch('http://localhost:5000/api/timeline')
.then(response => response.json())
.then(data => {
  data.sort((a, b) => {
    // Helper function to parse a start year properly
    function parseYear(dateStr) {
      let [rangePart] = dateStr.split('–'); // take the first part before the dash
      let year = parseInt(rangePart.replace(/[^\d]/g, '')); // remove non-digits, just get the number
      let isBCE = dateStr.toUpperCase().includes('BCE'); // check if it's BCE
      return isBCE ? -year : year; // BCE dates are negative for sorting purposes
    }

    const startA = parseYear(a.dates_ruled);
    const startB = parseYear(b.dates_ruled);

    return startA - startB; // ascending order
  });
  this.timeline = data;
})
.catch(error => console.error('Error:', error));
  }
};
