<template>
  <Layout>
    <div class="max-w-3xl mx-auto pb-10/12 lg:pb-6/12 xl:pb-3/12 relative">
      <g-image class="absolute h-full object-cover w-full" :src="$page.realEstate.image" />
    </div>
    <div class="bg-gray-300 -mt-32 pt-24">
      <div
        class="container relative bg-white w-11/12 md:w-2/3 lg:w-5/12 xl:w-3/12 px-18 py-8 text-center"
      >
        <div class="font-normal text-4xl" v-html="$page.realEstate.price" />
        <h1 class="text-3xl leading-tight pt-2">
          <span v-html="$page.realEstate.shortAddress"></span>
          <br />
          <span v-html="$page.realEstate.postalCode"></span>
        </h1>
      </div>
      <div class="container pt-16 text-center">
        <div class="lg:w-2/3 mx-auto" v-html="$page.realEstate.content" />

        <div class="flex justify-around mx-auto lg:w-3/4 mt-16">
          <div>
            <g-image class="mx-auto pb-6" src="~/assets/img/bed.svg" />
            <span v-html="$page.realEstate.building.Bedrooms"></span>
            <span class="block">chambres</span>
          </div>
          <div>
            <g-image class="mx-auto pb-6" src="~/assets/img/bath.svg" />
            <span v-html="$page.realEstate.building.BathroomTotal"></span>
            <span class="block">salles de bains</span>
          </div>
          <div v-if="$page.realEstate.building.Showerroms">
            <g-image class="mx-auto pb-6" src="~/assets/img/toilet.svg" />
            <span v-html="$page.realEstate.building.Showerroms"></span>
            <span class="block">salles d'eau</span>
          </div>
          <div>
            <g-image class="mx-auto pb-6" src="~/assets/img/building.svg" />
            <span v-html="$page.realEstate.building.Type"></span>
          </div>
        </div>

        <div class="flex justify-around mx-auto lg:w-1/2 flex-wrap mt-20">
          <div class="pb-10">
            <span class="block font-medium">Superficie du terrain:</span>
            <span v-html="$page.realEstate.dimensions.SizeTotal"></span>
          </div>
          <div class="pb-10">
            <span class="block font-medium">Largeur du bâtiment:</span>
            <span
              v-if="$page.realEstate.dimensions.width"
              v-html="$page.realEstate.dimensions.width"
            ></span>
            <span v-else>N/A</span>
          </div>
          <div class="pb-10">
            <span class="block font-medium">Profondeur du bâtiment:</span>
            <span
              v-if="$page.realEstate.dimensions.depth"
              v-html="$page.realEstate.dimensions.depth"
            ></span>
            <span v-else>N/A</span>
          </div>
          <div class="pb-10">
            <span class="block font-medium">Année de construction:</span>
            <span v-if="$page.realEstate.building.Year" v-html="$page.realEstate.building.Year"></span>
            <span v-else>N/A</span>
          </div>
          <div class="pb-10">
            <span class="block font-medium">Surface utile:</span>
            <span
              v-if="$page.realEstate.dimensions.privateArea"
              v-html="$page.realEstate.dimensions.privateArea"
            ></span>
            <span v-else>N/A</span>
          </div>
          <div class="pb-10">
            <span class="block font-medium">Étages:</span>
            <span
              v-if="$page.realEstate.building.StoriesTotal"
              v-html="$page.realEstate.building.StoriesTotal"
            ></span>
            <span v-else>N/A</span>
          </div>
        </div>

        <a
          class="inline-flex items-center bg-white py-2 px-4 my-24"
          :href="'https://www.realtor.ca/'+$page.realEstate.URLFr"
          target="_blank"
        >
          Plus d'infos
          <span class="ml-3 w-6">
            <g-image src="~/assets/img/arrow.svg" />
          </span>
        </a>
      </div>
    </div>
    <section>
      <ClientOnly>
        <mapGL
          :path="$page.realEstate.path"
          :image="$page.realEstate.image"
          :address="$page.realEstate.shortAddress"
          :long="$page.realEstate.longitude"
          :lat="$page.realEstate.latitude"
          :isSingle="true"
        ></mapGL>
      </ClientOnly>
    </section>
  </Layout>
</template>

<page-query>
query Estate($id: ID!) {
  realEstate(id: $id) {
    price
    shortAddress
    postalCode
    longitude
    latitude
    content
    image
    building {
      Bedrooms
      BathroomTotal
      StoriesTotal
      Type
    }
    dimensions {
      SizeTotal
    }
    URLFr
  }
}
</page-query>

<script>
import mapGL from "~/components/map.vue";

export default {
  metaInfo() {
    return {
      title: this.$page.realEstate.shortAddress,
      meta: [
        {
          name: "description",
          content: this.$page.realEstate.content
        },
        {
          property: "og:title",
          content: this.$page.realEstate.shortAddress
        },
        {
          name: "twitter:card",
          content: this.$page.realEstate.image
            ? "summary_large_image"
            : "summary"
        },
        {
          property: "og:description",
          content: this.$page.realEstate.content
        },
        {
          property: "og:image",
          content: this.$page.realEstate.image || ""
        }
      ]
    };
  },
  components: {
    mapGL
  }
};
</script>