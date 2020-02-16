<template>
  <div class="summary">
    <div class="confirm">
      <div class="number">{{total.confirm}}</div>
      <div class="tag"><span>确诊人数</span></div>
      <div class="tip" v-if="today">较昨日<span class="small-number">+{{today.confirm}}</span></div>
    </div>
    <div class="suspect">
      <div class="number">{{total.suspect}}</div>
      <div class="tag"><span>疑似病例</span></div>
      <div class="tip" v-if="today">较昨日<span class="small-number">+{{today.suspect}}</span></div>
    </div>
    <div class="heal">
      <div class="number">{{total.heal}}</div>
      <div class="tag"><span>治愈人数</span></div>
      <div class="tip" v-if="today">较昨日<span class="small-number">+{{today.heal}}</span></div>
    </div>
    <div class="dead">
      <div class="number">{{total.dead}}</div>
      <div class="tag"><span>死亡人数</span></div>
      <div class="tip" v-if="today">较昨日<span class="small-number">+{{today.dead}}</span></div>
    </div>
  </div>
</template>
<script>
export default {
  name:'totalnum',
   props: {
    total: Object,
    today: Object
  }
}
</script>
<style scoped>
.summary {
   display:flex;
   justify-content:center;
   align-items: center;
   margin-bottom: 20px;
   /* background-color: #096; */
}
.summary:hover {
  cursor: default; 
}
.summary div {
    /* flex: 1; */
    text-align: center;
    overflow: hidden;
    width: 160px;
}
.number {
    font-size: 24px;
    font-weight: bold;
    padding: 8px 5px 5px 5px ;
}
.small-number {
  font-size: 12px;
}
.tag {
  height: 35px;
    line-height: 35px;
    font-size: 12px;
    font-weight: bold;
}
 .tip {
   font-size: 12px;
    padding-top: 10px;
    color: #8B8989;
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
  .suspect {
    background-color: #FFF7ED;
    margin-right: 2px;
  }
  .suspect .tag {
    background-color: #FFEED9;
  }
  .suspect .number, .small-number {
    color: #F7AB1A;
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