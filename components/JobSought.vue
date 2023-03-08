
<template>
    <section class="jobSoughtContainer">
        <h1 class="jobSoughtTitle">Соискаемая должность</h1>
        <p class="jobSoughtText">Front-end developer <br/> JavaScript developer</p>
        <p class="jobSoughtText">Нефедьев Андрей Сергеевич</p>
    </section>
</template>

<script>
  import {defineComponent} from "vue";

  export default defineComponent( {
    })
</script>

<style scoped>
    .jobSoughtContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      color:black;

    }

    .jobSoughtTitle {
        text-align: center;
    }

    .jobSoughtText {
        font-size: 18px;
    }

</style>

