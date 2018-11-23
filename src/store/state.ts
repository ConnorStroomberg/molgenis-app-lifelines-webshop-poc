import ApplicationState from '@/types/store'

const state: ApplicationState = {
  dataItems: [],
  topics: [],
  categoricalFacets: {
    collectionPoint: { label: '', options: [] },
    ageGroup:  { label: '', options: [] },
    sexGroup:  { label: '', options: [] },
    subCohorts:  { label: '', options: [] }
  },
  selectedOptions: {
    ageGroup: ['0-3', '3-7'],
    sexGroup: [],
    subCohorts: [],
    collectionPoint: ['baseline'],
    searchTerm: 'hallo, ik sta in de state'
  },
  selectedDataItems: ['var1']
}

export default state
