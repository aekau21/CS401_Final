const Contact = {
  template: `
    <div class="py-16 sm:py-24 bg-gray-900 min-h-screen flex flex-col items-center px-6">
      
      <!-- Title -->
      <h1 class="text-4xl font-bold mb-10 text-center text-white">
        Our team ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧
      </h1>

      <!-- Team Cards -->
      <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3 w-full max-w-6xl">
        <li v-for="person in people" :key="person.name">
          <div class="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 transform transition">


            <img class="size-24 rounded-full ring-2 ring-indigo-400 mb-4 object-cover" :src="person.imageUrl" alt="" />

            <div>
              <h3 class="text-lg font-semibold text-gray-900">{{ person.name }}</h3>
              <p class="text-sm text-gray-600">{{ person.major }}</p>
              <p class="text-sm text-gray-600">{{ person.minor }}</p>
              <p class="text-sm text-gray-600">{{ person.class }}</p>
            </div>

          </div>
        </li>
      </ul>
      <!-- Single GitHub Repo Link at Bottom -->
      <a 
        href="https://github.com/aekau21/CS401_Final" 
        target="_blank" 
        class="inline-block bg-indigo-800 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg text-sm transition mt-15"
      >
        Project repository →
      </a>
    </div>
  `,
  data() {
    return {
      people: [
        { name: 'Grace Stewart', major: 'Computer Science', minor: 'Minor: Data Science, Fine Arts', class: 'C/O 2026', imageUrl: 'https://avatars.githubusercontent.com/u/146779910?v=4' },
        { name: 'Anson Ekau', major: 'Data Science', minor: 'Minor: Computer Science', class: 'C/O 2025', imageUrl: 'https://avatars.githubusercontent.com/u/125710421?v=4' },
        { name: 'Kole Nagai', major: 'Data Science', minor: 'Minor: Computer Science, Economics', class: 'C/O 2025', imageUrl: 'https://avatars.githubusercontent.com/u/92061308?v=4' },
      ]
    };
  }
};
