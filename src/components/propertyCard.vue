<template>
  <div>
    <div class="relative bg-black pb-10/12">
      <g-image :src="image" class="absolute opacity-80 w-full h-full object-cover" />
      <div class="absolute bottom-0 px-6 py-6">
        <div class="font-semibold text-2xl" v-html="price"></div>
        <div class="address text-xl" v-html="address"></div>
        <div>
          <span v-html="bedrooms"></span> chambres •
          <span v-html="bathrooms"></span> salles de bain
        </div>
      </div>
      <a class="absolute bottom-0 right-0 bg-white text-black p-2" :href="path">
        <g-image src="~/assets/img/arrow.svg" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "propertyCard",
  props: ["image", "price", "address", "bedrooms", "bathrooms", "path"]
};
</script>