<template>
  <div class="greeter-container px-6">
    <v-btn depressed class="square home-btn me-3"
      ><v-icon color="#868686" style="font-size: 32px">mdi-home</v-icon></v-btn
    >
    <span class="greeter__greeting">{{ greeting }}&nbsp;<span class="greeter__greeting__name">{{ name }}</span>!</span>
  </div>
</template>

<script>
export default {
  name: "GreeterVue",
  data() {
    return {
      greeting: "Hey",
      name: "Anwesh",
    };
  },
};
</script>

<style>
.home-btn{
  height: 48px !important;
  width: 48px !important;
}
.greeter-container{
  display: flex;
  align-items: center;
}
.greeter__greeting {
  font-family: "Space Grotesk", sans-serif !important;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 42px;
  /* identical to box height */

  display: flex;
  align-items: center;

  color: #000000;
}

.greeter__greeting__name{
  font-family: inherit !important;
  font-weight: 700;
}
</style>