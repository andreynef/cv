<template>
  <section class="container">
    <h2 class="title">SkillBox certificates:</h2>
    <div class="imgsContainer">
      <img src="/img/verstka.png" alt="verstka" class="img hover" @click="isFull1=!isFull1" :class="{'full':isFull1,'hide':isFull2||isFull3}">
      <img src="/img/vue.png" alt="vue" class="img hover" @click="isFull2=!isFull2" :class="{'full':isFull2,'hide':isFull1||isFull3}">
      <img src="/img/js.png" alt="js" class="img hover" @click="isFull3=!isFull3" :class="{'full':isFull3,'hide':isFull2||isFull1}">
    </div>
  </section>
</template>

<script>
  export default {
    data(){
      return{
        isFull1:false,
        isFull2:false,
        isFull3:false,
        srcArr:['/img/verstka.png','/img/vue.png','/img/js.png']
      }
    },
    methods:{
    }
  }
</script>

<style scoped>
  .container {
    margin-bottom: 2em;
    /*padding-bottom: 15px;*/
    background-color: #f7f3e3;
  }
  .title {
    background-color: #694D2F;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 16px;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px 5px 0 0;
    width:100%;
  }
  .imgsContainer {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .img{
    width:300px;
    margin-bottom:10px;
    /*margin-right:10px;*/
  }
  .img.full{
    width:100%;
  }
  .img.hide{
    display:none;
  }
  @media (max-width: 480px) {
    .img{
      width:100%;
      margin-right:unset;
    }
  }

  @media (max-width: 750px) {
  }
</style>

