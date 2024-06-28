<script>
export default {
  name: 'PhotoForm',
  data: () => ({
    title: '',
    img: null,
  }),
  methods: {
    addPhoto() {
      const reader = new FileReader();
      reader.onload = () => {
        const photo = {
          id: Date.now(),
          title: this.title,
          url: reader.result,
        };
        this.$emit('addPhoto', photo);
      };
      reader.readAsDataURL(this.img);
    },
  },
};
</script>

<template>
  <v-container>
    <v-row class="d-flex">
      <v-text-field label="Image name" v-model="title"/>
      <v-file-input label="Image input" v-model="img"/>
      <v-btn @click="addPhoto">Добавить</v-btn>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>
