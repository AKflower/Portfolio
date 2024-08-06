<template>
    <div class="about">
        <div class="column">
            <h1 class="about-header">ABOUT ME</h1>
            <p class="">I am a youthful and creative frontend developer, fueled by passion and a zest for innovation. I aspire to leverage my skills to craft intriguing, visually appealing, and highly functional software.</p>
            <div class="skillContainer">
                <span v-for="(skill, index) in skills" :key="index"
                @mouseleave="hoveredSkill=null" 
                @mouseover="hoveredSkill=skills[index]" 
                :style="(hoveredSkill && skill.name==hoveredSkill.name) && styleSpan">
                    {{skill.name}}
                </span>
            </div>
            
        </div>
        <div class="column" :style="{display:'flex',flexDirection:'column',gap:'1em',alignItems: hoveredSkill? 'center' : '',justifyContent:'center'}">
            <transition name="hide" >
            <div class="about-container" v-if="!hoveredSkill" style="top:30%;left:10%">
                <h1 style=" color:#058bac;">{{'<Experience>'}}</h1>
                <h3 style="color:#ffc107" v-tooltip="'I have been a front-end developer at KTHub for a year, developing the CRM system for The ENEST English language center.'">
                    {{'<KTHub role="Front-end Developer" exp="1 year" />'}}
                </h3>
                <h1 style=" color:#058bac;">{{'</Experience>'}}</h1>
            </div>
            </transition>
            <transition name="hide" >
            <div class="about-container" v-if="!hoveredSkill" style="top:10%;left:20%">
                <h1 style=" color:yellow;">{{'<Education>'}}</h1>
                <h3 style="color:#7bccf0" v-tooltip="'I honed my coding skills and deepened my tech knowledge with a 4-year Computer Science degree from Ho Chi Minh City University of Technology (HCMUT).'">
                    {{'<HCMUT degree="Bachelor of Computer Science" />'}}
                </h3>
                <h1 style=" color:yellow;">{{'</Education>'}}</h1>
            </div>
            </transition>
            <transition name="hide">
             <div class="about-container" v-if="!hoveredSkill" style="bottom:20%;left:30%">
                <h1 style=" color:silver;">{{'<Hobbies>'}}</h1>
                <h3 style="color:#c4fbe7" v-tooltip="'Writing to explore myself.'">{{'<Write/>'}}</h3>
                <h3 style="color:#ECCEAE" v-tooltip="'Reading gives us someplace to go when we have to stay where we are.'">{{'<ReadBook/>'}}</h3>
                <h3 style="color:#FF8225">{{'<Photo/>'}}</h3>
                <h3 style="color:#FFF">{{'<Sing/>'}}</h3>
                <h1 style=" color:silver;">{{'</Hobbies>'}}</h1>
            </div>
            </transition>
            <transition name="fade-slide">
            <div class="image-cover" v-if="hoveredSkill">
                <img :src="hoveredSkill.logo" />
            </div>
            </transition>
            <transition name="fade1-dropdown">
                <p v-if="hoveredSkill" :style="{margin:'3em 0'}">{{hoveredSkill.description}}</p>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
  name: "About",

  data() {
    return {
      skills: [
        {
          name: "HTML",
          logo: require("../assets/html.png"),
          color: "#ea5d01",
          description:
            "Every tag is perfectly placed, making the internet a better place, one <div> at a time!",
        },
        {
          name: "CSS",
          logo: require("../assets/css.png"),
          color: "#274de5",
          description:
            "Whether it's a slick modern look or a cozy vintage vibe, I style websites with the precision of a fashion designer.",
        },
        {
          name: "JavaScript",
          logo: require("../assets/javascript.png"),
          color: "#f0bd22",
          description: "If you can dream it, I can script it",
        },
        {
          name: "React",
          logo: require("../assets/react.png"),
          color: "#0a7ea4",
          description:
            "State and props are my magic spells, and every app I build is pure sorcery!",
        },
        {
          name: "Next.js",
          logo: require("../assets/nextjs.png"),
          color: "#000",
          description:
            "Because even my code likes to stay one step ahead of the curve!",
        },
        {
          name: "Vue",
          color: "#40b883",
          logo: require("../assets/vue.png"),
          description:
            "Vue.js and I are like a perfect duet—while Vue handles the magic, I bring the charm. Together, we turn code into fireworks!",
        },
        {
          name: "Angular",
          color: "#dd0032",
          logo: require("../assets/angular.png"),
          description:
            "Angular: Where my code and your user experience get together for a high-five!",
        },

        {
          name: "Node.js",
          logo: require("../assets/nodejs.png"),
          color: "#428f3c",
          description:
            "My server runs faster than you can say 'callback hell'—and it actually enjoys it",
        },
        {
          name: "ExpressJS",
          logo: require("../assets/expressjs.png"),
          color: "#323232",
          description:
            "Turning API requests into lightning bolts—minus the static!",
        },

        {
          name: "Tailwind",
          logo: require("../assets/tailwindcss.png"),
          color: "#36bff8",
          description:
            "I design so fast, it feels like a whirlwind of utility classes!",
        },
        {
          name: "NestJS",
          logo: require("../assets/nestjs.png"),
          description: "My code roars with power grhhhhh...",
          color: "#e11d4c",
        },
        {
          name: "MUI",
          logo: require("../assets/mui.png"),
          color: "#0080ff",
          description:
            "Crafting UIs so sleek, even the Material Design has a touch of class",
        },
      ],
      hoveredSkill: null,
    };
  },
  methods: {
    handleMouseOver(index) {
      this.hoveredSkill = this.skills[index];
    },
  },
  computed: {
    styleSpan() {
      return this.hoveredSkill
        ? {
            background: this.hoveredSkill.color,
            fontWeight: 700,
            transform: "scale(1.1)",
          }
        : {};
    },
  },
};
</script>

<style>
.about {
  background: #565656;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: relative;
}
.about-header {
  font-weight: 800;
}
.about-container{
    position: absolute;
}

.about-container h1 {
  margin: 0 !important;
}
.about-container h3 {
  padding: 0 0 0 2em;
}
.column {
  text-align: left;
  padding: 6em 2em 2em 2em;
  color: white;
  row-gap: 2em;
  position: relative;
}
.column h1 {
  margin-bottom: 2em;
  font-size: 2em;
}
.column p {
  font-size: 1.4em;
}
.skillContainer {
  margin: 1em 0;
  font-size: 1.2em;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.5em;
}
.skillContainer span {
  padding: 0.2em 0.5em;
  background: silver;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
}
.image-cover {
  width: 15em;

  max-height: 20em;
  transition: all 1s ease; /* Thêm transition ở đây */
}
.image-cover img {
  width: 15em;
  height: auto;
}
.hide-enter-active {
  transition: all 1s ease;
  opacity: 0;
  transform: scale(0.5);
}
.hide-enter-to{
    opacity: 1;

    transform: scale(1);
}
.hide-leave-active {
  transition: all 0.2s ease;
   transform: scale(1); 
    opacity: 1;
}
.hide-leave-to {
     opacity: .5;
   transform: scale(.1); 
}
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s ease;
  transform: translateX(100%);
  opacity: 0.5;
}

.fade-slide-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.fade-slide-leave-to /* .fade-slide-leave-active in <2.1.8 */ {
  opacity: 0;
  transform: translateX(100%);
}
.fade1-dropdown-enter-active,
.fade1-dropdown-leave-active {
  opacity: 0.5;
  transition: all 0.5s ease;
  transform: translateY(-50%);
}
.fade1-dropdown-enter-to {
  opacity: 1;
  transform: translateY(0%);
}
.fade1-dropdown-leave-to {
  opacity: 0;
  /* transform: translateY(30%) */
}
.d-flex {
  display: flex;
  flex-direction: row;
}
.center {
  align-items: center;
}
.custom-tooltip {
  display: none;
  position: absolute;
  background-color: #333;
  color: #fff;
  padding: 5px;
  font-weight: 200;
  border-radius: 3px;
  /* white-space: nowrap; */
  z-index: 1000;
  max-width: 20em;
}
</style>