<template>
  <Layout>
    <section id="intro" class="flex flex-col-reverse xl:flex-row bg-gray-300 px-1/6">
      <div class="pt-24">
        <g-image src="~/assets/img/frederick-tondreau-alpha-2.png" width="550" height="800" quality="100"></g-image>
      </div>
      
      <div class="px-1/12 py-1/12 xl:w-2/3">
        <h1 class="text-4xl text-lightBleuVia mb-8 xl:mb-16 font-title">Pour investir, acheter ou vendre sa propriété à Québec</h1>
       <div class="text-lg leading-relaxed">
        <p
          class="mb-6"
        >Frédérick Tondreau est avant tout un homme d'affaire à Québec. Il est propriétaire d'immeubles à revenus depuis 2011 et copropriétaire d'un garage de Carrosserie à Québec franchisé CarrXpert comptant plus de 12 employés. </p>
        <p
          class="mb-6"
        >Frédérick œuvre dans le courtage immobilier depuis maintenant 10 ans et est un EXPERT du marché à Québec. En 2020, plus de 60 propriétés ont été vendus par M. Tondreau, et a maintenu un niveau d'excellence à la satisfaction de la clientèle. </p>
        <p class="mb-6">Pour INVESTIR, ACHETER ou VENDRE une propriété, Frédérick Tondreau est LA référence.</p>
        
      </div>
        <g-image src="~/assets/img/frederick-tondreau-signature.png" width="150" class="pt-8"/>
      </div>
    </section>


    <section id="listing" class="bg-bleuVia py-24">
      <div class="container">
        <h1 class="text-4xl text-white mb-8 font-title">Propriétés à vendre</h1>
        <div class="text-white">{{ $page.allEstate.totalCount }} résultats</div>
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
      </div>
    </section>

    <section>
      <ClientOnly>
        <mapGL :allestate="$page.allEstate.edges"></mapGL>
      </ClientOnly>
    </section>

    <section id="contact" class="container lg:flex lg:justify-between mt-40 mb-12">
      <h2 class="text-4xl text-lightBleuVia mb-8 font-title lg:w-1/3">Contactez-moi pour acheter ou vendre une maison</h2>
      <div class="text-lg leading-relaxed lg:w-1/2">
        <p
          class="mb-6"
        >Depuis près de 10 ans, Frédérick Tondreau vous accompagne de façon unique et personnalisée dans la vente ou l'achat de votre nouvelle propriété. Tondreau immobilier, c'est le projet de Frédérick Tondreau, courtier immobilier résidentiel accrédité et affilié à Via Capitale Équipe.</p>
      </div>
    </section>

    <section class="container mb-24">
        
        <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <div class="inline-block w-1/2 h-10 px-4">
          <label class="block pb-2" for="name">Nom:</label>
          <input
            class="bg-gray-300 w-full h-full px-2"
            type="text"
            name="name"
            id="name"
            placeholder="Nom"
          />
          </div>
          <div class="inline-block w-1/2 h-10 px-4">
            <label class="block pb-2" for="email">Courriel:</label>
            <input
              class="bg-gray-300 w-full h-full px-2"
              type="email"
              name="email"
              id="email"
              placeholder="courriel"
            />
          </div>
          <div class="block w-full px-4 mt-6">
            <label class="block pb-2" for="message">Message</label>
            <textarea class="bg-gray-300 w-full h-8/12 p-4 mb-4" name="message" id="message" rows="10"></textarea>
          </div>

          <button
            class="inline-flex items-center border-black border-2 bg-white py-2 px-4 mx-4"
            type="submit"
          >
            Envoyer
            <span class="ml-3 w-6">
              <g-image src="~/assets/img/arrow.svg" />
            </span>
          </button>
          </form>
    </section>

  </Layout>
</template>

<page-query>
query Estate {
  allEstate: allRealEstate(order: DESC, sortBy: "changeDate") {
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
    title: "Accueil"
  },
  components: {
    propertyCard,
    mapGL
  }
};
</script>