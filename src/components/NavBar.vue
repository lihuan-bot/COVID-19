<template>
  <div id="navbar">
    <div>
      <p
        v-for="(item,index) in arr"
        @click="btn(index)"
        :class="{active:index==currentIndex}"
        :key="index"
      >{{item}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      currentIndex: 0,
      arr: ["疫情地图", "最新进展", "上海疫情"]
    }
  },
  methods:{
   btn(index){
     this.currentIndex=index
     this.$emit('navBar',index)
    }
  }
}
</script>

<style scoped>
#navbar div{
    /* padding: 0 10px; */
    display: flex;
    justify-content: center;
    color: darkkhaki;
    margin-bottom: 10px;
    position: fixed;
    left: 0;
    right: 0;
    top:0;
    z-index: 9;
    background-color: #fff;
}
#navbar p{
    text-align: center;
    font-size: 16px;
    flex-shrink: 0;
    padding: 10px;
    margin: 5px;
    
}
p:hover{
  cursor: pointer;
}
#navbar p.active{
    color: #ffff00;
    background-color: #000000;
}
</style>