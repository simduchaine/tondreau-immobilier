<template>
  <Layout>
    <g-image class="mx-auto" :src="$page.realEstate.image" />
    <div class="bg-crema -mt-32 pt-24">
      <div
        class="container relative bg-white w-11/12 md:w-2/3 lg:w-5/12 xl:w-3/12 px-18 py-8 text-center"
      >
        <div class="font-normal text-4xl" v-html="$page.realEstate.price" />
        <h1 class="text-3xl leading-tight pt-2" v-html="$page.realEstate.address" />
      </div>
      <div class="container pt-16 text-center">
        <div class="lg:w-2/3 mx-auto" v-html="$page.realEstate.content" />

        <div class="flex justify-around mx-auto lg:w-3/4 mt-16">
          <div>
            <g-image class="mx-auto" src="~/assets/img/bed.svg" />
            <span v-html="$page.realEstate.building.Bedrooms"></span>
            <span class="block">chambres</span>
          </div>
          <div>
            <g-image class="mx-auto" src="~/assets/img/bath.svg" />
            <span v-html="$page.realEstate.building.BathroomTotal"></span>
            <span class="block">salles de bains</span>
          </div>
          <div>
            <g-image class="mx-auto" src="~/assets/img/building.svg" />
            <span v-html="$page.realEstate.building.Type"></span>
          </div>
        </div>

        <div class="flex justify-around mx-auto lg:w-3/4 mt-20">
          <div v-if="$page.realEstate.building.SizeInterior">
            <span class="block font-medium">Surface utile:</span>
            <span v-html="$page.realEstate.building.SizeInterior"></span>
          </div>
          <div>
            <span class="block font-medium">Superficie du terrain:</span>
            <span v-html="$page.realEstate.Land.SizeTotal"></span>
          </div>
          <div>
            <span class="block font-medium">Étages:</span>
            <span v-html="$page.realEstate.building.StoriesTotal"></span>
          </div>
          <div v-if="$page.realEstate.building.Ownership">
            <span class="block font-medium">Titre:</span>
            <span v-html="$page.realEstate.building.Ownership"></span>
          </div>
        </div>

        <a
          class="inline-flex items-center bg-white py-2 px-4 my-24"
          :href="'https://www.realtor.ca'+$page.realEstate.RelativeURLFr"
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
      <mapGL
        :path="$page.realEstate.path"
        :image="$page.realEstate.image"
        :address="$page.realEstate.shortAddress"
        :long="$page.realEstate.longitude"
        :lat="$page.realEstate.latitude"
        :isSingle="true"
      ></mapGL>
    </section>
  </Layout>
</template>

<page-query>
query Estate($id: ID!) {
  realEstate(id: $id) {
    price
    shortAddress
    longitude
    latitude
    address
    content
    image
    building {
      Bedrooms
      BathroomTotal
      Type
      StoriesTotal
      SizeInterior
      Ownership
    }
    Land {
      SizeTotal
    }
    RelativeURLFr
  }
}
</page-query>

<script>
import mapGL from "~/components/map.vue";

export default {
  metaInfo() {
    return {
      title: this.$page.realEstate.shortAddress
    };
  },
  components: {
    mapGL
  }
};
</script>