<template>
    <b-container fluid class="mt-2">

        <b-row class="pt-2">
            <b-col md="2">
                <h4 class="nav-title font-weight-bold">1. Select cohorts</h4>
                <b-row>
                    <b-col>
                        <FacetContainer title="Population" :facets="[this.$store.state.categoricalFacets.ageGroup,
                        this.$store.state.categoricalFacets.sexGroup, this.$store.state.categoricalFacets.subCohorts]">
                        </FacetContainer>
                    </b-col>
                </b-row>
            </b-col>
            <b-col md="10">
                <b-row>
                    <b-col md="3">
                        <h4 class="nav-title font-weight-bold">2. Select data</h4>
                    </b-col>
                    <b-col md="3">

                    </b-col>
                    <b-col md="6">
                        <div class="float-right">
                            <b-button variant="outline-secondary" class="mr-1 my-2 my-sm-0" type="submit">
                                <font-awesome-icon icon="save"/>
                                Save
                            </b-button>
                            <b-button variant="outline-secondary" class="mr-1 my-2 my-sm-0" type="submit"
                                      @click.prevent="reset">
                                <font-awesome-icon icon="undo"/>
                                Reset all
                            </b-button>
                            <b-button
                                variant="outline-info"
                                class="mr-1 my-2 my-sm-0"
                                type="submit" to="cart"
                                :disabled="selectionCount < 1">
                                <font-awesome-icon icon="shopping-cart"/>
                                Selected Items <span class="badge badge-info">{{selectionCount}}</span>
                            </b-button>
                        </div>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col md="12">
                        <b-row>
                            <b-col>
                                <Facet :categoricalFacet="this.$store.state.categoricalFacets.collectionPoint"></Facet>
                            </b-col>
                        </b-row>
                        <b-row class="mt-1">
                            <b-col md="1">
                                <h6>Variables</h6>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col md="4">
                                <SearchBar></SearchBar>
                            </b-col>
                        </b-row>
                        <b-row class="mt-1">
                            <b-col>
                                <b-row>
                                    <b-col md="3">
                                        <topic-tree></topic-tree>
                                    </b-col>
                                    <b-col md="9">
                                        <data-items :dataItems="vueDataItems" v-if="vueDataItems.length"></data-items>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
  import Vue from 'vue'
  import FacetContainer from '@/components/FacetContainer.vue'
  import Facet from '@/components/Facet.vue'
  import DataItems from '@/components/DataItems.vue'
  import TopicTree from '@/components/TopicTree.vue'
  import SearchBar from '@/components/SearchBar.vue'
  import { mapGetters, mapActions, mapMutations } from 'vuex'

  export default Vue.extend({
    name: 'LifelinesWebshop',
    components: { DataItems, TopicTree, SearchBar, FacetContainer, Facet },
    props: {
      msg: String
    },
    methods: {
      ...mapActions(['getDataFromBackend']),
      ...mapMutations(['reset'])
    },
    computed: {
      ...mapGetters(['vueDataItems', 'selectionCount'])
    },
    mounted () {
      this.getDataFromBackend()

    }
  })
</script>
<style scoped>
    h4.nav-title {
        color: #276daa;
    }
    h6 {
        color: #00ACC7;
    }
</style>

