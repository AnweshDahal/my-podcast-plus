<template>
  <v-app>
    <div>
      <HeaderVue></HeaderVue>
      <GreeterVue></GreeterVue>
      <Home
        :likedPodcasts="likedPodcasts"
        :previousPodcasts="previousPodcasts"
        :history="history"
        :searchResults="results"
        @openPodcast="openPodcastFeed"
        @searchPodcast="submit"
      ></Home>
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
// import { createPodcast } from "@/firebase/index";

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
          this.results.push(element);
        });
      });
    },
    async openPodcastFeed(feedUrl) {
      console.log(feedUrl);
      this.rssFeed = await api
        .rssFetch(feedUrl)
        .then((res) => {
          console.log(res);
        })
        .error((err) => {
          console.error(err);
        });
      // console.log(feedUrl);
    },
  },

  data() {
    return {
      greet: null,
      response: null,
      results: null,
      likedPodcasts: [],
      previousPodcasts: [],
      history: [],
    };
  },
};
</script>
<style>
html {
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
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
