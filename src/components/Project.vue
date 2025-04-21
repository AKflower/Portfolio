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
            <div class="btn-demo-container">
                <button @click="navigate()">Preview</button>
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
        padding: 1em 0;
        width: 100vw;
        gap:1em;
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
        margin: 1em 1.5em 1em 1em;
        display: flex;
        flex-direction: column;
        position: relative;

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
        flex-wrap: wrap;
    }
    .btn-demo-container {
       text-align: right;
    }
    .btn-demo-container button{
        border-radius: 10px;
        font-size: 1.1em;
        border: none;
        cursor: pointer;
        padding: .5em 1em;
        background: black;
        color: white;
    }
    @media (max-width: 1000px) {
         .project-container{
            grid-template-columns: repeat(1,1fr);
            padding: 0;
         }
         .btn-demo-container button{
            width: 100%;
         }
    }
</style>
