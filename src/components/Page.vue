<template>
  <div class="Page">
    <template v-for="item in Data.rows">
      <Row :Data="item" :key="item.id" />
    </template>
  </div>
</template>

<script>
export default {
  name: "Page",
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