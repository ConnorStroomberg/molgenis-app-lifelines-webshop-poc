import { ApplicationState, CategoricalFacet, DataItem, Topic } from '@/types/store'

const toggle = (list: string[], item: string): void => {
  if (list.includes(item)) {
    list.splice(list.indexOf(item), 1)
  } else {
    list.push(item)
  }
}

export default {
  toggleDataItem (state: ApplicationState, id: string) {
    if (state.selectedDataItems.includes(id)) {
      state.selectedDataItems = state.selectedDataItems.filter(x => x !== id)
    } else {
      state.selectedDataItems = [...state.selectedDataItems, id]
    }
  },
  toggleAgeGroupOption (state: ApplicationState, toggledOptionId: string) {
    toggle(state.selectedOptions.ageGroup, toggledOptionId)
  },
  toggleSexGroupOption (state: ApplicationState, toggledOptionId: string) {
    toggle(state.selectedOptions.sexGroup, toggledOptionId)
  },
  toggleSubCohortsOption (state: ApplicationState, toggledOptionId: string) {
    toggle(state.selectedOptions.subCohorts, toggledOptionId)
  },
  toggleCollectionPointOption (state: ApplicationState, toggledOptionId: string) {
    toggle(state.selectedOptions.collectionPoint, toggledOptionId)
  },
  setDataItems (state: ApplicationState, dataItems: DataItem[]) {
    state.dataItems = dataItems
  },

  setTopics (state: ApplicationState, topics: Topic[]) {
    state.topics = topics
  },

  setAgeGroups (state: ApplicationState, ageGroups: CategoricalFacet) {
    state.categoricalFacets.ageGroup = ageGroups
  },

  setSexGroups (state: ApplicationState, sexGroups: CategoricalFacet) {
    state.categoricalFacets.sexGroup = sexGroups
  },

  setSubCohorts (state: ApplicationState, subCohorts: CategoricalFacet) {
    state.categoricalFacets.subCohorts = subCohorts
  },

  setCollectionPoints (state: ApplicationState, collectionPoints: CategoricalFacet) {
    state.categoricalFacets.collectionPoint = collectionPoints
  }
}
