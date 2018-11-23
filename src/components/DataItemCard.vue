<template>
  <b-list-group-item @click="$emit('click')"
                     href="#"
                     :active="dataItem.selected"
                     :disabled="!dataItem.enabled">
    <h5>{{dataItem.label}}</h5>
    <dl class="row">
      <dt class="col-sm-4">Topic</dt>
      <dd class="col-sm-8">{{dataItem.topic.label}}</dd>
      <dt class="col-sm-4">Subcohorts</dt>
      <dd class="col-sm-8">
        <b-badge v-for="subCohort in dataItem.subCohorts"
                 :variant = "dataItem.selected ? 'light' : 'secondary'"
                 :key="subCohort.id" class="mr-1">{{subCohort.label}}
        </b-badge>
      </dd>
      <dt class="col-sm-4">Collections</dt>
      <dd class="col-sm-8">
        <b-badge v-for="collection in dataItem.collectionPoints"
                 :variant = "dataItem.selected ? 'light' : 'secondary'"
                 :key="collection.id" class="mr-1">{{collection.label}}
        </b-badge>
      </dd>
    </dl>
  </b-list-group-item>
</template>

<script lang="ts">
  // @ts-ignore
  import Vue from 'vue'
  import { VueDataItem } from '../types/vue'

  export default Vue.extend({
    props: {
      dataItem: Object as () => VueDataItem
    }
  })
</script>
