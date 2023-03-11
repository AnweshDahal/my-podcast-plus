<template>
  <div class="home-container px-6 mt-9">
    <v-row class="home">
      <v-col class="left-container" cols="8">
        <div class="saved-podcast">
          <div class="saved-podcast__title">
            <h2 class="saved-podcast__title-text">
              Saved&nbsp;<span class="text-bold mr-2">Podcasts</span>
              <v-icon color="#EC3D43">mdi-heart</v-icon>
            </h2>

            <v-row
              class="saved-podcasts-grid px-0 mt-3"
              v-if="likedPodcasts[0]"
            >
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
            <v-row class="saved-podcast-grid px-0 mt-3" v-else>
              <v-col cols="12" class="alternative-grid-elements">
                <span
                  >Looks like you have not saved any podcasts, save some
                  podcasts to view them here</span
                >
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
            <v-row class="px-0 mt-3" v-if="previousPodcasts[0]">
              <v-col
                cols="3"
                class="mr-4"
                v-for="previousPodcast in previousPodcasts"
                :key="previousPodcast.collectionId"
                style="width: 200px; max-width: 200px"
              >
                <v-img
                  :src="previousPodcast.artworkUrl100"
                  min-width="200"
                  max-width="200"
                  height="200"
                  class="history-podcast__thumbnail"
                ></v-img>
                <h4 class="history-podcast__name mt-3">
                  {{ previousPodcast.collectionName }}
                </h4>
              </v-col>
            </v-row>
            <v-row class="saved-podcast-grid px-0 mt-3" v-else>
              <v-col cols="12" class="alternative-grid-elements">
                <span
                  >Looks like you have not listened to any podcasts, view some
                  podcasts to see them here</span
                >
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
            <v-text-field
              class="searchbar"
              v-model="searchQuery"
              @keyup.enter="searchPodcast"
              dense
              outlined
              placeholder="Press Enter to Search..."
              clearable
            ></v-text-field>
          </div>
          <div class="search-container__results">
            <div
              class="search-container__result"
              v-for="searchResult in searchResults"
              :key="searchResult.collectionId"
            >
              <div class="result__left">
                <v-img
                  :src="searchResult.artworkUrl60"
                  height="60"
                  width="60"
                  class="result__thumbnail"
                ></v-img>
              </div>
              <div class="result__right">
                <div class="result__title">
                  <span
                    @click="openPodcast(searchResult.feedUrl)"
                    style="cursor: pointer; font-family: inherit"
                    >{{ searchResult.trackName }}</span
                  >
                </div>
                <div class="result__save-container">
                  <!-- <v-btn icon><v-icon color="#EC3D43">mdi-heart</v-icon></v-btn> -->
                  <span class="result__artist">{{
                    searchResult.artistName
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      searchQuery: null,
    };
  },
  methods: {
    searchPodcast() {
      this.$emit("searchPodcast", this.searchQuery);
    },
    openPodcast(feedUrl) {
      this.$emit("openPodcast", feedUrl);
    },
  },
  props: {
    likedPodcasts: Array,
    previousPodcasts: Array,
    searchResults: Array,
  },
  emits: ["searchPodcast", "openPodcast"],
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

.home-container .home .left-container {
  overflow-y: scroll !important;
  overflow-x: hidden;
  max-height: 600px;
}

.searchbar {
  font-family: Inter, sans-serif !important;
  border-radius: 8px;
  padding: 8px;
}

.search-container__results {
  height: 400px;
  overflow-y: scroll;
  overflow-x: hidden;
}

.search-container__result {
  display: flex;
  align-items: flex-start;
  padding: 16px;
  background-color: #f5f5f5;
  border-radius: 10px;
  margin-bottom: 20px;
}

.result__thumbnail {
  border-radius: 8px;
}

.result__title span {
  font-family: "Manrope", "Inter", sans-serif !important;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;

  color: #000000;
}

.result__right {
  display: flex;
  flex-direction: column;
  height: 60px;
  margin-left: 20px;
}

.result__artist {
  font-family: "Space Grotesk", Manrope, Inter, sans-serif !important;
}

.alternative-grid-elements {
  display: flex;
  padding: 16px;
  align-items: center;
  justify-content: center;
  height: 150px;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: #f5f5f5;
}
</style>