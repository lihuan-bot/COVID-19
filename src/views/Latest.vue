<template>
  <div class="latest">
    <h1>最新进展</h1>
  </div>
</template>
<script>
import {getLatest} from '@/network/data'
export default {
  name:"Latest",
  async created() {
    let res = await getLatest()
    let data = JSON.parse(res.forum.extra.ncov_string_list)
    // let data = JSON.parse(res.data[0].content)
    // let data = res.data.list[0]
    console.log(data);
    
    
  }
}
</script>
<style scoped>
.latest {
  margin-top: 50px;
}
</style>