<template>
  <Layout class="container">
    <h1>Propriétés</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
    <div class="flex flex-wrap">
      <div
        class="relative text-white lg:w-1/3 p-2"
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
        <a class="absolute bottom-0 right-0 bg-white text-black p-2" :href="edge.node.path">--></a>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Estate {
  allEstate: allRealEstate(sortBy: "PhotoChangeDateUTC") {
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
    title: "Propriétés"
  }
};
</script>
