<template>
  <div class="projects">
    <h1>MY PROJECTS</h1>
    <Project
      :description="item.description"
      :img="item.img"
      :tag="item.tag"
      :linkGit="item.linkGit"
      :name="item.name"
      v-for="(item, index) in projects"
      :key="index"
    />
  </div>
</template>

<script>
import Project from "@/components/Project.vue";
export default {
  name: "Projects",
  components: {
    Project,
  },
  data() {
    return {
      projects: [
        {
          name: "ABCD Mall",
          description:
            "The ABCD shopping center, located on the outskirts of Mumbai, was established by ABCD Developers Pvt. Ltd. It covers an area of 23,000 square meters, with a frontage of 210 meters, and was designed by Cooper and colleagues. Inside the shopping center, there is a 4-story R supermarket, covering 7,000 square meters per floor. The shopping center also features a 7-story parking lot. The owner of the shopping center wants to create a website to advertise the shopping center.",
          img: require("../assets/project/mall.gif"),
          tag: ["ASP.NET", "ReactJS", "PosgreSQL"],
          linkGit: 'https://github.com/AKflower/mall',
          
        },
        {
          name: "Cozy Haven",
          description:
            "Cozy Haven is a hotel management project aimed at honing web programming and design skills.",
          img: require("../assets/project/cozyhaven.gif"),
          tag: ["HTML", "CSS", "JavaScript"],
          linkGit: 'https://github.com/AKflower/Cozy-Haven',
        },
        {
          name: "ClinicSched",
          description:
            "ClinicSched is a clinic management website that supports online medical consultations. By combining WebRTC (Web Real-Time Communication) and Socket.io, ClinicSched enables users and doctors to interact via video calls for online medical examinations.",
          img: require("../assets/project/clinicsched.gif"),
          tag: ["MongoDB", "ExpressJS", "NodeJS", "ReactJS"],
          linkGit: "https://github.com/AKflower/Clinic-Sched",
        },
        {
          name: "Car Sale Service",
          description:
            "Car Sale Service is a comprehensive website dedicated to selling cars. It offers a wide range of vehicles, detailed descriptions, and user-friendly navigation to help customers find their ideal car easily. I created this website as a personal project to learn how to integrate VNPAY, a popular online payment gateway in Vietnam. Through this project, I aimed to gain practical experience in web development, enhance my programming skills, and understand the intricacies of online payment systems. The website not only serves as a platform for car sales but also as a testament to my learning journey and technical growth.",
          img: require("../assets/project/car.gif"),
          tag: ["MozngoDB", "ExpressJS", "NodeJS", "ReactJS"],
        },
        {
          name: "URL Shortener",
          description:
            "URL Shortener is my link shortening website. It allows users to easily shorten long URLs into more manageable and shareable links. With a simple and user-friendly interface, users can quickly generate short links and track their usage statistics. It's a convenient tool for anyone looking to simplify and optimize their online links.",
          img: require("../assets/project/shortLink.gif"),
          tag: ["MongoDB", "ExpressJS", "NodeJS", "EJS"],
          linkGit: 'https://github.com/AKflower/URLShortener',
        },
        {
          name: "Weather App",
          description:
            "Weather App is a website that provides accurate and up-to-date weather forecasts. Users can get real-time updates on temperature, humidity, wind speed, and precipitation for any location worldwide. With its simple and easy-to-use interface, Weather App helps you plan your day or week by offering reliable weather information and alerts.",
          img: require("../assets/project/weatherapp.gif"),
          tag: ["ReactJS", "NodeJS"],
          linkGit: 'https://github.com/AKflower/WeatherApp',
        },
        {
          name: "Train Management",
          description:
            "Train Management is a website designed for managing trains and railway stations. It offers features for scheduling, tracking, and coordinating train operations efficiently.",
          img: require("../assets/project/trainmanagement.gif"),
          tag: ["HTML", "CSS", "NodeJS", "ExpressJS", "PosgreSQL"],

        },
      ],
    };
  },
};
</script>

<style>
.projects{
  min-width: 40em;
}
.projects h1 {
  padding: 1em;
}
</style>