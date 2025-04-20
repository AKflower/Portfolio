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
          name: "PickleZone",
          description: "PickleZone is a court booking platform specifically designed for pickleball enthusiasts. It allows users to find and book courts easily, manage their schedules, and receive real-time updates. The system includes features like time slot management, court availability tracking, and user authentication for both players and admins.",
          img: require("../assets/project/pickleZone.gif"),
          tag: ["Next.js", "ShadcnUI", "TailwindCSS", "Nodejs", "ExpressJs", "PostgreSQL"],
          linkGit: 'https://pickle-zone-customer.vercel.app/',
        },
        {
          name: "Decide For Me",
          description: `Decide for me is a fun little project built to practice animations and sound effects on the web.
It uses GSAP for smooth, playful animations and Howler.js to handle interactive sound.

The app helps you make decisions when you're feeling indecisive — just tap and let fate choose for you!

And if you’re an HR manager, why not let Decide for me help you decide whether to hire me? 😉
(Hint: it usually picks “Yes”!)

`,
          img: require("../assets/project/decideforme.gif"),
          tag: ["ReactJS", "GSAP", "HowlerJS"],
          linkGit: 'https://www.decideforme.fun/',
        },
        {
          name: "Easy English",
          description: "Easy English is an online learning platform designed to help users improve their English skills through interactive lessons and speaking practice. The system integrates speech recognition technology to support spoken exercises and utilizes Large Language Models (LLMs) to evaluate and provide detailed feedback on writing assignments, including grammar, vocabulary, and overall structure.",
          img: require("../assets/project/easyEnglish.gif"),
          tag: ["ReactJS", "TailwindCSS", "Nodejs", "ExpressJs", "PostgreSQL"],
          linkGit: 'https://easy-english-akflower.vercel.app/',

        },
        {
          name: "SmartDine",
          description: "SmartDine is an intelligent restaurant management system that simplifies table booking, order processing, and customer management. It integrates the Gemini API to generate AI-powered menu set suggestions based on completed orders and customer behavior, helping restaurants offer personalized dining experiences and optimize menu planning.",
          img: require("../assets/project/smartDine.gif"),
          tag: ["Next.js", "ShadcnUI", "TailwindCSS", "Nodejs", "ExpressJs", "PostgreSQL"],
          linkGit: 'https://smart-dine-customer.vercel.app/',
        },
        {
          name: "I Love HCMUT",
          description:
            `"I Love HCMUT" is a small website I created to capture and preserve my journey at Ho Chi Minh City University of Technology. There's not much more to say — the name says it all!`,
          img: require("../assets/project/ilovehcmut.gif"),
          tag: ["HTML", "CSS", "JS"],
          linkGit: 'https://www.ilovehcmut.online/',

        },

        {
          name: "Pong Game",
          description:
            "The Pong Game is a simple project that I learned from YouTube, and I have improved it by adding a two-player mode. This project helped me learn the basics of HTML5 game programming, such as drawing with canvas, collision handling, and more.",
          img: require("../assets/project/ponggame.gif"),
          tag: ["HTML", "CSS", "JS"],
          linkGit: 'https://akflower.github.io/PongGame/',

        },
        {
          name: "Color Seeker Game",
          description:
            "Color Seeker is a simple yet challenging game where you need to find the tile with a slightly different color among a grid of similar-colored tiles. With each level, the grid size increases and the colors become harder to distinguish, requiring keen attention and sharp observation skills. Quickly spot the different tile before time runs out and advance through the levels to achieve a high score!",
          img: require("../assets/project/colorSeeker.gif"),
          tag: ["HTML", "CSS", "JS"],
          linkGit: 'https://akflower.github.io/Color-Seeker/',

        },
        {
          name: "Event Hub",
          description:
            "EventHub is a comprehensive solution that helps you easily manage every aspect of your event, from planning and promotion to ticket sales and attendee engagement. With its user-friendly interface and powerful features, EventHub empowers you to create memorable experiences for both organizers and attendees.",
          img: require("../assets/project/eventhub.gif"),
          tag: ["NodeJS", "ExpressJS", "ReactJS", "PosgreSQL"],
          linkGit: 'https://event-hub-dksolution.vercel.app/',

        },
        {
          name: "GoCar",
          description:
            "The GoCar online car rental system is a comprehensive solution developed with the primary goal of creating a platform that quickly, easily, and efficiently connects users who need to rent a car with car rental service providers. The system is designed to optimize the user experience, from vehicle search to booking management.",
          img: require("../assets/project/gocar.gif"),
          tag: ["NodeJS", "ExpressJS", "ReactJS", "PosgreSQL"],
          linkGit: 'https://github.com/AKflower/GoCar',

        },
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
          linkGit: 'https://akflower.github.io/Cozy-Haven/',
        },
        {
          name: "ClinicSched",
          description:
            "ClinicSched is a clinic management website that supports online medical consultations. By combining WebRTC (Web Real-Time Communication) and Socket.io, ClinicSched enables users and doctors to interact via video calls for online medical examinations.",
          img: require("../assets/project/clinicsched.gif"),
          tag: ["MongoDB", "ExpressJS", "NodeJS", "ReactJS"],
          linkGit: "https://github.com/AKflower/Clinic-Sched",
        },
        // {
        //   name: "Car Sale Service",
        //   description:
        //     "Car Sale Service is a comprehensive website dedicated to selling cars. It offers a wide range of vehicles, detailed descriptions, and user-friendly navigation to help customers find their ideal car easily. I created this website as a personal project to learn how to integrate VNPAY, a popular online payment gateway in Vietnam. Through this project, I aimed to gain practical experience in web development, enhance my programming skills, and understand the intricacies of online payment systems. The website not only serves as a platform for car sales but also as a testament to my learning journey and technical growth.",
        //   img: require("../assets/project/car.gif"),
        //   tag: ["MongoDB", "ExpressJS", "NodeJS", "ReactJS"],
        // },
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
          linkGit: 'https://akflower.github.io/WeatherApp/',
        },
        // {
        //   name: "Train Management",
        //   description:
        //     "Train Management is a website designed for managing trains and railway stations. It offers features for scheduling, tracking, and coordinating train operations efficiently.",
        //   img: require("../assets/project/trainmanagement.gif"),
        //   tag: ["HTML", "CSS", "NodeJS", "ExpressJS", "PosgreSQL"],

        // },
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
@media (max-width: 1000px) {
  .projects{
    min-width: 0;
  }
}
</style>
