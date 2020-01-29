<template>
  <div class="columns">
    <template v-for="item in Data.columns">
      <Column :Data="item" :key="item.id" />
    </template>
  </div>
</template>

<script>
export default {
  name: "Row",
  props: {
    Data: {
      type: Object,
      required: true,
      default: function() {
        return {};
      }
    }
  }
};
</script>