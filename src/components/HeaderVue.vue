<template>
  <header class="px-6">
    <div class="logo"><span class="text-bold">My</span> Podcast+</div>
    <div class="actions">
      <v-btn class="mx-1 square" depressed
        ><v-icon color="#868686">mdi-plus</v-icon></v-btn
      >
      <v-btn class="mx-1 square" depressed
        ><v-icon color="#868686">mdi-magnify</v-icon></v-btn
      >
      <v-btn class="mx-1 square" depressed
        ><v-icon color="#868686">mdi-menu</v-icon></v-btn
      >
      <v-btn class="mx-1 square" depressed
        ><v-icon color="#EC3D43">mdi-heart</v-icon></v-btn
      >
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderVue",
};
</script>

<style>
header {
  display: flex;
  height: 85px;
  align-items: center;
  justify-content: space-between;
}

.square {
  min-width: 37px !important;
  border-radius: 6px;
  height: 37px !important;
  width: 37px !important;
  display: flex;
  align-items: center;
  justify-content: center;
}

.actions {
  display: flex;
}

.logo {
  font-family: "Manrope", sans-serif !important;
  font-size: 36px;
  line-height: 66px;
  display: flex;
  align-items: center;

  background: linear-gradient(90deg, #4b5dff 0%, #e752ff 50.52%, #ff3c3c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
</style>