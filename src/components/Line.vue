<template>
  <div class="line">
    <div class="mapline" ref="mapline"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
name:'mapline',
props:{
date:Array,
confirm:Array,
dead:Array,
heal:Array,
suspect:Array

},
mounted(){
  this.draw()
},
watch:{
  confirm:{
    deep:true,
    handler(newval, oldval){
      this.$nextTick(()=>{
        this.draw()
})
      
    }
  }
},
methods:{
  draw () {
    let line = echarts.init(this.$refs.mapline)
    let option = {
      title: {
        text: '全国疫情新增趋势'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['确诊', '治愈', '疑似', '死亡']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: []
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '确诊',
            type: 'line',
            stack: '总量',
            data: []
        },
        {
            name: '治愈',
            type: 'line',
            stack: '总量',
            data: []
        },
        {
            name: '疑似',
            type: 'line',
            stack: '总量',
            data: []
        },
        {
            name: '死亡',
            type: 'line',
            stack: '总量',
            data: []
        },
        
    ]
    }
    
    option.xAxis.data = this.date
    option.series[0].data = this.confirm
    option.series[1].data = this.heal
    option.series[2].data = this.suspect
    option.series[3].data = this.dead
    line.setOption(option)
  }
}
}
</script>

<style>
.line {
  display: flex;
  justify-content: center;
  align-items: center;
}
.mapline {
  width: 600px;
  height: 600px;
}
</style>