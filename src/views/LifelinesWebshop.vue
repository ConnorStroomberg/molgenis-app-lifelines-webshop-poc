<template>
    <b-container fluid>

        <b-row>
            <b-col md="3">
                <Facet :categoricalFacet="this.$store.state.categoricalFacets.ageGroup"></Facet>
                <Facet :categoricalFacet="this.$store.state.categoricalFacets.sexGroup"></Facet>
                <Facet :categoricalFacet="this.$store.state.categoricalFacets.subCohorts"></Facet>
                <Facet :categoricalFacet="this.$store.state.categoricalFacets.collectionPoint"></Facet>
            </b-col>
            <b-col md="2">
               Topic Tree
            </b-col>
            <b-col md="7">
                <data-items :dataItems="vueDataItems"></data-items>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
  import Vue from 'vue'
  import Facet from '@/components/Facet.vue'
  import DataItems from '@/components/DataItems.vue'
  import { mapGetters, mapActions } from 'vuex'

  export default Vue.extend({
    name: 'LifelinesWebshop',
    components: { Facet, DataItems },
    props: {
      msg: String
    },
    methods: {
      ...mapActions([
        'getDataItems',
        'getTopics',
        'getAgeGroups',
        'getSexGroups',
        'getSubCohorts',
        'getCollectionPoints'
      ])
    },
    computed: {
      ...mapGetters(['vueDataItems'])
    },
    mounted () {
      this.getDataItems()
      this.getTopics()
      this.getAgeGroups()
      this.getSexGroups()
      this.getSubCohorts()
      this.getCollectionPoints()
    }
  })
</script>
