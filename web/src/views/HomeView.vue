<template>
  <div class="home">
    <Navbar />

    <div class="content">
      <img class="img-content" src="../assets/image/homem-estudando.png" alt="Imagem" />
      <div class="content-text">
        <h2>Uma ampla seleção de cursos</h2>
        <p>Escolha entre várias opções de cursos em vídeo online e presenciais para melhorar seus estudos.</p>
        <button @click="entrar">Entrar</button>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'; 

export default {
  components: {
    Navbar
  },
  methods: {
    entrar() {
      console.log('Botão "Entrar" clicado');
    }
  },
  beforeRouteEnter(to, from, next) {
    const documentTitle = typeof to.meta.title === 'string' ? to.meta.title : 'Seu Título Padrão';
    document.title = documentTitle;
    next();
  }
}
</script>

<style scoped>

.content {
  position: relative;
  overflow: hidden;
}

.img-content {
  width: 100vw;
  height: 550px;
  object-fit: cover;
  display: block;
}
.content-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #FFFFFF;
}

.content-text h2 {
  font-size: 42px;
}

.content-text p {
  font-size: 1.125rem;
}

.content-text button {
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

.content-text button:hover {
  background-color: #0b7334;
}

</style>