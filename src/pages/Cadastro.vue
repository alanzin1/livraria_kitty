<template>
    <main>
      <section class="container">
        <section id="containerLogin">
          <h1 id="titulo">CADASTRO</h1>
          <div id="form">
            <div class="input-container">
              <label for="text">NOME</label>
              <input type="text" id="nome" placeholder="Nome completo">
            </div>
            <div class="input-container">
              <label for="email">E-MAIL</label>
              <input type="text" id="email" placeholder="E-mail">
            </div>
            <div class="input-container">
              <label for="password">SENHA</label>
              <input type="password" id="password" placeholder="Senha">
            </div>
            <div class="button">
              <a href="/"><button id="CadastroButton">Finalizar cadastro</button></a>
            </div>
          </div>
        </section>
      </section>
    </main>
  </template>

<script>
export default {
  name: 'CadastroTela',
}
</script>

<style scoped>
#containerLogin {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  background-color: blueviolet;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  margin-top: 100px;
}

h1 {
  color: white;
  font-size: 30px;
}

#titulo {
  margin-bottom: 20px;
}

#form {
  text-align: left;
}

.input-container {
  margin-bottom: 15px;
}

label {
  color: white;
  font-weight: bold;
  display: block;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.button {
  display: flex;
  align-items: center;
  justify-content: center;
}

button#loginButton:hover {
  background-color: rgb(49, 15, 82);
  color: white;
}

button#CadastroButton:hover {
  background-color: rgb(49, 15, 82);
  color: white;
}

button#loginButton {
  background-color: white;
  color: blueviolet;
  margin: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button#CadastroButton {
  background-color: white;
  color: blueviolet;
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

@media (max-width: 700px) {
  #containerLogin {
    max-width: 90%;
  }

  .button {
    flex-direction: column;
  }

  button#loginButton,
  button#CadastroButton {
    margin: 10px 0;
  }
}
</style>



  