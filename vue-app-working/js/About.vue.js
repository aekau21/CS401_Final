const About = {
  template: `
    <div class="py-12 sm:py-24 min-h-screen flex flex-col lg:flex-row items-start justify-center gap-12 px-6">
      
      <!-- LEFT SIDE: White Card (TEXT) -->
      <div class="bg-white rounded-xl shadow-lg p-10 w-full lg:w-1/2 space-y-8">

        <!-- Small profile section at top -->
        <div class="flex items-center gap-4">
          <img src="https://pbs.twimg.com/profile_images/1774928812641271810/PpVXAHSr_400x400.jpg" 
               alt="Profile" 
               class="w-12 h-12 rounded-full object-cover shadow-sm">
          <div class="flex flex-col">
            <div class="flex items-center gap-2">
              <p class="text-gray-800 font-semibold text-lg">The Imperial Thread</p>
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Twitter_Verified_Badge.svg" 
                   alt="Verified Badge" 
                   class="w-5 h-5 object-contain">
            </div>
            <p class="text-gray-500 text-sm">@imperialthread</p>
          </div>

          <!-- Dots (3 dots menu) -->
          <div class="ml-auto pl-6 pr-2 text-gray-400 text-4xl hover:text-gray-600 cursor-pointer transition mt-1">
            ⋯
          </div>
        </div>

        <!-- About Title -->
        <h2 class="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          𝐀𝐛𝐨𝐮𝐭 𝐓𝐡𝐞 𝐈𝐦𝐩𝐞𝐫𝐢𝐚𝐥 𝐓𝐡𝐫𝐞𝐚𝐝
        </h2>

        <!-- About Description -->
        <p class="text-lg leading-8 text-gray-600">
          History was a fascinating topic, and since it had been a mandatory subject in most school curricula, it also held great importance. In this project, we aimed to provide a broad overview of the Roman Nerva-Antonine Dynasty and the Chinese Han Dynasty by offering a timeline, comparing themes, and exploring civilization structures.
        </p>

        <!-- Fancy Divider -->
        <div class="relative flex items-center my-8">
          <div class="flex-grow border-t border-gray-300"></div>
          <span class="mx-4 text-gray-500 font-semibold">༺♰༻</span>
          <div class="flex-grow border-t border-gray-300"></div>
        </div>

        <!-- Sections -->
        <div class="space-y-6 text-lg leading-8 text-gray-600">
          <div>
            <h3 class="text-2xl font-semibold text-gray-800 mb-2">𝐓𝐢𝐦𝐞𝐥𝐢𝐧𝐞</h3>
            <p>This model illustrates notable rulers and significant events in a chronological fashion.</p>
          </div>
          <div>
            <h3 class="text-2xl font-semibold text-gray-800 mb-2">𝐂𝐨𝐦𝐩𝐚𝐫𝐢𝐬𝐨𝐧𝐬</h3>
            <p>This section compares military tactics and technological innovations between the empires.</p>
          </div>
          <div>
            <h3 class="text-2xl font-semibold text-gray-800 mb-2">𝐓𝐡𝐞𝐦𝐞𝐬</h3>
            <p>This provides insights into governance, religion, culture, and economic systems across both empires.</p>
          </div>
        </div>

        <!-- Footer -->
        <div class="pt-6 mt-1 text-gray-400 text-sm space-y-2">
          <div class="flex items-center gap-3">
            <span>12:27pm • April 2025</span>
          </div>

          <div class="border-t border-gray-200 mx-6"></div>

          <div class="flex justify-center gap-10 text-gray-400 text-sm mt-8">
            <img src="https://cdn-icons-png.flaticon.com/512/5941/5941106.png" class="w-6 h-6 object-contain hover:scale-110 transition">
            <img src="https://cdn-icons-png.flaticon.com/512/1388/1388895.png" alt="Retweet" class="w-6 h-6 object-contain hover:scale-110 transition">
            <img src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" alt="Like" class="w-6 h-6 object-contain hover:scale-110 transition">
            <img src="https://www.svgrepo.com/show/361601/share-2.svg" alt="Share" class="w-6 h-6 object-contain hover:scale-110 transition">
          </div>
        </div>

      </div> <!-- end of left card -->

      <!-- RIGHT SIDE: Sticky Image -->
        <div class="w-1/2 flex justify-center sticky top-24">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Statue-Augustus_transparent_background.png" 
            alt="about Image" 
            class="rounded-lg object-cover w-full max-w-sm shadow-lg"
          >
        </div>

    </div> <!-- End of flex container -->
  `
};
