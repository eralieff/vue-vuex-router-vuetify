<script>
export default {
  name: 'PhotoDialog',
  // props: {
  //   photo: {
  //     type: Object,
  //     required: true,
  //   },
  //   value: {
  //     type: Boolean,
  //     default: false,
  //   },
  // },
  // created() {
  //   this.dialogVisible = this.value;
  // },
  // data: () => ({
  //   dialogVisible: false,
  // }),
  // watch: {
  //   value(newValue) {
  //     this.dialogVisible = newValue;
  //   },
  //   dialogVisible(newValue) {
  //     this.$emit('input', newValue);
  //   },
  // },
  computed: {
    full_title() {
      // return `Название фотографии - ${this.photo.title}`;
      return `Название фотографии - ${this.$store.getters.getCurrentPhoto.title}`;
    },
  },
};
</script>

<template>
  <v-dialog
      v-model="$store.getters.getDialogVisible"
      max-width="600"
      @click:outside="$store.commit('hideDialog')"
  >
    <v-card>
      <v-card-title>
        {{full_title}}
      </v-card-title>
      <v-card-text>
        <v-img :src="$store.getters.getCurrentPhoto.url"/>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style scoped>

</style>
