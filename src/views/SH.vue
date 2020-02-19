<template>
  <div class="city">
    <show-total-num :totalNum="showTotalNum"/>
    <s-h-line  :series="series" />
    <show :areaData="cities"/>
  </div>
</template>
<script>
import ShowTotalNum from '@/components/ShowTotalNum'
import SHLine from '@/components/SHLine'

import Show from "../components/Show"

import { getSerise, TotalNum } from '@/network/data'
export default {
  name:'SH',
  data(){
    return {
      showTotalNum:{},
      cities:[],
      series:[]
    }
  },
  components:{
    ShowTotalNum,
    SHLine,
    Show
  },
  async created() {
    let res = await getSerise()
    let data = JSON.parse(res.forum.extra.ncov_string_list).provinces.filter(item => item.id == 31)[0]
   
    // 获取确诊数据
    this.showTotalNum = new TotalNum(data)
    // 获取各区数据
    this.cities = data.cities
    // 获取折线图数据
    this.series = data.series
  }
}
</script>
<style scoped>
.city {
margin-top: 50px;
}
</style>