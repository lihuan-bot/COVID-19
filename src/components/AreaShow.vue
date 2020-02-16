<template>
  <div id="area">
        <ul>
          <li class="title">
            <span>地区</span>
            <span>新增确诊</span>
            <span>确诊</span>
            <span>死亡</span>
            <span>治愈</span>
            </li>
          <li v-for="(item,index) in areaData" :key="index">
            <span>{{item.name}}</span>
            <span>{{item.nconfirm}}</span>
            <span>{{item.confirm}}</span>
            <span>{{item.dead}}</span>
            <span>{{item.heal}}</span>
          </li>
          
        </ul>
        </div>
 
</template>

<script>
export default {
  name:'AreaShow',
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
.title {
  position: sticky;
  top:50px;
  background-color: #096;
}
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
  width: 100px;
}
li:nth-child(even) {
  background-color: #efefef;
}
</style>