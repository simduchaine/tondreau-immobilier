<template>
  <Layout>
    <section id="intro" class="flex flex-col-reverse xl:flex-row xl:justify-end">
      <div class="xl:flex xl:flex-col xl:justify-center xl:pr-40 xl:w-1/3">
        <h1 class="text-4xl font-thin mb-8 xl:mb-16">Trouvez votre maison de rêve à Québec</h1>
        <p
          class="text-lg leading-relaxed mb-16 xl:mb-48"
        >Depuis près de 10 ans, Tondreau Immobilier vous accompagne de façon unique et personnalisée dans la vente ou l'achat de votre nouvelle propriété. Tondreau immobilier, c'est le projet de Frédérick Tondreau, courtier immobilier résidentiel accrédité et membre de la grande équipe Via Capitale Sélect.</p>
        <g-image src="~/assets/img/arrow-down.svg" />
      </div>
      <g-image class="mb-10 xl:w-1/2" src="~/assets/img/naomi-hebert-MP0bgaS_d1c-unsplash.jpg"></g-image>
    </section>

    <section id="about" class="container lg:flex lg:justify-between my-40">
      <h2 class="text-4xl font-thin mb-8">À propos</h2>
      <div class="text-lg leading-relaxed lg:w-2/3">
        <p
          class="mb-6"
        >Pour vendre rapidement et à bon prix, je fais tout ce qu’il faut pour attirer et rassurer les acheteurs. Avec moi, leur achat est couvert par des protections gratuites; en tout temps, je suis à votre disposition pour vous expliquer ce programme.</p>
        <p
          class="mb-6"
        >Bien sûr, mon travail de vente comprend également tous les services de base tels que la préparation d’une opinion de la valeur marchande, l’annonce de votre propriété sur des sites web importants et dans différents médias, la négociation, etc.</p>
        <p>Appelez-moi, ma compétence et mes connaissances sont à votre service !</p>
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
      <div class="lg:flex w-full lg:w-2/3">
        <propertyCard
          class="relative text-white font-normal lg:w-2/5"
          v-for="edge in $page.allEstate.edges"
          :key="edge.node.id"
          :image="edge.node.images[0]"
          :address="edge.node.address"
          :price="edge.node.price"
          :bedrooms="edge.node.building.Bedrooms"
          :bathrooms="edge.node.building.BathroomTotal"
          :path="edge.node.path"
        />
      </div>
    </section>
    <section>
      <ClientOnly>
        <mapGL :allestate="$page.allEstate.edges"></mapGL>
      </ClientOnly>
    </section>
  </Layout>
</template>

<page-query>
query Estate {
  allEstate: allRealEstate(limit: 3, order: ASC) {
    totalCount
    edges {
      node {
        id
        address
        longitude
        latitude
        path
        price
        images
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