<template>
  <footer class="footerContainer">
    <small class="footerText">&copy; Andrey Nefedyev 2022</small>

    <small class="footerText">
      <a class="footerLink" href="https://github.com/andreynef/resume_Nefedyev_Andrey" target="_blank"
         rel="noopener noreferrer"></a>
    </small>
  </footer>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent( {
  })
</script>

<style scoped>
  .footerContainer {
    margin-top: 3em;
    color: black;
    text-align: center;
  }

  .footerText:first-child {
    margin-right: 20px;
  }

  .footerLink:link {
    color: black;
  }

  .footerLink:link {
    color: black;
  }

  .footerLink:visited {
    color: black;
  }

  @media (max-width: 480px) {
    .footerText {
      display: block;
    }

    .footerText:first-child {
      margin-right: 0;
      margin-bottom: 5px;
    }
  }

</style>

