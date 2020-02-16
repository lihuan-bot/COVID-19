<template>
 <div class="content">
    <div class="echarts" ref="echart">
      
  </div>
 </div>
</template>

<script>
import echarts from 'echarts'
import nameMap from '../map/nameMap.json'
export default {
name:'world',
props:{
  total:Array,
},
mounted(){
  this.draw()
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
    let myChart = echarts.init(this.$refs.echart)
    let options = {
        title: {
        text: '世界疫情图'
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
        pieces: [
         {
            gte: 100,
            label: ">100人",
            color: "#7f1100"
        },{
            gte: 10,
            lt: 100,
            label: "10-100人",
            color: "#ff5428"
        },{
            gte: 1,
            lt: 9,
            label: "1-9人",
            color: "#ff8c71"
        },{
            value: 0,
            color: "#ffffff"
        }],
        show: !0
    },
    geo: {
        map: "world",
        roam: !1,
        scaleLimit: {
            min: 1,
            max: 2
        },
        zoom: 1.23,
        top: 60,
        label: {
            normal: {
                show: false,
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
    nameMap:nameMap,
    series: [{
        name: "确诊病例",
        type: "map",
        geoIndex: 0,
        data: [{
      "name": "阿富汗",
      "value": 0
    },
    {
      "name": "安哥拉",
      "value": 0
    },
    {
      "name": "阿尔巴尼亚",
      "value": 0
    },
    {
      "name": "阿尔及利亚",
      "value": 0
    },
    {
      "name": "阿根廷",
      "value": 0
    },
    {
      "name": "亚美尼亚",
      "value": 0
    },
    {
      "name": "澳大利亚",
      "value": 0
    },
    {
      "name": "奥地利",
      "value": 0
    },
    {
      "name": "阿塞拜疆",
      "value": 0
    },
    {
      "name": "布隆迪",
      "value": 0
    },
    {
      "name": "比利时",
      "value": 0
    },
    {
      "name": "贝宁",
      "value": 0
    },
    {
      "name": "布基纳法索",
      "value": 0
    },
    {
      "name": "孟加拉国",
      "value": 0
    },
    {
      "name": "保加利亚",
      "value": 0
    },
    {
      "name": "波斯尼亚和黑塞哥维那",
      "value": 0
    },
    {
      "name": "白俄罗斯",
      "value": 0
    },
    {
      "name": "伯利兹",
      "value": 0
    },
    {
      "name": "百慕大群岛",
      "value": 0
    },
    {
      "name": "玻利维亚",
      "value": 0
    },
    {
      "name": "巴西",
      "value": 0
    },
    {
      "name": "文莱",
      "value": 0
    },
    {
      "name": "不丹",
      "value": 0
    },
    {
      "name": "博茨瓦纳",
      "value": 0
    },
    {
      "name": "柬埔寨",
      "value": 0
    },
    {
      "name": "喀麦隆",
      "value": 0
    },
    {
      "name": "加拿大",
      "value": 0
    },
    {
      "name": "中非共和国",
      "value": 0
    },
    {
      "name": "乍得",
      "value": 0
    },
    {
      "name": "智利",
      "value": 0
    },
    {
      "name": "中国",
      "value": 0
    },
    {
      "name": "哥伦比亚",
      "value": 0
    },
    {
      "name": "刚果",
      "value": 0
    },
    {
      "name": "科特迪瓦",
      "value": 0
    },
    {
      "name": "哥斯达黎加",
      "value": 0
    },
    {
      "name": "克罗地亚",
      "value": 0
    },
    {
      "name": "古巴",
      "value": 0
    },
    {
      "name": "塞浦路斯",
      "value": 0
    },
    {
      "name": "捷克共和国",
      "value": 0
    },
    {
      "name": "民主刚果",
      "value": 0
    },
    {
      "name": "丹麦",
      "value": 0
    },
    {
      "name": "吉布提",
      "value": 0
    },
    {
      "name": "多米尼加共和国",
      "value": 0
    },
    {
      "name": "东帝汶",
      "value": 0
    },
    {
      "name": "厄瓜多尔",
      "value": 0
    },
    {
      "name": "埃及",
      "value": 0
    },
    {
      "name": "萨尔瓦多",
      "value": 0
    },
    {
      "name": "赤道几内亚",
      "value": 0
    },
    {
      "name": "厄立特里亚",
      "value": 0
    },
    {
      "name": "爱沙尼亚",
      "value": 0
    },
    {
      "name": "埃塞俄比亚",
      "value": 0
    },
    {
      "name": "福克兰群岛",
      "value": 0
    },
    {
      "name": "斐济",
      "value": 0
    },
    {
      "name": "芬兰",
      "value": 0
    },
    {
      "name": "法国",
      "value": 0
    },
    {
      "name": "法属圭亚那",
      "value": 0
    },
    {
      "name": "法属南部领地",
      "value": 0
    },
    {
      "name": "加蓬",
      "value": 0
    },
    {
      "name": "冈比亚",
      "value": 0
    },
    {
      "name": "德国",
      "value": 0
    },
    {
      "name": "佐治亚州",
      "value": 0
    },
    {
      "name": "加纳",
      "value": 0
    },
    {
      "name": "希腊",
      "value": 0
    },
    {
      "name": "格陵兰",
      "value": 0
    },
    {
      "name": "危地马拉",
      "value": 0
    },
    {
      "name": "几内亚",
      "value": 0
    },
    {
      "name": "几内亚比绍",
      "value": 0
    },
    {
      "name": "圭亚那",
      "value": 0
    },
    {
      "name": "海地",
      "value": 0
    },
    {
      "name": "赫德岛和麦克唐纳群岛",
      "value": 0
    },
    {
      "name": "洪都拉斯",
      "value": 0
    },
    {
      "name": "匈牙利",
      "value": 0
    },
    {
      "name": "冰岛",
      "value": 0
    },
    {
      "name": "印度",
      "value": 0
    },
    {
      "name": "印度尼西亚",
      "value": 0
    },
    {
      "name": "伊朗",
      "value": 0
    },
    {
      "name": "伊拉克",
      "value": 0
    },
    {
      "name": "爱尔兰",
      "value": 0
    },
    {
      "name": "以色列",
      "value": 0
    },
    {
      "name": "意大利",
      "value": 0
    },
    {
      "name": "象牙海岸",
      "value": 0
    },
    {
      "name": "牙买加",
      "value": 0
    },
    {
      "name": "日本",
      "value": 0
    },
    {
      "name": "乔丹",
      "value": 0
    },
    {
      "name": "克什米尔",
      "value": 0
    },
    {
      "name": "哈萨克斯坦",
      "value": 0
    },
    {
      "name": "肯尼亚",
      "value": 0
    },
    {
      "name": "科索沃",
      "value": 0
    },
    {
      "name": "科威特",
      "value": 0
    },
    {
      "name": "吉尔吉斯斯坦",
      "value": 0
    },
    {
      "name": "老挝",
      "value": 0
    },
    {
      "name": "老挝人民民主共和国",
      "value": 0
    },
    {
      "name": "拉脱维亚",
      "value": 0
    },
    {
      "name": "黎巴嫩",
      "value": 0
    },
    {
      "name": "莱索托",
      "value": 0
    },
    {
      "name": "利比里亚",
      "value": 0
    },
    {
      "name": "利比亚",
      "value": 0
    },
    {
      "name": "立陶宛",
      "value": 0
    },
    {
      "name": "卢森堡",
      "value": 0
    },
    {
      "name": "马达加斯加",
      "value": 0
    },
    {
      "name": "马其顿",
      "value": 0
    },
    {
      "name": "马拉维",
      "value": 0
    },
    {
      "name": "马来西亚",
      "value": 0
    },
    {
      "name": "马里",
      "value": 0
    },
    {
      "name": "毛里塔尼亚",
      "value": 0
    },
    {
      "name": "墨西哥",
      "value": 0
    },
    {
      "name": "摩尔多瓦",
      "value": 0
    },
    {
      "name": "蒙古",
      "value": 0
    },
    {
      "name": "黑山",
      "value": 0
    },
    {
      "name": "摩洛哥",
      "value": 0
    },
    {
      "name": "莫桑比克",
      "value": 0
    },
    {
      "name": "缅甸",
      "value": 0
    },
    {
      "name": "纳米比亚",
      "value": 0
    },
    {
      "name": "荷兰",
      "value": 0
    },
    {
      "name": "新喀里多尼亚",
      "value": 0
    },
    {
      "name": "新西兰",
      "value": 0
    },
    {
      "name": "尼泊尔",
      "value": 0
    },
    {
      "name": "尼加拉瓜",
      "value": 0
    },
    {
      "name": "尼日尔",
      "value": 0
    },
    {
      "name": "尼日利亚",
      "value": 0
    },
    {
      "name": "朝鲜",
      "value": 0
    },
    {
      "name": "北塞浦路斯",
      "value": 0
    },
    {
      "name": "挪威",
      "value": 0
    },
    {
      "name": "阿曼",
      "value": 0
    },
    {
      "name": "巴基斯坦",
      "value": 0
    },
    {
      "name": "巴拿马",
      "value": 0
    },
    {
      "name": "巴布亚新几内亚",
      "value": 0
    },
    {
      "name": "巴拉圭",
      "value": 0
    },
    {
      "name": "秘鲁",
      "value": 0
    },
    {
      "name": "刚果共和国",
      "value": 0
    },
    {
      "name": "菲律宾",
      "value": 0
    },
    {
      "name": "波兰",
      "value": 0
    },
    {
      "name": "葡萄牙",
      "value": 0
    },
    {
      "name": "波多黎各",
      "value": 0
    },
    {
      "name": "卡塔尔",
      "value": 0
    },
    {
      "name": "塞尔维亚共和国",
      "value": 0
    },
    {
      "name": "罗马尼亚",
      "value": 0
    },
    {
      "name": "俄罗斯",
      "value": 0
    },
    {
      "name": "卢旺达",
      "value": 0
    },
    {
      "name": "萨摩亚",
      "value": 0
    },
    {
      "name": "沙特阿拉伯",
      "value": 0
    },
    {
      "name": "塞内加尔",
      "value": 0
    },
    {
      "name": "塞尔维亚",
      "value": 0
    },
    {
      "name": "塞拉利昂",
      "value": 0
    },
    {
      "name": "斯洛伐克",
      "value": 0
    },
    {
      "name": "斯洛文尼亚",
      "value": 0
    },
    {
      "name": "所罗门群岛",
      "value": 0
    },
    {
      "name": "索马里兰",
      "value": 0
    },
    {
      "name": "索马里",
      "value": 0
    },
    {
      "name": "南非",
      "value": 0
    },
    {
      "name": "南乔治亚和南桑德威奇群岛",
      "value": 0
    },
    {
      "name": "韩国",
      "value": 0
    },
    {
      "name": "南苏丹",
      "value": 0
    },
    {
      "name": "西班牙",
      "value": 0
    },
    {
      "name": "斯里兰卡",
      "value": 0
    },
    {
      "name": "苏丹",
      "value": 0
    },
    {
      "name": "苏里南",
      "value": 0
    },
    {
      "name": "斯威士兰",
      "value": 0
    },
    {
      "name": "瑞典",
      "value": 0
    },
    {
      "name": "瑞士",
      "value": 0
    },
    {
      "name": "叙利亚",
      "value": 0
    },
    {
      "name": "塔吉克斯坦",
      "value": 0
    },
    {
      "name": "坦桑尼亚",
      "value": 0
    },
    {
      "name": "泰国",
      "value": 0
    },
    {
      "name": "巴哈马",
      "value": 0
    },
    {
      "name": "多哥",
      "value": 0
    },
    {
      "name": "特立尼达和多巴哥",
      "value": 0
    },
    {
      "name": "突尼斯",
      "value": 0
    },
    {
      "name": "土耳其",
      "value": 0
    },
    {
      "name": "土库曼斯坦",
      "value": 0
    },
    {
      "name": "乌干达",
      "value": 0
    },
    {
      "name": "乌克兰",
      "value": 0
    },
    {
      "name": "阿拉伯联合酋长国",
      "value": 0
    },
    {
      "name": "大不列颠联合王国",
      "value": 0
    },
    {
      "name": "坦桑尼亚联合共和国",
      "value": 0
    },
    {
      "name": "美国",
      "value": 0
    },
    {
      "name": "美利坚合众国",
      "value": 0
    },
    {
      "name": "乌拉圭",
      "value": 0
    },
    {
      "name": "乌兹别克斯坦",
      "value": 0
    },
    {
      "name": "瓦努阿图",
      "value": 0
    },
    {
      "name": "委内瑞拉",
      "value": 0
    },
    {
      "name": "越南",
      "value": 0
    },
    {
      "name": "西岸",
      "value": 0
    },
    {
      "name": "西撒哈拉",
      "value": 0
    },
    {
      "name": "也门",
      "value": 0
    },
    {
      "name": "赞比亚",
      "value": 0
    },
    {
      "name": "津巴布韦",
      "value": 0
    }
]
        
    }]
}
options.series[0].data.push(...this.total)
// console.log(options.series[0]);
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
  height: 540px;
  width: 540px;
}
</style>