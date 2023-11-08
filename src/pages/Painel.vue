<template>
    <main>
      <section class="container">
        <section id="containerPainel">
          <h1 id="titulo">PAINEL ADMINISTRADOR</h1>
          <div id="form">
            <div class="button">
              <button id="openModalButton" @click="openModal">Adicionar Livro</button>
            </div>
          </div>
        </section>
      </section>
      
      <!-- Modal para adicionar um livro -->
      <div class="modal" v-if="isModalOpen">
        <div class="modal-content">
          <h2>Adicionar Livro</h2>
          <div class="input-container">
            <label for="nome">Nome do Livro</label>
            <input type="text" id="nome" v-model="novoLivro.name" placeholder="Nome do Livro">
          </div>
          <div class="input-container">
            <label for="genero">Gênero</label>
            <input type="text" id="genero" v-model="novoLivro.genero" placeholder="Gênero">
          </div>
          <div class="input-container">
            <label for="quantidade">Quantidade</label>
            <input type="number" id="quantidade" v-model="novoLivro.quantidade" placeholder="Quantidade">
          </div>
          <div class="input-container">
            <label for="autor">Nome do Autor</label>
            <input type="text" id="autor" v-model="novoLivro.autor" placeholder="Nome do Autor">
          </div>
          <div class="button">
            <button id="BntAdd" @click="addBook">Adicionar</button>
            <button id="BntCl" @click="closeModal">Fechar</button>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script>
  export default {
    name: 'PainelAdministrador',
    data() {
      return {
        isModalOpen: false,
        novoLivro: {
          nome: "",
          genero: "",
          quantidade: 0,
          autor: ""
        }
      };
    },
    methods: {
      openModal() {
        this.isModalOpen = true;
      },
      closeModal() {
        this.isModalOpen = false;
        // Limpar os campos do novo livro
        this.newBook = {
          name: "",
          genre: "",
          quantity: 0,
          author: ""
        };
      },
      addBook() {
        // Aqui você pode adicionar o livro a uma lista de livros ou fazer outra ação com os dados do novo livro.
        // Por enquanto, apenas mostrarei os dados do novo livro no console.
        console.log("Novo Livro:", this.newBook);
        this.closeModal();
      }
    }
  };
  </script>

<style scoped>
  /* Estilos gerais para o painel administrador */
  #containerPainel {
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    background-color: blueviolet;
    text-align: center;
    padding: 20px;
    border-radius: 10px;
    margin-top: 100px;
  }

  #titulo {
    text-align: center;
    color: white;
  }

  .button {
    text-align: center;
  }

  /* Estilos para o botão "Adicionar Livro" */
  #openModalButton {
    background-color: white;
    color: blueviolet;
    margin-top: 30px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  #openModalButton:hover {
    background-color: rgb(49, 15, 82);
    color: white;
  }

  /* Estilos para o modal de adicionar livro */
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

  .modal-content {
    background-color: blueviolet;
    padding: 20px;
    border-radius: 5px;
    width: 300px;
  }

  h2 {
    text-align: center;
    color: white;
  }

  .input-container {
    margin: 10px 0;
  }

  label {
    display: block;
    color: white;
  }

  input {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .button button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;
  }

  #BntAdd{

    background-color: white;
    color: blueviolet;
  }
  #BntCl{

    background-color: black;
    color: white;
}

@media (max-width: 700px) {
    #containerPainel {
      max-width: 90%;
    }
    .modal{
        max-width: 90%;
    }
    #BntCl{
        margin-top: 10px;
    }
}
</style>
