<template>
  <v-app>
    <div>
      <HeaderVue></HeaderVue>
      <GreeterVue></GreeterVue>
      <v-text-field ty v-model="searchTerm"></v-text-field>
      <v-btn @click="submit">Submit</v-btn>
      <div v-for="result in results" :key="result.trackId">
        {{result.trackCensoredName}}
        <v-btn @click="rss(result.feedUrl)">Feed: {{ result.feedUrl}}</v-btn>
      </div>
      <MediaPlayer></MediaPlayer>
    </div>
  </v-app>
</template>

<script>
import api from "./services/api";
// Components
import HeaderVue from "./components/HeaderVue.vue";
import MediaPlayer from "./components/MediaPlayer.vue";
import GreeterVue from "./components/GreeterVue.vue";
export default {
  name: "App",
  components: {
    HeaderVue,
    MediaPlayer,
    GreeterVue
  },

  created() {
    this.results = [];
    this.searchTerm = "";
  },

  methods: {
    async rss(feedUrl){
      console.log(feedUrl)
      await api.rssFetch(feedUrl)
    },
    async submit() {
      console.log("Test");
      this.response = await api
        .itunesSearch(this.searchTerm)
        .then((res) => {
          this.results = [];
          res.results.forEach((element) => {
            let response_ = {
              artistName: element.artistName,
              artworkUrl130: element.artworkUrl130,
              artworkUrl1100: element.artworkUrl1100,
              artworkUrl1600: element.artworkUrl1600,
              collectionCensoredName: element.collectionCensoredName,
              collectionExplicitness: element.collectionExplicitness,
              collectionId: element.collectionId,
              collectionName: element.collectionName,
              collectionViewUrl: element.collectionViewUrl,
              contentAdvisoryRating: element.contentAdvisoryRating,
              country: element.country,
              feedUrl: element.feedUrl,
              genres: element.genres,
              kind: element.kind,
              primaryGenreName: element.primaryGenreName,
              releaseDate: element.releaseDate,
              trackCensoredName: element.trackCensoredName,
              trackCount: element.trackCount,
              trackExplicitness: element.trackExplicitness,
              trackId: element.trackId,
              trackName: element.trackName,
              trackTimeMillis: element.trackTimeMillis,
              trackViewUrl: element.trackViewUrl,
            };
            this.results.push(response_);
          });
        });
      console.log(this.results);

    },
  },

  data() {
    return {
      greet: null,
      response: null,
      results: null,
      searchTerm: null,
    };
  },
};
</script>
<style>
  * {
    font-family: 'Inter', sans-serif !important;
  }

  .text-bold{
    font-weight: 700;
  }

  /* Vuetify Overrides */
  .v-slider__track-container{
    height: 5px !important;
    border-radius: 10px !important;
    overflow: hidden;
    cursor: pointer !important
  }

  .v-slider__track-fill{
    border-radius: 10px !important;
  }

  .v-slider__thumb{
    display: none !important;
  }

  .v-messages{
    display: none;
  }

</style>
