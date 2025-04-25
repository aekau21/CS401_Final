const About = {
    template: `
    <div>
  <div class="bg-white py-24 sm:py-32 rounded-xl shadow-lg overflow-hidden">
    <div class="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
      <div class="max-w-xl">
        <h2 class="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">Our team ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧</h2>
        <p class="mt-6 text-lg/8 text-gray-600">Fueled by a love of history and technology, our team of Computer Science and Data Science students is dedicated to making the past more accessible and engaging through creative digital solutions.</p>
      </div>
      <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
        <li v-for="person in people" :key="person.name">
          <div class="flex items-center gap-x-6">
            <img class="size-16 rounded-full" :src="person.imageUrl" alt="" />
            <div>
              <h3 class="text-base/7 font-semibold tracking-tight text-gray-900">{{ person.name }}</h3>
              <p class="text-sm/6 font-semibold text-indigo-600">{{ person.role }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>

    `,
data() {
  return {
    people: [
      { name: 'Grace Stewart', role: 'Computer Science c/o 2026', imageUrl: 'https://avatars.githubusercontent.com/u/146779910?v=4'},
      { name: 'Anson Ekau', role: 'Data Science c/o 2025', imageUrl: 'https://avatars.githubusercontent.com/u/125710421?v=4'},
      { name: 'Kole Nagai', role: 'Data Science c/o 2025', imageUrl: 'https://avatars.githubusercontent.com/u/92061308?v=4'},
      ]
    };
  }
};