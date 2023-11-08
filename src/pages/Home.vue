<template>


        <main>
            <div class="titulo"><h2>ROMANCE</h2></div>
            <div class="containerLivro"><img class="capas" src="../assets/c1.jpg" id="logo" alt=""> 
              <img class="capas" src="../assets/c1.jpg" id="logo" alt="">
              <img class="capas" src="../assets/c1.jpg" id="logo" alt="">
              <img class="capas" src="../assets/c1.jpg" id="logo" alt="">
              <img class="capas" src="../assets/c1.jpg" id="logo" alt="">
              <img class="capas" src="../assets/c1.jpg" id="logo" alt="">
              <img class="capas" src="../assets/c1.jpg" id="logo" alt="">
              <img class="capas" src="../assets/c1.jpg" id="logo" alt="">
              <img class="capas" src="../assets/c1.jpg" id="logo" alt="">
              <img class="capas" src="../assets/c1.jpg" id="logo" alt="">
              <img class="capas" src="../assets/c1.jpg" id="logo" alt="">
              <img class="capas" src="../assets/c1.jpg" id="logo" alt="">
              <img class="capas" src="../assets/c1.jpg" id="logo" alt="">
              <img class="capas" src="../assets/c1.jpg" id="logo" alt="">
              <img class="capas" src="../assets/c1.jpg" id="logo" alt="">
              <img class="capas" src="../assets/c1.jpg" id="logo" alt="">
              <img class="capas" src="../assets/c1.jpg" id="logo" alt="">
              <img class="capas" src="../assets/c1.jpg" id="logo" alt="">
              <img class="capas" src="../assets/c1.jpg" id="logo" alt="">
            </div>

          

            <div class="titulo"><h2>DRAMA</h2></div>
            <div class="containerLivro"><img class="capas" src="../assets/c1.jpg" id="logo" alt=""></div>
            <div class="titulo"><h2>FANTASIA</h2></div>
            <div class="containerLivro"><img class="capas" src="../assets/c1.jpg" id="logo" alt=""></div>
            <div class="titulo"><h2>TERROR</h2></div>
            <div class="containerLivro"><img class="capas" src="../assets/c1.jpg" id="logo" alt=""></div>
            <div class="titulo"><h2>INFANTIL</h2></div>
            <div class="containerLivro"><img class="capas" src="../assets/c1.jpg" id="logo" alt=""></div>
            <div class="titulo"><h2>RELIGIOSO</h2></div>
            <div class="containerLivro"><img class="capas" src="../assets/c1.jpg" id="logo" alt=""></div>
            <div class="titulo"><h2>DIDÁTICO</h2></div>
            <div class="containerLivro"><img class="capas" src="../assets/c1.jpg" id="logo" alt=""></div>
            <div class="titulo"><h2>MANGÁS</h2></div>
            <div class="containerLivro"><img class="capas" src="../assets/c1.jpg" id="logo" alt=""></div>
            <div class="titulo"><h2>HQs</h2></div>
            <div class="containerLivro"><img class="capas" src="../assets/c1.jpg" id="logo" alt=""></div>




        </main>
</template>

<script>
export default {
  name: 'HomeTela'
}
</script>

<style scoped>

.containerLivro {
  width: 100%;
  background-color: rgb(40, 10, 49);
  padding-bottom: 20px;
  padding-top: 20px;
  display: flex;
  overflow: auto;
  white-space: nowrap; 
}

.containerLivro::-webkit-scrollbar {
  height: 10px;
}

.containerLivro::-webkit-scrollbar-track {
  background: blueviolet; /* Cor de fundo da barra de rolagem */
}

.containerLivro::-webkit-scrollbar-thumb {
  background: white; /* Cor da alça da barra de rolagem */
  border-radius: 10px; /* Borda arredondada da alça */
}

.containerLivro::-webkit-scrollbar-thumb:hover {
  background: lightgray; /* Cor da alça quando passa o mouse */
}

.capas {
  height: 200px;
  width: 150px;
  padding-left: 20px;
  display: inline-block;
  text-align: center;
}



</style>