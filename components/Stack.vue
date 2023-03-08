<template>
  <section>
    <!--    <div class="stack">-->
<!--      <div class="itemContainer">-->
<!--        <h2 class="itemTitle">Навыки:</h2>-->
<!--        <ul class="itemList">-->
<!--          <li>HTML5</li>-->
<!--          <li>CSS3, SCSS</li>-->
<!--          <li>Валидная, адаптивная, кроссбраузерная верстка</li>-->
<!--          <li>БЭМ</li>-->
<!--          <li>JavaScript, ES6+</li>-->
<!--          <li>React.js, Redux</li>-->
<!--          <li>Next.js</li>-->
<!--          <li>MaterialUi</li>-->
<!--          <li>Firebase</li>-->
<!--          <li>Gulp</li>-->
<!--          <li>Webpack</li>-->
<!--          <li>Git</li>-->
<!--        </ul>-->
<!--      </div>-->
<!--      <div class="itemContainer">-->
<!--        <h2 class="itemTitle">В процессе изучения:</h2>-->
<!--        <ul class="itemList">-->
<!--          <li>Vue</li>-->
<!--        </ul>-->
<!--      </div>-->
<!--      <div class="itemContainer">-->
<!--        <h2 class="itemTitle">В планах изучить:</h2>-->
<!--        <ul class="itemList">-->
<!--          <li>Node.js (backend)</li>-->
<!--          <li>Базы данных</li>-->
<!--        </ul>-->
<!--      </div>-->
<!--    </div>-->
    <div class="skills mb20">
      <div class="container">
        <h2 class="title">Навыки:</h2>
        <p class="text">
         React/Vue, Next/Nuxt, Redux/Vuex/Pinia, MaterialUi/Vuetify, Firebase(data,fire,hosting), CSS/SCSS, БЭМ, Gulp, Webpack, Адаптив, Git...
        </p>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  .stack {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-column-gap:1em;
    margin-bottom: 2em;
  }

  .container {
    background-color: #f7f3e3;
    /*border-radius: 5px;*/
    /*background-image: url('/public/img/rp2.png');*/
    background-repeat: repeat-x;
    background-position: bottom;
    padding-bottom: 15px
  }

  .title {
    background-color: #694D2F;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 16px;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px 5px 0 0;
  }

  .itemList {
    padding: 10px;
  }

  .img{
    width:300px;
    margin-bottom:10px;
    margin-right:10px;
  }
  .text{
    text-indent: 1.5em;
    padding: 10px;
  }
  @media (max-width: 480px) {
    .itemTitle {
      font-size: 14px;
    }

    .itemList {
      font-size: 12px;
    }
  }

  @media (max-width: 750px) {
    .stack {
      grid-template-columns: 1fr;
      grid-row-gap: 20px;
    }
  }
</style>

