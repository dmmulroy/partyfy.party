<template>
  <section class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-half has-text-centered">
          <partyfy-logo />
          <image-upload />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PartyfyLogo from './components/PartyfyLogo.vue';
import ImageUpload from './components/ImageUpload.vue';

export default {
  name: 'app',
  components: {
    PartyfyLogo,
    ImageUpload
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
