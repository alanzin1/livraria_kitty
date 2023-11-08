<template>
    <main>
      <section class="container">
        <section id="containerLogin">
          <h1 id="titulo">LOGIN</h1>
          <div id="form">
            <div class="input-container">
              <label for="email">E-MAIL</label>
              <input type="text" id="email" placeholder="E-mail">
            </div>
            <div class="input-container">
              <label for="password">SENHA</label>
              <input type="password" id="password" placeholder="Senha">
            </div>
            <div class="button">
              <button id="loginButton">Login</button>
              <a href="/Cadastro"><button id="CadastroButton">Cadastre-se</button></a>
            </div>
            <div id="AdmButton">
              <p>entrar como <a href="/LoginAdm">administrador</a></p>
            </div>
          </div>
        </section>
      </section>
    </main>
  </template>
  
  <script>
  export default {
    name: 'LoginTela',
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
  
  #AdmButton {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  p {
    color: white;
  }
  
  h1 {
    color: white;
    font-size: 30px;
  }
  
  #AdmButton a {
    color: black;
    font-weight: bold;
    border-bottom: 2px solid black;
  
  }
  
  #AdmButton a:hover {
    color: rgb(255, 0, 255);
    font-weight: bold;
    border-bottom: 2px solid rgb(255, 0, 255);
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
  