<template>
  <b-tree-view :data="topicTree"
               :contextMenu="false"
               :renameNodeOnDblClick="false"
               nodeLabelProp="label"></b-tree-view>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Topic',
    computed: {
      ...mapGetters(['topicTree'])
    },
    props: {
      topics: {
        type: Array,
        required: true
      }
    }
  }
</script>