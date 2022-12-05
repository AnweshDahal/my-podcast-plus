<template>
  <div class="home-container px-6 mt-9">
    <v-row class="home">
      <v-col class="left-container" cols="8" >
        <div class="saved-podcast">
          <div class="saved-podcast__title">
            <h2 class="saved-podcast__title-text">
              Saved&nbsp;<span class="text-bold mr-2">Podcasts</span>
              <v-icon color="#EC3D43">mdi-heart</v-icon>
            </h2>
            <v-row class="saved-podcasts-grid px-0 mt-3">
              <v-col
                cols="3"
                class="mr-4"
                v-for="likedPodcast in likedPodcasts"
                :key="likedPodcast.collectionId"
                style="width: 200px; max-width: 200px"
              >
                <v-img
                  :src="likedPodcast.artworkUrl100"
                  min-width="200"
                  max-width="200"
                  height="200"
                  class="saved-podcast__thumbnail"
                ></v-img>
                <h4 class="saved-podcast__name mt-3">
                  {{ likedPodcast.collectionName }}
                </h4>
              </v-col>
            </v-row>
          </div>
        </div>
        <div class="history-podcast mt-4">
          <div class="history-podcast__title">
            <h2 class="history-podcast__title-text">
              Previously&nbsp;<span class="text-bold mr-2">Listened</span>
              <v-icon color="#0071E3">mdi-history</v-icon>
            </h2>
            <v-row class="px-0 mt-3">
              <v-col
                cols="3"
                class="mr-4"
                v-for="likedPodcast in likedPodcasts"
                :key="likedPodcast.collectionId"
                style="width: 200px; max-width: 200px"
              >
                <v-img
                  :src="likedPodcast.artworkUrl100"
                  min-width="200"
                  max-width="200"
                  height="200"
                  class="history-podcast__thumbnail"
                ></v-img>
                <h4 class="history-podcast__name mt-3">
                  {{ likedPodcast.collectionName }}
                </h4>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-col>
      <v-col
        cols="4"
        style="
          border-left: 1px solid #d9d9d9;
          background-color: #fff;
          z-index: 100;
        "
      >
        <div class="search-container" style="">
          <div class="search-container__title">
            <h2 class="search-container__title-text">
              <div class="search-container__title-text--bold">Search</div>
              &nbsp;Podcast
            </h2>
            <p class="search-container__title--subtitle">
              powered by&nbsp;
              <span class="search-container__title--bold-subtitle">iTunes</span>
            </p>
          </div>
          <div class="search-container-searcbar">
            <v-text-field class="searchbar" v-model="searchQuery" @keyup.enter="searchPodcast" dense outlined></v-text-field>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data(){
    return {
      searchQuery: null,
    }
  },
  methods: {
    searchPodcast(){
      this.$emit('searchPodcast', this.searchQuery)
    }
  },
  props: {
    likedPodcasts: Array,
    previousPodcasts: Array,
  },
  emits: ["searchPodcast"],
};
</script>

<style>
.home-container {
  max-height: 768px !important;
  padding-bottom: 116px;
}
.saved-podcast__title-text,
.history-podcast__title-text {
  font-family: "Space Grotesk", sans-serif !important;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height */

  display: flex;
  align-items: center;

  color: #000000;
}

.saved-podcast__thumbnail,
.history-podcast__thumbnail {
  border-radius: 14px;
  aspect-ratio: 1/1;
}

.saved-podcast__name,
.history-podcast__name {
  font-family: "Manrope", sans-serif !important;
  font-weight: 700 !important;
  font-size: 15px;
  line-height: 20px;
  text-align: center;

  color: #000000;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
}

.saved-podcast__name:hover,
.history-podcast__name:hover {
  color: #333;
}

.search-container__title {
  width: max-content;
}

.search-container__title--subtitle {
  font-family: "Inter" !important;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  display: flex;
  align-items: center;
  justify-content: flex-end;

  color: #868686;
}

.search-container__title--bold-subtitle {
  font-weight: 700;
}

.search-container__title-text--bold {
  font-family: inherit;
  font-weight: 700;
}

.search-container__title-text {
  font-family: "Manrope", sans-serif !important;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
  display: flex;
  align-items: center;

  background: linear-gradient(90deg, #4b5dff 0%, #e752ff 50.52%, #ff3c3c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.home-container .home .left-container{
  overflow-y: scroll !important;
  overflow-x: hidden;
  max-height: 600px;
}

.searchbar{
  font-family: Inter, sans-serif !important;
}
</style>