import topicRepository from '@/repository/topicRepository'
import categoricalFacetRepository from '@/repository/categoricalFacetRepository'
import dataItemRepository from '@/repository/dataItemRepository'

export default {

  getDataFromBackend ({ commit }: any) {

    categoricalFacetRepository.getAgeGroups().then((ageGroups) => {
      commit('setAgeGroups', ageGroups)
    }).catch()

    categoricalFacetRepository.getSexGroups().then((sexGroups) => {
      commit('setSexGroups', sexGroups)
    }).catch()

    categoricalFacetRepository.getSubCohorts().then((subCohorts) => {
      commit('setSubCohorts', subCohorts)
    }).catch()

    categoricalFacetRepository.getCollectionPoints().then((collectionPoints) => {
      commit('setCollectionPoints', collectionPoints)
    }).catch()

    Promise.all([dataItemRepository.getAll(), topicRepository.getAll()]).then((results) => {
      commit('setDataItems', results[0])
      commit('setTopics', results[1])
    }).catch()

  }
}
