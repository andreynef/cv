<template>
  <div class="upButton hover" :class="{'hide':get_scroll_position()<=200}">
    <img
      src="/img/upW.png"
      alt="up button"
      @click="up"
    />
  </div>
</template>

<script>
  import {defineComponent} from "vue";
  export default defineComponent( {
    data() {
      return {
        scrollPosition: window.scrollY
      }
    },
    methods: {
      get_scroll_position() {
        window.addEventListener('scroll', () => {
          this.scrollPosition = window.scrollY;
          // this.$store.state.scrollPosition = window.scrollY;
        });
        return this.scrollPosition
      },
      up(){
        window.scrollTo({top: 0, behavior: 'smooth'});
      },
    },
  })
</script>

<style scoped>
  .upButton{
    position: fixed;
    bottom:20px;
    right:20px;
    width:40px;
    height:40px;
  }
  .hide{
    display: none;
  }
  .upButton img{
    width:100%;
  }
  @media only screen and (max-width: 768px) {
  }

</style>

