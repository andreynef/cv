<template>
  <div :class="{'photoContainerReview':isReview,'photoContainer':!isReview}"
       @click="handleClick()"
  >
  <img :src="cPhotoLink" alt="myPhoto" style="width: 100%; height: 100%"/>
  <span class="photoContainer">{{index+1}} из {{photoLinksArr.length}}</span>
  </div>
</template>

<script>
  import {defineComponent} from "vue";
  export default defineComponent( {
    data(){
      return{
        photoLinksArr :[
          '/img/1.jpg',
          '/img/2.jpg',
          '/img/3.jpg',
          '/img/4.jpg',
          '/img/8.jpg',
          '/img/9.jpg',
          '/img/10.jpg',
        ],
        isReview:false,
        index: 0,
      }
    },

    methods: {
      handleClick () {
        if(this.isReview){
          if (this.index < (this.photoLinksArr.length-1)) {
            this.index = this.index + 1;
          } else {
            this.index = 0;
          }
        }
        this.isReview = true;
      },
      ddd () {
       console.log('ddd')
      },
    },
    computed:{
      cPhotoLink(){
        return this.photoLinksArr[this.index]
      }
    },
    beforeDestroy () {
    },
  })
</script>

<style scoped>
  .photoContainer {
    position: relative;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.9);
    border-radius: 1em;
    cursor: pointer;
    height: 220px;
    width: 220px;
    overflow: hidden;
    margin-left: 50px;
    margin-top: -40px;
    color:black;
    animation: moveIn 1s ease;
  }

  /*.photoContainer:hover {*/
  /*    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.9);*/
  /*    animation: moveOut 1s ease;*/
  /*    z-index: 3;*/
  /*    margin-top: 0;*/
  /*}*/
  .photoContainerReview {
    position: relative;
    border-radius: 1em;
    cursor: pointer;
    height: 220px;
    width: 220px;
    overflow: hidden;
    margin-left: 50px;
    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.9);
    animation: moveOut 1s ease;
    z-index: 3;
    margin-top: 0;
  }

  .photoCounter {
    position: absolute;
    bottom: 5%;
    right: 5%;
    color: #fafafa;
    font-size: 12px;
    background-color: black;
    padding: 5px;
    border-radius: 20%;
  }


  @media (max-width: 750px) {
    .photoContainer {
      margin: 20px auto;
    }
    .photoContainerReview {/*отмена анимации*/
      animation: none;
      margin: 20px auto 25px auto;
    }

  }

  @keyframes moveOut {
    from{
      box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.9);
      z-index: 0;
      margin-top: -40px;
    }
    50% {
      box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.9);
      transform: translateX(110px);
    }
    to {
      box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.9);
      z-index: 3;
      transform: translateX(0px);
      margin-top: 0;
    }
  }
  @keyframes moveIn {
    from{
      box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.9);
      margin-top: 0;
      z-index: 3;
    }
    50% {
      box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.9);
      transform: translateX(110px);
    }
    to {
      transform: translateX(0);
      margin-top: -40px;
    }
  }


</style>

