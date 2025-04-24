const Page1 = {
  template: `
    <div>
      <a @click="$router.push('/')" class="text-blue-400 hover:text-blue-200 underline cursor-pointer">← Home</a>
      <div class="bg-white shadow-md rounded-lg p-4">
  <img class="w-full h-48 object-cover rounded-t-lg" src="https://t3.ftcdn.net/jpg/00/77/45/10/360_F_77451022_GxBDKhRdlYTJ9cZsKFEKlrvZEp8RPAkW.jpg" alt="Card Image">
  <div class="px-6 py-4">
    <h2 class="text-lg font-bold text-gray-800 mb-2">Card Title</h2>
    <p class="text-gray-700 text-base">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <div class="px-6 py-2">
    <a href="#" class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Read More</a>
  </div>
</div>
    </div>
  `
};
