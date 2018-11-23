// @ts-ignore
import api from '@molgenis/molgenis-api-client'
import { DataItem } from '@/types/store'

const refToId = (ref: any): string => ref.id

const toDataItem = (item: any): DataItem => {
  return {
    id: item.id,
    ageGroups: item.ageGroups,
    sexGroups: item.sexGroups.map(refToId),
    subCohorts: item.subcohorts.map(refToId),
    collectionPoints: item.collections.map(refToId),
    topic: item.topic.id,
    label: item.label,
    ordinalPosition: item.ordinalPosition,
    description: item.description
  }
}

export default {
  getAll (): Promise<DataItem[]> {
    return api.get('api/v2/lifelines_dataItems').then((response: any) => {
      return response.items.map(toDataItem)
    })
  }
}
