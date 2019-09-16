<template>
  <Layout>
    <section id="listing" class="lg:flex lg:justify-end bg-crema py-24">
      <div>
        <h2>Propriétés Récentes</h2>
        <a href="/proprietes">Voir plus</a>
      </div>
      <div
        class="relative text-white lg:w-1/4"
        v-for="edge in $page.allEstate.edges"
        :key="edge.node.id"
      >
        <g-image :src="edge.node.image" />
        <div class="absolute bottom-0 px-6 py-6">
          <div class="font-semibold" v-html="edge.node.price"></div>
          <div class="address" v-html="edge.node.shortAddress"></div>
          <div>
            <span v-html="edge.node.building.Bedrooms"></span> chambres •
            <span v-html="edge.node.building.BathroomTotal"></span> salles de bain
          </div>
        </div>
      </div>
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
export default {
  metaInfo: {
    title: "Accueil"
  }
};
</script>