<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img class="logo" src="../assets/image/logo.png" alt="Logo">
      </a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Página Inicial</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Cursos</a>
          </li>
        </ul>
      </div>

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
      console.log('Botão "Fazer Login" clicado');
    }
  }
};
</script>

<style scoped>
.navbar {
  padding: 1px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .08), 0 4px 12px rgba(0, 0, 0, .08);
}

.logo {
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

.nav-link {
  text-decoration: none;
  font-weight: 400;
  font-size: 16px;
  color: var(--tertiary);
  transition: 0.5s;
}

.nav-link:hover {
  color: var(--primary);
}

.login-btn button {
  font-weight: 700;
  font-size: 16px;
  border-radius: 5px;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  transition: 0.5s;
  background-color: var(--primary);
  color: var(--white);
}

.login-btn button:hover {
  background-color: #0b7334;
  box-shadow: 0px 10px 40px -12px var(--primary);
}
</style>
