{{{{raw}}}}
<template lang="pug">
section.container
  h1 {{ error.statusCode }}
  h2 {{ error.message }}
  nuxt-link(to="/", v-if="error.statusCode === 404") Home

</template>
{{{{/raw}}}}

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style scoped>

</style>
