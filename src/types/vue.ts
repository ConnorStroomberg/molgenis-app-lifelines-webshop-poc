import { CategoricalFacetOption, Topic } from '@/types/store'

export interface VueDataItem {
  ageGroups: CategoricalFacetOption[]
  sexGroups: CategoricalFacetOption[]
  subCohorts: CategoricalFacetOption[]
  collectionPoints: CategoricalFacetOption[]
  topic: Topic
  label: string
  description: string,
  enabled: boolean,
  selected: boolean
}
