import { ApplicationState, Identifiable } from '@/types/store'
import { VueDataItem } from '@/types/vue'

type TermGuard<T> = (x: T | undefined) => x is T

const lookup = <T extends Identifiable>(ids: string[], options: T[]): T[] =>
  ids.map(id => (options || []).find(option => option.id === id))
  .filter((x => x !== undefined) as TermGuard<T>)

export default {
  vueDataItems: (state: ApplicationState): VueDataItem[] =>
    state.dataItems.map(item => ({
      ...item,
      collectionPoints: lookup(item.collectionPoints, state.categoricalFacets.collectionPoint.options),
      ageGroups: lookup(item.ageGroups, state.categoricalFacets.ageGroup.options),
      subCohorts: lookup(item.subCohorts, state.categoricalFacets.subCohorts.options),
      sexGroups: lookup(item.sexGroups, state.categoricalFacets.sexGroup.options),
      topic: lookup([item.topic], state.topics)[0],
      selected: state.selectedDataItems.includes(item.id),
      enabled: true
    }))
}
