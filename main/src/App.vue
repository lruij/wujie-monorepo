<template>
  <div id="app">
    <h1>主程序 vue2</h1>
    <img src="./assets/logo.png">
    <div class="sub-block">
      <h1>vue3-demo</h1>
      <WujieVue url="http://127.0.0.1:5173/" name="vue3"></WujieVue>
    </div>
    <div class="sub-block">
      <h1>react-demo</h1>
      <WujieVue url="http://127.0.0.1:5174/" name="react"></WujieVue>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.sub-block {
  padding: 5px;
  border: 1px solid #2c3e50;
}
</style>
