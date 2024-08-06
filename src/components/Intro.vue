<template>
  <div
    class="intro"
    :style="
      night
        ? { background: 'black', color: 'white' }
        : { background: 'white', color: 'black' }
    "
  >
    <p class="">Hello, I'm Nguyen Anh Khoa</p>
    <div style="min-height: 2.2em"><AutoTyperVue componentTag="h2" :text="text" /></div>
    <div
      class="avt-container"
      @mouseover="night = true"
      @mouseleave="night = false"
    >
      <!-- <img id="sun" src="../assets/icons/Group 2.svg" width="40em" height="40em"/> -->
      <div class="avt"></div>
      <!-- <img id="moon" src="../assets/icons/Group 1.svg" width="40em" height="40em"/> -->
    </div>
    <p class="">Logic + Creativity = <span class="bold">Me</span></p>
    <!-- <img src="../assets/Avt.jpg" alt="" class=""> -->
  </div>
</template>

<script>
import { AutoTyperVue } from "auto-typer-vue3";
export default {
  name: "Intro",
  components: {
    AutoTyperVue,
  },
  data() {
    return {
      night: false,
      text: ["Front-end Developer", "Web Designer","Mentor"],
    };
  },
};
</script>

<style>
.intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
  padding: 1em 0;
  height: 100vh;
}
.intro p {
  font-size: 1.5em;
}
.avt-container {
  display: flex;
  align-items: center;
  gap: 2em;
}
.avt {
  background-image: url("../assets/avt3.jpg");

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: white;
  width: 20em;
  height: 20em;
  /* background: silver; */
  border-radius: 50%;
  transition: all 0.2s ease;
}
.avt-container:hover #sun {
  transform: translateY(10px);
}
.avt-container:hover .avt {
  transform: rotateY(180deg);
  background-image: url("../assets/avt2.jpg");
}
.bold {
  font-weight: 800;
}
</style>
