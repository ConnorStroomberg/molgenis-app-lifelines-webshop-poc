<template>
  <div>
    <b-list-group v-if="topicList.length > 0">
      <b-list-group-item v-for="topic in topicList"
                         :key="topic.id"
                         href="#"
                         :variant="topic.children.length ? 'secondary' : 'default'"
                         :active="topic.selected"
                         @click="topicClick(topic)">
      <span v-if="topic.children.length">
        <font-awesome-icon class="caret-icon" icon="caret-down"
                           v-if="isOpenTopic(topic)"></font-awesome-icon>
        <font-awesome-icon class="caret-icon" icon="caret-right" v-else></font-awesome-icon>  {{topic.label}}
          <b-badge
              :class="countSelectedTopic(topic) === 0 ? 'float-right head-badge' : 'float-right head-badge-selected'"
              pill>
            {{countSelectedTopic(topic)}}/{{countItems(topic)}}
          </b-badge>
      </span>
        <span v-else class="p-1">
        {{topic.label}}
         <b-badge
             :class="countSelectedTopic(topic) === 0 ? 'float-right deselected-badge' : 'float-right'"
             :variant="getCountColorVariant(topic)" pill>
           {{countSelectedTopic(topic)}}/{{countItems(topic)}}
         </b-badge>
      </span>
      </b-list-group-item>
    </b-list-group>
    <span v-else>Loading topics...</span>
  </div>

</template>
<script>
  import { mapState, mapGetters, mapMutations } from 'vuex'
  import { isDefined } from '../store/helpers'

  export default {
    name: 'Topic',
    methods: {
      topicClick (topic) {
        if (topic.children.length) {
          this.toggleTopicOpen(topic.id)
        } else {
          this.toggleTopicSelect(topic.id)
        }
      },
      isOpenTopic (topic) {
        return this.$store.state.openTopics.includes(topic.id)
      },
      ...mapMutations(['toggleTopicSelect', 'toggleTopicOpen']),
      countItems (topic, itemFilter = () => true) {
        return topic.children.reduce(
          (previous, current) => previous + this.countItems(current, itemFilter), 0)
          + topic.dataItems.map(id => this.allDataItems[id]).filter(isDefined).filter(itemFilter).length
      },
      countSelectedTopic (topic) {
        return this.countItems(topic, item => this.dataItemSelected(item) && this.dataItemEnabled(item))
      },
      getCountColorVariant (topic) {
        return this.countSelectedTopic(topic) > 0 ?
          this.countSelectedTopic(topic) === this.countItems(topic) ?
            'success' : 'warning' : 'light'
      }
    },
    computed: {
      ...mapGetters(['topicList', 'dataItemSelected', 'dataItemEnabled']),
      ...mapState(['allDataItems'])
    }
  }
</script>
<style scoped>
    .caret-icon {
        margin-left: -1rem;
        width: 1rem;
    }

    .deselected-badge {
        color: #276daa;
    }

    .head-badge {
        color: #005967;
        background-color: inherit;
    }

    .head-badge-selected {
        background-color: #005967;
    }
</style>
