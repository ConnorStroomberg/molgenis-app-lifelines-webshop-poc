<template>
    <b-button :variant="variant" :active="active" @click="$emit('facetToggled')">{{label}}</b-button>
</template>

<script>
  export default {
    name: 'FacetOption',
    props: {
      label: {
        type: String,
        required: true
      },
      active: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    computed: {
      variant () {
        return this.active ? 'primary' : 'outline-primary'
      }
    }
  }
</script>

<style scoped>
    button {
        margin: 0.2rem;
        min-width: 8rem;
    }
</style>
