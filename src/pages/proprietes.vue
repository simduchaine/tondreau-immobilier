<template>
  <Layout>
    <section class="container mt-20">
      <h1 class="text-4xl font-thin mb-8">Propriétés</h1>
      <div>{{ $page.allEstate.totalCount }} résultats</div>
      <div class="flex flex-wrap mt-10">
        <propertyCard
          class="relative text-white font-normal w-full lg:w-31 m-2"
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

    <section class="mt-12">
      <ClientOnly>
        <mapGL :allestate="$page.allEstate.edges"></mapGL>
      </ClientOnly>
    </section>
  </Layout>
</template>

<page-query>
query Estate {
  allEstate: allRealEstate (order: DESC, sortBy: "changeDate") {
    totalCount
    edges {
      node {
        id
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
    title: "Propriétés"
  },
  components: {
    propertyCard,
    mapGL
  }
};

//sortable vuejs : https://embed.plnkr.co/2WKv0I/
// example 2: https://www.raymondcamden.com/2018/02/08/building-table-sorting-and-pagination-in-vuejs
</script>
