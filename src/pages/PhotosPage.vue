<script>
import Photo from '@/components/photo/Photo.vue';
import PhotoForm from '@/components/photo/PhotoForm.vue';
import PhotoDialog from '@/components/photo/PhotoDialog.vue';
import { mapActions, mapMutations } from 'vuex';

export default {
  name: 'PhotosPage',
  components: { PhotoDialog, Photo, PhotoForm },
  // data: () => ({
  //   photos: [],
  //   currentPhoto: {},
  //   dialogVisible: false,
  // }),
  mounted() {
    // this.fetchTodo();
    // this.$store.dispatch('fetchPhotos');
    this.fetchPhotos();
  },
  methods: {
    ...mapActions(['fetchPhotos']),
    ...mapMutations(['addPhoto']),
    // fetchTodo() {
    //   this.axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
    //     .then((response) => {
    //       this.photos = response.data;
    //     }).catch((error) => {
    //       console.error(error);
    //     });
    // },
    addPhoto(payload) {
      this.$store.dispatch('addPhoto', payload);
    },
    // openPhoto(photo) {
    //   this.currentPhoto = photo;
    //   this.dialogVisible = true;
    // },
  },
};
</script>

<template>
  <v-container>
    <PhotoForm @addPhoto="addPhoto" />
    <v-row>
<!--      <Photo-->
<!--          v-for="photo in $store.getters.getAllPhotos"-->
<!--          :key="photo.id"-->
<!--          v-bind:photo="photo"-->
<!--          @openPhoto="openPhoto"-->
<!--      />-->
      <Photo
          v-for="photo in $store.getters.getAllPhotos"
          :key="photo.id"
          v-bind:photo="photo"
      />
    </v-row>
<!--    <PhotoDialog :photo="currentPhoto" v-model="dialogVisible" />-->
    <PhotoDialog/>
  </v-container>
</template>

<style scoped>

</style>
