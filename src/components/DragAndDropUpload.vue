<template>
  <section class="section">
    <b-field>
      <b-upload v-model="file" accept="image/*" v-bind:multiple="false" drag-drop>
        <section class="section">
          <div class="content has-text-centered">
            <p>
              <b-icon icon="upload" size="is-large"></b-icon>
            </p>
            <p>Drop your files here or click to upload</p>
          </div>
        </section>
      </b-upload>
    </b-field>
  </section>
</template>

<script>
export default {
  name: "DragAndDropUpload",
  data() {
    return {
      file: null
    };
  },
  watch: {
    file: function(file) {
      this.$emit("upload-file", this.file);
    }
  }
};
</script>
