<template>
  <div id="app">
    <div id="nav">
      <nav-bar @navBar="navBar"/>
    </div>
    <keep-alive>
      <router-view/>
    </keep-alive>
    
  </div>
</template>
<script>
import NavBar from '@/components/NavBar'
export default {
  name:'App',
  components:{
    NavBar
  },
  methods:{
    navBar(index) {
      switch(index) {
        case 0:
          this.$router.push('/map').catch(()=> { })
          break
        case 1:
          this.$router.push('/latest').catch(()=> { })
          break
        case 2:
          this.$router.push('/shanghai').catch(()=> { })
          break   
      }
      

    }
  }
}
</script>


