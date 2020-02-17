<template>
    <div id="area">
        <ul>
          <li class="title">
            <span>地区</span>
            <span>确诊</span>
            <span>死亡</span>
            <span>治愈</span>
            </li>
          <li v-for="(item,index) in areaData" :key="index">
            <span>{{item.name}}</span>
            <span>{{item.confirmedNum}}</span>
            <span>{{item.deathsNum}}</span>
            <span>{{item.curesNum}}</span>
          </li>
          
        </ul>
        </div>
</template>

<script>
export default {
  neme:'show',
  props:{
    areaData:Array
  }
}
</script>

<style>
#area {
  display: flex;
  justify-content: center;
}
/* .title {
  position: sticky;
  top:50px;
  background-color: #096;
} */
 ul,li {
  list-style: none;
  margin: 0;
  padding: 5px;
}
li {
  display: flex;
  
}
span {
  flex: 1;
  display: block;
  width: 150px;
}
li:nth-child(odd) {
  background-color: #cccccc;
}
</style>