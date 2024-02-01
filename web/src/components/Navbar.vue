<!-- Navbar.vue -->

<template>
  <nav class="navbar">
    <div class="left-nav">
      <div class="logo">
        <img src="../assets//image/logo.png" alt="Logo">
      </div>
      <ul class="nav-list">
        <li><a href="#">Página Inicial</a></li>
        <li><a href="#">Cursos</a></li>
      </ul>
    </div>
    <div class="right-nav">
      <div class="login-btn">
        <button @click="fazerLogin">Entrar</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    fazerLogin() {
      // Adicione a lógica de login aqui
      console.log('Botão "Fazer Login" clicado');
    }
  }
};
</script>

<style scoped>

.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,.08), 0 4px 12px rgba(0,0,0,.08);
}

.left-nav{
  display: flex;
}

.logo img {
  max-height: 90px;
}

.nav-list {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin-top: 15px;
  gap: 20px;
}

.nav-list li a {
  text-decoration: none;
  font-weight: 400;
  font-size: 16px;
  color: var(--tertiary);
  transition: 0.5s;
}

.nav-list li a:hover {
  color: var(--primary);
}

.login-btn button {
  background-color: var(--primary);
  color: var(--white);
  padding: 8px 16px;
  font-weight: 700;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: 0.5s;
}

.login-btn button:hover {
  background-color: #0b7334;
  box-shadow: 0px 10px 40px -12px var(--primary);
}
</style>