<template>
  <div class="media-player-container">
    <div class="thumbnail-container">
      <img src="https://upload.wikimedia.org/wikipedia/en/0/0e/Klaatu_-_3.47_EST_cover.jpg" width="100px" height="100px" alt="" class="thumbnail" />
    </div>
    <div class="player-container">
      <div class="controls-container">
        <div class="title-container">
          <span class="title">Title</span>
        </div>
        <div class="control-container">
          <v-btn class="mx-1" icon
            ><v-icon color="#0071E3">mdi-rewind-10</v-icon></v-btn
          >
          <v-btn color="#0071E3" class="mx-1" fab depressed small
            ><v-icon color="#fff">mdi-play</v-icon></v-btn
          >
          <v-btn class="mx-1" icon
            ><v-icon color="#0071E3">mdi-fast-forward-10</v-icon></v-btn
          >
        </div>
        <div class="volume-control-container">
          <div class="volume-icon"><v-icon color="#0071E3">mdi-volume-high</v-icon></div>
          <div class="volume-slider" style="width: 160px"><v-slider dense style="margin-bottom: 0px" min="0" max="100" track-color="#f5f5f5" thumb-color="transparent" track-fill-color="#0071E3"></v-slider></div>
        </div>
      </div>
      <div class="progress-container">
        <div class="time-container" style="font-size: 13px">
          <div class="time-container__mins-left" style="color: #868686">18 mins left</div>
          <div class="time-container__total-mins text-bold" style="color: #868686;">XX:XX:XX/XX:XX:XX</div>
        </div>
        <div class="play-slider-container">
          <v-slider  min="0" max="100" track-color="#f5f5f5" thumb-color="transparent" track-fill-color="#0071E3" style="padding-inline: 0px; margin-bottom: 0px"></v-slider>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MediaPlayer",
};
</script>

<style>
.media-player-container {
  display: flex;
  width: 100%;
  /* justify-content: space-between; */
}
.thumbnail-container{
  width: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.player-container{
  display: flex;
  flex-direction: column;
  width: 92%;
}

.controls-container{
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

.control-container{
  display: flex;
  align-items: center;
  justify-content: center;
}

.volume-control-container{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title-container .title{
  font-family: Manrope, sans-serif !important;
  font-weight: 700;
  font-size: 20px;
}

.time-container{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.v-input--dense > .v-input__control > .v-input__slot{
  margin-bottom: 0px;
}
</style>