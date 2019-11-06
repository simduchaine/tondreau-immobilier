<template>
  <Layout class="container">
    <h1 class="text-4xl font-thin mb-8 mt-20">Contactez-moi</h1>
    <form name="contact" netlify>
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
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Contact"
  }
};
</script>
