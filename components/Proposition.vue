<template>
  <section class="propositionContainer">
    <p class="propositionText">
      Начинающий (с 2019г) frontend-разработчик
      ищет организацию с которой будет расти профессионально,
      помогать расти компании и создавать удобные програмные продукты.
    </p>

    <p class="propositionText">
      В IT сфере опыта работы нет, но есть желание развиваться в сфере web-разработки,
      изучать полезные технологии и углублять уже существующие знания.
    </p>

  </section>
</template>

<script>
  import {defineComponent} from "vue";

  export default defineComponent( {
  })
</script>

<style scoped>
  .propositionContainer {
    margin-bottom: 2em;
  }

  .propositionText {
    text-indent: 1.5em;
    text-align: justify;
  }

  @media (max-width: 760px) {
    .propositionText {
      font-size: 12px;
    }
    .propositionContainer {
      padding:20px
    }

  }


</style>

