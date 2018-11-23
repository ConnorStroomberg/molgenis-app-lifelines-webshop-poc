<template>
    <b-container fluid class="mt-2">
        <b-row>
            <b-col class="mb-2">
                <div class="float-right">
                    <b-button variant="outline-secondary" class="mr-1 my-2 my-sm-0" type="submit">
                        <font-awesome-icon icon="save"/>
                        Save
                    </b-button>
                    <b-button variant="outline-secondary" class="mr-1 my-2 my-sm-0" type="submit">
                        <font-awesome-icon icon="undo"/>
                        Reset
                    </b-button>
                    <b-button variant="outline-info" class="mr-1 my-2 my-sm-0" type="submit">Request</b-button>
                </div>

            </b-col>
        </b-row>
        <b-row>
            <b-col md="3">
                <h3 class="nav-title font-weight-bold">Filter items</h3>
            </b-col>
            <b-col md="6">
                <div>
                    <b-input-group>
                        <b-form-input
                                class="search-bar"
                                type="text"
                                placeholder="Search">
                        </b-form-input>

                        <b-input-group-append>
                            <b-btn variant="outline-secondary" class="search-icon">
                                <font-awesome-icon icon="search"/>
                            </b-btn>
                        </b-input-group-append>
                    </b-input-group>
                </div>
            </b-col>
        </b-row>
        <b-row class="mt-2">
            <b-col md="3">
                <Facet :categoricalFacet="this.$store.state.categoricalFacets.ageGroup"></Facet>
                <Facet :categoricalFacet="this.$store.state.categoricalFacets.sexGroup"></Facet>
                <Facet :categoricalFacet="this.$store.state.categoricalFacets.subCohorts"></Facet>
                <Facet :categoricalFacet="this.$store.state.categoricalFacets.collectionPoint"></Facet>
            </b-col>
            <b-col md="2">
               <topic-tree></topic-tree>
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
  import TopicTree from '@/components/TopicTree.vue'
  import { mapGetters, mapActions } from 'vuex'

  export default Vue.extend({
    name: 'LifelinesWebshop',
    components: { Facet, DataItems, TopicTree },
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
<style scoped>
    .search-icon {
        color: #495057;
        border-color: #ced4da;
        border-style: solid;
        border-width: 1px 1px 1px 0px;
    }
    .search-bar {
        border-width: 1px 0px 1px 1px;
    }

    h3.nav-title{
        color: #276daa;
    }
</style>

