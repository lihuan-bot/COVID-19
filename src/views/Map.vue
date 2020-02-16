<template>
  <div id="map">
    <div class="update-time">更新时间 {{updateTime}}</div>
    <total-num  :total="totalNum" :today="todayNum"/>
    <my-echart :total="maptotal"/>
    <world :total="worldmap"/>
    <map-line :date="linedate" :confirm="lineconfirm" :dead="linedead"
     :heal="lineheal" :suspect="linesuspect" />
     <h2>中国疫情</h2>
    <area-show :areaData="areaData"/>
    
    
  </div>
</template>

<script>
import MyEchart from '@/components/MyEchart'
import TotalNum from '@/components/TotalNum'
import World from '@/components/World'
import MapLine from '@/components/Line'
import  AreaShow from '@/components/AreaShow'

import {getData} from '@/network/data'
export default {
  name:'Map',
   data(){
    return {
      totalData:{},
      maptotal:[],
      todayNum:{},
      totalNum:{},
      worldmap:[],
      updateTime:'',
      linedate:[],
      lineconfirm:[],
      linedead:[],
      lineheal:[],
      linesuspect:[],
      areaData:[]
    }
  },
   components:{
    MyEchart,
    TotalNum,
    World,
    MapLine,
    AreaShow
   
  },
  created(){
    this._getData()
  },
methods: {
  _getData() {
    getData().then(res =>{
      this.totalData  = res.data
      console.log(this.totalData);
      // 地区数据整合
      let showObj = {}
      this.totalData.areaTree[0].children.map(item => {
        showObj[item.name] = {
          nconfirm:item.today.confirm,
          confirm:item.total.confirm,
          heal:item.total.heal,
          dead:item.total.dead
        }
      })
      for (const key in showObj) {
        showObj[key].name = key
        this.areaData.push(showObj[key])
      }
      // 折线图数据整理
      this.totalData.chinaDayList.map(item => {
      this.linedate.push(item.date)
      this.lineconfirm.push(item.today.confirm)
      this.linedead.push(item.today.dead)
      this.lineheal.push(item.today.heal)
      this.linesuspect.push(item.today.suspect)
        
      })
      // 更新时间
      this.updateTime = this.totalData.lastUpdateTime
      // 中国整体数据整理
      this.todayNum = this.totalData.chinaTotal.today
      this.totalNum = this.totalData.chinaTotal.total
    // 世界地图数据整理
    let worldObj = {}
    this.totalData.areaTree.map(item => {
        worldObj[item.name] = {
          value:item.total.confirm
        }
    })
    this.worldmap = []
    for(let key in worldObj) {
      worldObj[key].name = key
      this.worldmap.push(worldObj[key])
    }
      // 中国地图数据整理
      let obj = {}
      this.totalData.areaTree[0].children.forEach(item => {
       obj[item.name] = {
          // id: item.id,
          value: item.total.confirm
          }
        });
        let arr = []
        for (const key in obj) {
          obj[key].name = key
          arr.push(obj[key]) 
          }
          this.maptotal  = arr
}).catch(err=> {
   console.log(err);
  
})
  }
}

}
</script>

<style>
#map {
  margin-top: 80px;
}
.update-time {
  width: 400px;
  text-align: center;
  margin: 10px 30%;
  color: chocolate;
}
h2 {
  text-align: center;
}
</style>