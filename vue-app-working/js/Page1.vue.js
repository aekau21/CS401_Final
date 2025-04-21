const Page1 = {
  template: `
    <div>
      <a @click="$router.push('/')" class="text-blue-400 hover:text-blue-200 underline cursor-pointer">← Home</a>
      <h1 class="text-2xl mt-4 font-bold">This is Page 1</h1>
      <p class="mt-2 text-gray-300">Page 1 content goes here.</p>
    </div>
  `
};
