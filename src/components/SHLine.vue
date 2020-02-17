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
  series:Array
},
mounted(){
  this.draw()
},
watch:{
  series:{
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
        text: '上海疫情趋势图'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['确诊', '治愈', '死亡']
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
            name: '死亡',
            type: 'line',
            stack: '总量',
            data: []
        },
        
    ]
    }
    let confirmedNum = []
    let curesNum = []
    let date = []
    let deathsNum = []
    this.series.map(item => {
      confirmedNum.unshift(item.confirmedNum)
      curesNum.unshift(item.curesNum)
      date.unshift(item.date)
      deathsNum.unshift(item.deathsNum)
    })
    option.xAxis.data = date
    option.series[0].data = confirmedNum
    option.series[1].data = curesNum
    option.series[2].data = deathsNum
    line.setOption(option)
  }
}
}
</script>

<style scoped>
.line {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
}
.mapline {
  width: 600px;
  height: 400px;
}
</style>