export interface Identifiable {
  id: string
}

export interface CategoricalFacetOption extends Identifiable {
  label: string
}

export interface CategoricalFacet {
  label: string
  options: CategoricalFacetOption[]
}

export interface CategoricalFacets {
  collectionPoint: CategoricalFacet
  ageGroup: CategoricalFacet
  sexGroup: CategoricalFacet
  subCohorts: CategoricalFacet
}

export interface DataItem extends Identifiable {
  ageGroups: string[]
  sexGroups: string[]
  subCohorts: string[]
  collectionPoints: string[]
  topic: string
  label: string
  ordinalPosition: number
  description: string
}

export interface Topic extends Identifiable {
  label: string
  parentTopicId?: string
}

export interface ApplicationState {
  dataItems: DataItem[]
  topics: Topic[]
  categoricalFacets: CategoricalFacets
  selectedOptions: {
    ageGroup: string[];
    sexGroup: string[];
    subCohorts: string[];
    collectionPoint: string[];
    searchTerm: string;
  }
  selectedDataItems: string[]
}

export default ApplicationState
