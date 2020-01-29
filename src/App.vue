<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <section>
      <ul>
        <li>
          <span style="color: blue;">
            <b>Mavi</b>
          </span> çerçeve Row'ları temsil ediyor
        </li>
        <li>
          <span style="color: red;">
            <b>Kırmızı</b>
          </span> çerçeve Column'ları temsil ediyor
        </li>
        <li>
          <span style="color: green;">
            <b>Yeşil</b>
          </span> çerçeve Page'leri temsil ediyor
        </li>
      </ul>
      <br />
    </section>
    <template v-for="page in Content">
      <Page :Data="page" :key="page.id"></Page>
    </template>
  </div>
</template>

<script>
import Content from "./data/content.json";
import Page from "./components/Page";

export default {
  name: "app",
  components: { Page },
  data: function() {
    return {
      Content
    };
  },
  created() {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.columns {
  border: 2px solid blue;
  padding: 20px;
}
.column {
  border: 2px solid red;
  padding: 20px;
}
.Page {
  border: 2px solid green;
  padding: 20px;
  margin-bottom: 20px;
}
</style>
