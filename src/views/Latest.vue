<template>
  <div class="latest">
    <news-content :newsList="newsList"/>
  </div>
</template>
<script>
import NewsContent from '../components/NewsContent'
import {getLatest} from '@/network/data'
export default {
  name:"Latest",
  data() {
    return {
      newsList:[]
    }
  },
  components:{
    NewsContent
  },
  async created() {
    let res = await getLatest()
    this.newsList = JSON.parse(res.data[0].content).sub_raw_datas
  }
}
</script>
<style scoped>

</style>