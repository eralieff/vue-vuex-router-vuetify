<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Photo',
  props: {
    photo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapMutations(['setCurrentPhoto', 'showDialog', 'hideDialog']),
    openPhoto() {
      // this.$emit('openPhoto', this.photo);
      // this.$store.commit('setCurrentPhoto', this.photo);
      // this.$store.commit('showDialog');
      this.setCurrentPhoto(this.photo);
      this.showDialog();
    },
  },
};
</script>

<template>
  <v-col cols="4">
    <v-card @click="openPhoto">
      <v-card-title>{{photo.title}}</v-card-title>
      <v-card-text>
        <v-img width="200" height="200" :src="photo.url"/>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<style scoped>

</style>
