<template>
  <div class="emptyLayout">
    <main>
      <div class="bodyResume">
        <!--        <small class="text">App is created using Vue</small>-->
        <div class="paperContainer">
          <Header/>
          <Proposition/>
          <Certificates/>
          <Stack/>
          <DropList/>
          <Footer/>
        </div>
        <BtnUp/>
      </div>
    </main>
  </div>
</template>

<script>

export default {
}
</script>


<style scoped>

.emptyLayout {
  background-image: url("/img/fon6.jpg");
  background-size: cover;
  min-height: 100vh;
  background-attachment:fixed;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;
  color:black;
}
.test{
  color:red;
}
.mainContainer {
  /*max-width:1600px;*/
  /*margin: 0 auto;*/
  /*padding: 75px 0 0 0;*/
}
.bodyResume {
  margin:0;
  padding: 3em 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*box-sizing: border-box;*/
  color: #2b2118;
  /*background-image: url('/public/img/desktop16.jpg');*/
  /*background-repeat: no-repeat;*/
  /*background-attachment: fixed;*/
  /*background-position: top;*/
  /*background-size: cover;*/
  -webkit-tap-highlight-color: transparent;
}

.text {
  background-color: grey;
  color:white;
  /*position: absolute;*/
  /*top: 0;*/
  /*padding: 3px;*/
  font-size: 16px;
}
.paperContainer {
  max-width: 1024px;
  min-width: 320px;
  margin: 0 auto;
  padding: 3em;
  background: white;
  /*background-size: cover;*/
  /*background: url('../public/img/paper.jpg'), rgba(255,255,255,0.9);*/
  /*background-blend-mode: color;*/
  position:relative;
}
.paperContainer::before {
  position:absolute;
  top: -8px;
  left:150px;
  content: '';
  width:45px;
  height: 180px;
  display: block;
  padding-left: 5px;
  background-image: url('/img/clip2.png');
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 2;
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
  .paperContainer {
    padding: 3em 0;
  }
  .paperContainer::before {
    display: none;
  }
}


</style>
