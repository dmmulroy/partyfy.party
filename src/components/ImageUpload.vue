<template>
  <section class="section">
    <drag-and-drop-upload @upload-file="handleUploadFile" />
    <img v-if="imageData" v-bind:src="imageData" />
    <img v-if="partyImageData" v-bind:src="partyImageData" />
    <br />
    <b-button
      size="is-large"
      type="is-primary"
      v-bind:disabled="!file"
      @click="onSubmit"
      >Submit</b-button
    >
    <b-button
      tag="a"
      icon-left="download"
      size="is-large"
      v-if="partyImageData"
      v-bind:href="partyImageData"
      v-bind:download="'party-' + file.name"
      >Download</b-button
    >
  </section>
</template>

<script>
import DragAndDropUpload from './DragAndDropUpload.vue';
export default {
  name: 'ImageUpload',
  components: {
    DragAndDropUpload
  },
  data() {
    return {
      file: null,
      imageData: null,
      partyImageData: null
    };
  },
  methods: {
    handleUploadFile(file) {
      this.file = file;
      this.imageData = null;
      this.partyImageData = null;

      const fileReader = new FileReader();

      fileReader.onload = e => {
        this.imageData = e.target.result;
      };

      fileReader.readAsDataURL(this.file);
    },
    async onSubmit() {
      try {
        const formData = new FormData();
        const fileReader = new FileReader();

        formData.append('image', this.file, this.file.name);

        const partyImage = await fetch(
          'https://partyfy-api.herokuapp.com/partyfy',
          {
            method: 'POST',
            body: formData
          }
        ).then(res => res.blob());

        fileReader.onload = e => {
          this.partyImageData = e.target.result;
        };

        fileReader.readAsDataURL(partyImage);
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style scoped>
img {
  margin-right: 25px;
  padding: 0.25em;
  border: 1px dashed #b5b5b5;
  border-radius: 6px;
}

img:hover {
  border-color: #7957d5;
}
</style>
