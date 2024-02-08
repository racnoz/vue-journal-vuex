<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Hola mundo</h1>
    <buttton @click="goToDaybook" class="btn btn-primary">Primary</buttton>
    <buttton @click="goToDaybook" class="btn btn-secondary">Secondary</buttton>
    <buttton @click="goToDaybook" class="btn btn-success">Success</buttton>
  </div>
</template>


<script>
  export default {

    methods:{
      // Método personalizado para redireccionar al usuario a la página del daybook
      goToDaybook() {
        // Accede al enrutador de Vue.js usando this.$router
        // Llama al método push del enrutador para navegar a otra ruta
        // Se especifica la ruta a la que se quiere navegar utilizando un objeto
        // En este caso, se utiliza { name: 'no-entry' }, lo que indica que se navegará a una ruta por el nombre 'no-entry'
        this.$router.push({ name: 'no-entry' })
      }
    }
  }
</script>

