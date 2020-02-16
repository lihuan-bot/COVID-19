<template>
 <div class="content">
    <div class="echarts" ref="echarts">
      
  </div>
 </div>
</template>

<script>
import echarts from 'echarts'
export default {
name:'china',
props:{
  total:Array,
},
watch:{
  total:{
    deep:true,
    handler(newval, oldval){
      this.$nextTick(()=>{
        this.draw()
})
      
    }
  }
},
methods:{
  draw(){
    let myChart = echarts.init(this.$refs.echarts)
    let options = {
        title: {
        text: '全国疫情图'
        },
        tooltip: {
        triggerOn: "click",
        formatter: function(e, t, n) {
            return .5 == e.value ? e.name + "：有疑似病例" : e.seriesName + "<br />" + e.name + "：" + e.value
        }
         },
    visualMap: {
        min: 0,
        max: 1000,
        left: 26,
        bottom: 40,
        showLabel: !0,
        text: ["高", "低"],
        pieces: [{
            gte: 5000,
            label: "> 5000 人",
            color: "#7f1100"
        }, {
            gte: 1000,
            lte: 4999,
            label: "1000 - 4999 人",
            color: "#ff5428"
        }, {
            gte: 500,
            lt: 999,
            label: "500 - 999人",
            color: "#ff8c71"
        }, {
            gte: 100,
            lt: 499,
            label: "100-499人",
            color: "#ffd768"
        },{
            gte: 10,
            lt: 99,
            label: "10-99人",
            color: "#555555"
        },{
            gte: 1,
            lt: 10,
            label: "1-10人",
            color: "#096"
        },{
            value: 0,
            color: "#ffffff"
        }],
        show: !0
    },
    geo: {
        map: "china",
        roam: !1,
        scaleLimit: {
            min: 1,
            max: 2
        },
        zoom: 1.23,
        top: 60,
        label: {
            normal: {
                show: !0,
                fontSize: "14",
                color: "rgba(0,0,0,0.7)"
            }
        },
        itemStyle: {
            normal: {
                //shadowBlur: 50,
                //shadowColor: 'rgba(0, 0, 0, 0.2)',
                borderColor: "rgba(0, 0, 0, 0.2)"
            },
            emphasis: {
                areaColor: "#f2d5ad",
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                borderWidth: 0
            }
        }
    },
    series: [{
        name: "确诊病例",
        type: "map",
        geoIndex: 0,
        data: [ ]
    }]
}
options.series[0].data.push(...this.total)
  myChart.setOption(options)
  }
},
}
</script>

<style scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
}
.echarts {
  height: 640px;
  width: 640px;
}
</style>