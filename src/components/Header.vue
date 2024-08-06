<template>
    <header class="header">
        <div class="logo">
            <img src="../assets/myLogo.png" alt="Logo" class="">
        </div>
        <div class="contact">
            <button class="contact-btn" @click="scrollToBot()">Contact</button> 
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data() { 
        return {
           
        }
    },
    methods: {
        scrollToBot () {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }
    }
       
}

</script>

<style>
.header{
    display: flex;
    justify-content: space-between;
    padding: 1em 0 1em 0;
}
.logo{
    padding: 0 1em;
}
.logo img{
    height: 40px;
}
.contact-btn{
    padding: 1em 4em;
    background: none;
    border: 1px solid black;
    border-radius: 30px;
    cursor: pointer;
}
</style>