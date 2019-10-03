<template>
  <Layout>
    <section id="intro" class="flex flex-col-reverse xl:flex-row xl:justify-end">
      <div class="xl:flex xl:flex-col xl:justify-center xl:pr-40 xl:w-1/3">
        <h1
          class="text-4xl font-thin mb-8 xl:mb-16"
        >Lorem ipsum dolor sit amet Consectetur adipiscing elit</h1>
        <p
          class="text-lg leading-relaxed mb-16 xl:mb-48"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet mattis vitae est adipiscing sit sed vitae. Non, feugiat sed sed arcu odio. Egestas dolor quisque ut purus est. Potenti sed ultricies nulla maecenas tincidunt vitae. Pellentesque.</p>
        <g-image src="~/assets/img/arrow-down.svg" />
      </div>
      <g-image class="mb-10 xl:w-1/2" src="~/assets/img/naomi-hebert-MP0bgaS_d1c-unsplash.jpg"></g-image>
    </section>

    <section id="about" class="container lg:flex lg:justify-between my-40">
      <h2 class="text-4xl font-thin mb-8">À propos</h2>
      <div class="text-lg leading-relaxed lg:w-2/3">
        <p
          class="mb-6"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis, asperiores iste doloribus sequi, tempora minima iure perspiciatis reiciendis sed ad minus assumenda facere earum vel dignissimos qui numquam accusantium.</p>
        <p
          class="mb-6"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis, asperiores iste doloribus sequi, tempora minima iure perspiciatis reiciendis sed ad minus assumenda facere earum vel dignissimos qui numquam accusantium.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis, asperiores iste doloribus sequi, tempora minima iure perspiciatis reiciendis sed ad minus assumenda facere earum vel dignissimos qui numquam accusantium.</p>
      </div>
    </section>

    <section id="listing" class="lg:flex lg:justify-end lg:items-center bg-crema py-24">
      <div class="lg:w-1/6">
        <h2 class="text-4xl font-thin mb-10">Propriétés Récentes</h2>
        <a class="inline-flex items-center bg-white py-2 px-4" href="/proprietes">
          Voir plus
          <span class="ml-3 w-6">
            <g-image src="~/assets/img/arrow.svg" />
          </span>
        </a>
      </div>
      <div class="lg:flex lg:w-2/3">
        <propertyCard
          class="relative text-white font-normal"
          v-for="edge in $page.allEstate.edges"
          :key="edge.node.id"
          :image="edge.node.image"
          :address="edge.node.shortAddress"
          :price="edge.node.price"
          :bedrooms="edge.node.building.Bedrooms"
          :bathrooms="edge.node.building.BathroomTotal"
          :path="edge.node.path"
        />
      </div>
    </section>
    <section>
      <mapGL :allestate="$page.allEstate.edges"></mapGL>
    </section>
  </Layout>
</template>

<page-query>
query Estate {
  allEstate: allRealEstate(limit: 3, sortBy: "PhotoChangeDateUTC") {
    totalCount
    edges {
      node {
        id
        PhotoChangeDateUTC
        shortAddress
        longitude
        latitude
        path
        price
        image
        building {
          Bedrooms
          BathroomTotal
        }
      }
    }
  }
}
</page-query>

<script>
import propertyCard from "~/components/propertyCard.vue";
import mapGL from "~/components/map.vue";

export default {
  metaInfo: {
    title: "Accueil"
  },
  components: {
    propertyCard,
    mapGL
  }
};
</script>