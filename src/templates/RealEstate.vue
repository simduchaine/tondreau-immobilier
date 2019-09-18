<template>
  <Layout>
    <div class="container">
      <g-image :src="$page.realEstate.image" />
      <h1 v-html="$page.realEstate.shortAddress" />
      <div v-html="$page.realEstate.content" />
    </div>
  </Layout>
</template>

<page-query>
query Estate($id: ID!) {
  realEstate(id: $id) {
    shortAddress
    content
    image
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.realEstate.title
    };
  }
};
</script>