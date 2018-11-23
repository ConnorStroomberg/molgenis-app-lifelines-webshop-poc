<template>
    <div class="facet mb-3">
        <b-row>
            <b-col>
                <h4 class="text-capitalize">{{this.categoricalFacet.label}} <small v-if="this.categoricalFacet.description">
                    <font-awesome-icon icon="question-circle"/></small>
                </h4>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <FacetOption
                    :key="option.id"
                    :label="option.label"
                    :active="isActive(option.id)"
                    v-for="option in this.categoricalFacet.options"
                    @facetToggled="facetToggled(option.id)">
                </FacetOption>
            </b-col>
        </b-row>
    </div>
</template>

<script>
  import { mapMutations, mapGetters } from 'vuex'
  import FacetOption from '../components/FacetOption.vue'

  export default {
    name: 'Facet',
    components: { FacetOption },
    props: {
      categoricalFacet: {
        type: Object,
        required: true
      }
    },
    computed: {
      ...mapGetters([
        'selectedAgeGroups',
        'selectedSexGroups',
        'selectedCollectionPoints',
        'selectedSubCohorts'
      ])
    },
    methods: {
      isActive (optionId) {
        switch (this.categoricalFacet.id) {
          case 'collectionPoint':
            return this.selectedCollectionPoints.includes(optionId)
          case 'ageGroup':
            return this.selectedAgeGroups.includes(optionId)
          case 'sexGroup':
            return this.selectedSexGroups.includes(optionId)
          case 'subCohorts':
            return this.selectedSubCohorts.includes(optionId)
        }
      },
      ...mapMutations([
        'toggleAgeGroupOption',
        'toggleSexGroupOption',
        'toggleSubCohortsOption',
        'toggleCollectionPointOption'
      ]),
      facetToggled (optionId) {
        switch (this.categoricalFacet.id) {
          case 'collectionPoint':
            this.toggleCollectionPointOption(optionId)
            break
          case 'ageGroup':
            this.toggleAgeGroupOption(optionId)
            break
          case 'sexGroup':
            this.toggleSexGroupOption(optionId)
            break
          case 'subCohorts':
            this.toggleSubCohortsOption(optionId)
            break
        }
      }
    }
  }
</script>
<style scoped>
    h4 {
        color: #00ACC7;
    }
</style>
