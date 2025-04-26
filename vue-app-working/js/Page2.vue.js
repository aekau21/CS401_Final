const Page2 = {
  template: `
    <div>
      <a @click="$router.push('/')" class="text-blue-400 hover:text-blue-200 underline cursor-pointer mb-6 block">← Home</a>

      <div class="flex flex-row items-start gap-10">

        <!-- LEFT SIDE: Cards -->
        <div class="w-1/2 space-y-8 pl-25">
          <div v-for="compare in comparative" :key="compare.id" class="bg-white shadow-md rounded-lg p-6">

            <!-- Twitter-style header -->
            <div class="flex items-start justify-between">
              <div class="flex items-center gap-4">
                <img 
                  class="w-10 h-10 object-cover rounded-full" 
                  src="https://pbs.twimg.com/profile_images/1774928812641271810/PpVXAHSr_400x400.jpg" 
                  alt="Profile Icon"
                >
                <div class="flex flex-col">
                  <div class="flex items-center gap-2">
                    <p class="text-gray-800 font-semibold text-base">The Imperial Thread</p>
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Twitter_Verified_Badge.svg" 
                      alt="Verified Badge" 
                      class="w-4 h-4 object-contain"
                    >
                  </div>
                  <p class="text-gray-400 text-xs">@imperialthread</p>
                </div>
              </div>
              <div class="text-gray-400 text-3xl hover:text-gray-600 cursor-pointer transition mt-1 pr-2">
                ⋯
              </div>
            </div>

            <!-- Card Body -->
            <div class="px-4 py-6">
              <h2 class="text-lg font-bold text-gray-800 mb-2 flex items-left justify-left gap-2">
                <span>{{ compare.category }}</span>
                <span>•</span>
                <span>{{ compare.subcategory }}</span>
              </h2>
              <p class="text-gray-700 text-base">
                ─── ⋆⋅ ♰ ⋅⋆ ───
                <br>
                Han: {{ compare.han_description }}
                <br>
                Nerva: {{ compare.nerva_description }}
                <br>
                Similarities: {{ compare.similarities }}
                <br>
                Differences: {{ compare.differences }}
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

        </div> <!-- end of left side -->

        <div class="w-1/2 flex flex-col items-center sticky top-10">

  <!-- Title and description ABOVE the sticky image -->
  <div class="mb-6 text-left">
    <h2 class="text-3xl font-bold text-gray-100">
      𝐂𝐨𝐦𝐩𝐚𝐫𝐢𝐬𝐨𝐧𝐬 ⋆｡°✩
    </h2>
    <p class="text-gray-300 text-sm mt-2 max-w-xs">
      Compare military tactics and technological innovations.
    </p>
  </div>

  <!-- Sticky Image -->
  <div class="sticky top-24">
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/b/be/0_Antoninus_Pius_-_Museo_Chiaramonti_%28Vatican%29.JPG" 
      alt="Comparison Image" 
      class="rounded-lg object-cover w-full max-w-sm shadow-lg"
    >
  </div>

</div>

      </div> <!-- end of flex row -->

    </div>
  `,
  data() {
    return {
      comparative: []
    };
  },
  mounted() {
    fetch('http://localhost:5000/api/comparative')
      .then(response => response.json())
      .then(data => {
        data.sort((a, b) => a.id - b.id);
        this.comparative = data;
      })
      .catch(error => console.error('Error:', error));
  }
};
