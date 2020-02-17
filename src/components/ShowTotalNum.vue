<template>
  <div class="content">
    <div>
      <img src="../assets/sh.png" alt />
      <div class="title">
        <h2>上海疫情</h2>
        <span>更新时间: {{totalNum.updateTime | showDate}}</span>
      </div>
      <div class="summary">
    <div class="confirm">
      <div class="number">{{totalNum.confirmedNum}}</div>
      <div class="tag"><span>确诊人数</span></div>
    </div>
    <div class="dead">
      <div class="number">{{totalNum.deathsNum}}</div>
      <div class="tag"><span>死亡人数</span></div>
    </div>
    <div class="heal">
      <div class="number">{{totalNum.curesNum}}</div>
      <div class="tag"><span>治愈人数</span></div>
    </div>
  </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "@/tools/utils";
export default {
  name: "ShowTotalNum",
  props: {
    totalNum: Object
  },
  filters: {
    showDate: function(value) {
      let date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-dd hh:mm:ss");
    }
  }
};
</script>

<style scoped>
.content {
  display: flex;
  justify-content: center;
  margin-top: 60px;
}
img {
  width: 650px;
}
.title {
  display: flex;
  margin-top: 40px;
}
.title span {
  margin-left: 200px;
  text-align: center;
  line-height: 85px;
  color: #cccd11;
}

.summary {
   display:flex;
   justify-content:center;
   align-items: center;
   margin-top: 40px;
}
.summary:hover {
  cursor: default; 
}
.summary div {
    /* flex: 1; */
    text-align: center;
    overflow: hidden;
    width: 200px;
}
.number {
    font-size: 40px;
    font-weight: bold;
    padding: 8px 5px 5px 5px ;
}

.tag {
    height: 35px;
    line-height: 35px;
    font-size: 24px;
    font-weight: 400;
}

 .confirm {
   background-color: #FDF1F1;
    border-radius: 8px 0 0 8px;
    margin-right: 2px;
 }
 .confirm .tag {
     background-color: #FFE0E0;
  }
  .confirm .number, .small-number {
    color: #D81D1B;
  }  
  
  .heal {
     background-color: #F1F8F4;
    margin-right: 2px;
  }
  .heal .tag {
    background-color: #DFEEE6;
  }
  .heal .number, .small-number {
    color: #178B50;
  }
  .dead {
    background-color: #F8F8F8;
    border-radius: 0 8px 8px 0 ;
  }
  .dead .tag{
     background-color: #EEEEEE;
  }
  .dead .number, .small-number {
    color: #66666C;
  }

</style>