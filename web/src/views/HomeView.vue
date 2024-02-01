<template>
  <div class="home">
    <Navbar />

    <div class="conteudo">
      <img class="imagem-fundo" src="../assets/image/homem-estudando.png" alt="Imagem" />
      <div class="texto-sobre-imagem">
        <h2>Uma ampla seleção de cursos</h2>
        <p>Escolha entre várias opções de cursos em vídeo online e presenciais para melhorar seus estudos.</p>
        <button @click="entrar">Entrar</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Navbar from '@/components/Navbar.vue'; 

@Options({
  components: {
    Navbar
  }
})
export default class HomeView extends Vue {
  entrar() {
    console.log('Botão "Entrar" clicado');
  }
}
</script>

<style scoped>

.conteudo {
  position: relative;
  overflow: hidden;
}

.imagem-fundo {
  width: 100vw;
  height: 550px;
  object-fit: cover;
  display: block;
}

.texto-sobre-imagem {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #FFFFFF;
}

.texto-sobre-imagem h2 {
  font-size: 42px;
}

.texto-sobre-imagem p {
  font-size: 1.125rem;
}

.texto-sobre-imagem button {
  background-color: var(--primary);
  color: var(--white);
  padding: 8px 16px;
  font-weight: 700;
  font-size: 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: 0.5s;
}

.texto-sobre-imagem button:hover {
  background-color: #0b7334;
}

</style>