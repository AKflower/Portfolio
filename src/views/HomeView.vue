<template>
  <Header />
  <Intro />
  <About />
  <Projects />
  <Footer />
</template>

<script>
// @ is an alias to /src

import Header from '@/components/Header.vue'
import Intro from '@/components/Intro.vue'
import About from '@/components/About.vue'
import Projects from '@/components/Projects.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'HomeView',
  components: {
    Header, Intro, About, Projects,Footer
  },
  data () {
    return {
    
    }
  }
}
</script>
