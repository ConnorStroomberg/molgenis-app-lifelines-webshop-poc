// @ts-ignore
import api from '@molgenis/molgenis-api-client'
import { CategoricalFacet, CategoricalFacetOption } from '@/types/store'

const toCategoricalFacetOption = (item: any): CategoricalFacetOption => {
  return {
    id: item.id,
    label: item.label
  }
}

const toCategoricalFacet = (response: any): CategoricalFacet => {
  return {
    label: response.meta.label,
    options: response.items.map(toCategoricalFacetOption)
  }
}

export default {
  getAgeGroups (): Promise<CategoricalFacet[]> {
    return api.get('api/v2/lifelines_ageGroups').then((response: any) => {
      return toCategoricalFacet(response)
    })
  },

  getSexGroups (): Promise<CategoricalFacet[]> {
    return api.get('api/v2/lifelines_sexGroups').then((response: any) => {
      return toCategoricalFacet(response)
    })
  },

  getSubCohorts (): Promise<CategoricalFacet[]> {
    return api.get('api/v2/lifelines_subcohorts').then((response: any) => {
      return toCategoricalFacet(response)
    })
  },

  getCollectionPoints (): Promise<CategoricalFacet[]> {
    return api.get('api/v2/lifelines_collections').then((response: any) => {
      return toCategoricalFacet(response)
    })
  }
}
