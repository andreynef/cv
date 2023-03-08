
<template>
    <header class="header">
        <Photo/>
        <div class="headerInner">
            <JobSought/>
            <Contacts/>
        </div>
    </header>
</template>

<script>
  import {defineComponent} from "vue";
  import Photo from "./Photo"
    import JobSought from "./JobSought"
    import Contacts from "./Contacts"
    export default defineComponent( {
        components: {Photo,Contacts,JobSought},
    })
</script>

<style scoped>
    .header {
        display: flex;
        /*align-items: center;*/
    }

    .headerInner {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        margin-left:2em;
    }
    @media (max-width: 750px) {
      .paperContainer {
        margin: 0;
      }
      .paperContainer::before {
        display: none;
      }
    }
    @media (max-width: 400px) {
      .header {
        flex-flow: column;
      }
    }

</style>

