<template>
    <div class="project-container">
        <div class="project-img" @click="navigate()">
            <img :src="img" alt="" class="" width="100%" style="">
        </div>
        <div class="project-content">
            <h2>{{name}}</h2>
            <p>{{description}}</p>
            <div class="project-tag">
                <div v-for="(item,index) in tag" :key="index">
                {{item}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Project",
  methods: {
    navigate() {
       if (this.linkGit) {
        window.open(this.linkGit, '_blank');
      } else {
        return;
      }
    } 
  },
  props: {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    tag: {
        type: [String],
    },
    img: {
        type: String
    },
    linkGit: {
        type: String,
    }
  },
};
</script>

<style>
    .project-container{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        padding: 2em;
        width: 100vw;
    }
    .project-img{
        margin: 1em;
    }
    .project-img:hover img{
        box-shadow: 1px 1px 8px silver;
    }
    .project-img img {
        border-radius: 10px;
        cursor: pointer;
       
    }
    .project-content{
        text-align: left;
        margin: 1em;
        display: flex;
        flex-direction: column;
       
    }
    .project-content p {
        padding: 1em 0;
    }
    .project-tag{
        display: flex;
        gap: 1em;
        padding: 1em 0;
        flex-grow: 1;
        font-weight: 500;
    }
    @media (max-width: 1000px) {
         .project-container{
            grid-template-columns: repeat(1,1fr);
            padding: 0;
         }
    }
</style>