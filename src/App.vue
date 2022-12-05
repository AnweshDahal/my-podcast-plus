<template>
  <v-app>
    <div>
      <HeaderVue></HeaderVue>
      <GreeterVue></GreeterVue>
      <Home :likedPodcasts="results" @searchPodcast="submit"></Home>
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
import HomeView from "./components/HomeView.vue";

export default {
  name: "App",
  components: {
    HeaderVue,
    MediaPlayer,
    GreeterVue,
    Home: HomeView,
  },

  created() {
    this.results = [];
  },

  methods: {
    async rss(feedUrl) {
      await api.rssFetch(feedUrl);
    },
    async submit(searchTerm) {
      this.response = await api.itunesSearch(searchTerm).then((res) => {
        this.results = [];
        res.results.forEach((element) => {
          // let response_ = {
          //   artistName: element.artistName,
          //   artworkUrl130: element.artworkUrl130,
          //   artworkUrl1100: element.artworkUrl1100,
          //   artworkUrl1600: element.artworkUrl1600,
          //   collectionCensoredName: element.collectionCensoredName,
          //   collectionExplicitness: element.collectionExplicitness,
          //   collectionId: element.collectionId,
          //   collectionName: element.collectionName,
          //   collectionViewUrl: element.collectionViewUrl,
          //   contentAdvisoryRating: element.contentAdvisoryRating,
          //   country: element.country,
          //   feedUrl: element.feedUrl,
          //   genres: element.genres,
          //   kind: element.kind,
          //   primaryGenreName: element.primaryGenreName,
          //   releaseDate: element.releaseDate,
          //   trackCensoredName: element.trackCensoredName,
          //   trackCount: element.trackCount,
          //   trackExplicitness: element.trackExplicitness,
          //   trackId: element.trackId,
          //   trackName: element.trackName,
          //   trackTimeMillis: element.trackTimeMillis,
          //   trackViewUrl: element.trackViewUrl,
          // };
          this.results.push(element);
        });
      });
    },
  },

  data() {
    return {
      greet: null,
      response: null,
      results: null,
    };
  },
};
</script>
<style>
html{
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden
}
* {
  font-family: "Inter", sans-serif !important;
}

.text-bold {
  font-family: inherit;
  font-weight: 700;
}

/* Vuetify Overrides */
.v-slider__track-container {
  height: 5px !important;
  border-radius: 10px !important;
  overflow: hidden;
  cursor: pointer !important;
}

.v-slider__track-fill {
  border-radius: 10px !important;
}

.v-slider__thumb {
  display: none !important;
}

.v-messages {
  display: none;
}

/* width */
::-webkit-scrollbar {
  width: 6px;
  /* padding: 2px; */
}

/* Track */
::-webkit-scrollbar-track {
  background: #fff;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #d1d1d1;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
