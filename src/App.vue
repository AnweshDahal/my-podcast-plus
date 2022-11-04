<template>
  <v-app>
    <div>
      <v-text-field ty v-model="searchTerm" ></v-text-field>
      <v-btn @click="submit">Submit</v-btn>
      {{ response }}
    </div>
  </v-app>
</template>

<script>
import itunesFetchService from './services/itunesFetchService'
export default {
  name: 'App',
  components: {
  },

  methods: {
    async submit(){
      this.response = await itunesFetchService.index(this.searchTerm)
    }
  },

  data: () => ({
    //
    response: null,
    searchTerm: null,
    result: null,
  }),
};
</script>
