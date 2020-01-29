<template>
  <div class="column">
    <template v-for="item in Data.rows">
      <Row :Data="item" :key="item.id" />
    </template>
    <template v-if="hasContent">
      <p>{{ Data.content }}</p>
    </template>
  </div>
</template>

<script>
export default {
  name: "Column",
  props: {
    Data: {
      type: Object,
      required: true,
      default: function() {
        return {};
      }
    }
  },
  data: function() {
    return {
      hasContent: true
    };
  },
  created() {
    this.hasContent = this.Data.rows == null && this.Data.columns == null;
  }
};
</script>