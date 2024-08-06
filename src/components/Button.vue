<template>
    <div class="btn-container" @mouseenter="text='Copy'" @mouseleave="text='anhkhoabqv@gmail.com'" @click="copyToClipBoard()">
        
       <font-awesome-icon :icon="['fas', 'envelope']" v-if="text=='anhkhoabqv@gmail.com'"/>
        <span class="" v-if="text=='anhkhoabqv@gmail.com'"> |</span>
        {{text}}
    </div>
</template>

<script>
export default {
    name: 'Button',
    components: {
    },
    props: {
        name: {
            type: String,
        },
        nameHover: {
            type: String,
        },
    },
    data () {
        return {
            text: 'anhkhoabqv@gmail.com'
        }
    },
    methods: {
        copyToClipBoard () {
            navigator.clipboard.writeText('anhkhoabqv@gmail.com');
            this.text='Copied!'
        }
    }
}
</script>

<style>
    .btn-container{
        border: 1px solid white;
        width: 14em;
        margin: 1em auto 0 auto;
        padding: 1em;
        background: linear-gradient(to right, white 50%, #000000 50%);
        background-size: 200% 100%;
         background-position: right;
        transition: background-position 0.5s ease;
        cursor: pointer;
    }
    .btn-container:hover {
        background-position: left;
        color: #000;
        border: 1px solid white;
    }
</style>