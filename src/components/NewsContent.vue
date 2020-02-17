<template>
  <div id="content">
    <div>
      <img  src="../assets/top.png" alt="">
      <h2>疫情追踪</h2>
      <div class="newcontent">
        <div class="line"></div>
        <div class="newlist">
          <div class="newsListItem" v-for="item in newsList" :key="item.raw_data.content_id">
            <div class="time">{{item.raw_data.showtime_string}}</div>
            <div class="desc">{{item.raw_data.desc}}</div>
            <div class="showImg" v-if="item.raw_data.event_image"><img :src="item.raw_data.event_image.url" alt=""></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'NewsContent',
  props:{
    newsList:Array
  }
}
</script>

<style scoped>
#content {
  display: flex;
  justify-content: center;
  margin-top: 60px;
}
#content img {
  width: 600px;
  height: 280px;
  margin-top: 70px;
}
.newcontent {
  display: flex;
  justify-content: center;
}
.newcontent .line {
  width: 2px;
  background-color: #ddd;
  margin: 0 30px;
}
.newcontent .newlist {
  flex: 1;
  /* overflow: hidden; */
}
.newcontent .newlist .newsListItem {
  position: relative;
  width: 550px;
  background-color: #efefef;
  border-radius: 10px;
  margin: 10px 0;
  padding: 10px;
}
.newcontent .newlist .newsListItem::after {
  content: "";
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid transparent;
  border-right: 10px solid #ebdddd;
  position: absolute;
  top: 30px;
  left: -20px;
}
.newcontent .newlist .newsListItem::before {
  content: "";
  width: 10px;
  height: 10px;
  border: 4px solid red;
  border-radius: 9px;
  position: absolute;
  top: 30px;
  left: -40px;
}

</style>