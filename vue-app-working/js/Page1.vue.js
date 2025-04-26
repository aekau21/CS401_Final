const Page1 = {
  template: `
    <div>
      <a @click="$router.push('/')" class="text-blue-400 hover:text-blue-200 underline cursor-pointer mb-6 block">← Home</a>

      <div class="flex flex-row items-start gap-10">

        <!-- LEFT SIDE: Title, Desc ABOVE Sticky Image -->
<div class="w-1/2 flex flex-col items-center sticky top-10">

  <!-- Title and description ABOVE the sticky image -->
  <div class="mb-6 text-left">
    <h2 class="text-3xl font-bold text-gray-100">
      𝐓𝐢𝐦𝐞𝐥𝐢𝐧𝐞 ⋆｡°✩
    </h2>
    <p class="text-gray-300 text-sm mt-2 max-w-xs">
      Read up on notable rulers and significant events with historical context for different periods within the Roman Empire and Chinese dynasties.
    </p>
  </div>

  <!-- Sticky Image -->
  <div class="sticky top-24">
    <img 
      src="https://pepchina.com/wp-content/uploads/2022/11/Han-Wu-Di-817x1024.jpg" 
      alt="Comparison Image" 
      class="rounded-lg object-cover w-full max-w-sm shadow-lg"
    >
  </div>

</div>


        <!-- RIGHT SIDE: Timeline Cards -->
        <div class="w-1/2 space-y-8 pr-6">
          <div v-for="time in timeline" :key="time.id" class="bg-white shadow-md rounded-lg p-6">

            <!-- Twitter-style header -->
            <div class="flex items-start justify-between">
              <div class="flex items-center gap-4">
                <img class="w-10 h-10 object-cover rounded-full" 
                     src="https://pbs.twimg.com/profile_images/1774928812641271810/PpVXAHSr_400x400.jpg" 
                     alt="Profile Icon">
                <div class="flex flex-col">
                  <div class="flex items-center gap-2">
                    <p class="text-gray-800 font-semibold text-base">The Imperial Thread</p>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Twitter_Verified_Badge.svg" 
                         alt="Verified Badge" 
                         class="w-4 h-4 object-contain">
                  </div>
                  <p class="text-gray-400 text-xs">@imperialthread</p>
                </div>
              </div>
              <div class="text-gray-400 text-3xl hover:text-gray-600 cursor-pointer transition mt-1 pr-2">⋯</div>
            </div>

            <!-- Card body -->
            <div class="px-4 py-6">
              <h2 class="text-lg font-bold text-gray-800 mb-2 flex items-left justify-left gap-2">
                <span>{{ time.dates_ruled }}</span>
                <span>•</span>
                <span>{{ time.dynasty }}</span>
              </h2>
              <p class="text-gray-700 text-base">
                ─── ⋆⋅ ♰ ⋅⋆ ───
                <br>
                Emperor: {{ time.emperor_name }}
                <br>
                Treaties: {{ time.treaties }}
                <br>
                Wars: {{ time.wars }}
                <br>
                Advancements: {{ time.notable_events }}
              </p>
            </div>

            <!-- Footer -->
            <div class="pt-6 text-gray-400 text-sm space-y-4">
              <div class="flex items-center gap-2 justify-start pl-4">
                <span>12:27 PM • April 2025</span>
              </div>
              <div class="border-t border-gray-200 mx-4"></div>
              <div class="flex justify-center gap-12 text-gray-400 mt-4">
                <img src="https://cdn-icons-png.flaticon.com/512/5941/5941106.png" alt="Comment" class="w-6 h-6 object-contain hover:scale-110 transition cursor-pointer">
                <img src="https://cdn-icons-png.flaticon.com/512/1388/1388895.png" alt="Retweet" class="w-6 h-6 object-contain hover:scale-110 transition cursor-pointer">
                <img src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" alt="Like" class="w-6 h-6 object-contain hover:scale-110 transition cursor-pointer">
                <img src="https://www.svgrepo.com/show/361601/share-2.svg" alt="Share" class="w-6 h-6 object-contain hover:scale-110 transition cursor-pointer">
              </div>
            </div>

          </div> <!-- end of v-for card -->
        </div> <!-- end of right side cards -->

      </div> <!-- end flex -->
    </div>
  `,
  data() {
    return {
      timeline: []
    };
  },
  mounted() {
    fetch('http://localhost:5000/api/timeline')
      .then(response => response.json())
      .then(data => {
        data.sort((a, b) => {
          function parseYear(dateStr) {
            let [rangePart] = dateStr.split('–');
            let year = parseInt(rangePart.replace(/[^\d]/g, ''));
            let isBCE = dateStr.toUpperCase().includes('BCE');
            return isBCE ? -year : year;
          }
          const startA = parseYear(a.dates_ruled);
          const startB = parseYear(b.dates_ruled);
          return startA - startB;
        });
        this.timeline = data;
      })
      .catch(error => console.error('Error:', error));
  }
};
