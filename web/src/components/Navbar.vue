<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img class="logo" src="../assets/image/logo.png" alt="Logo" />
      </a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <router-link class="router-link" to="/">
            <li class="nav-item">
              <a class="nav-link" href="#">Página Inicial</a>
            </li>
          </router-link>
          <router-link class="router-link" to="/mycourses">
          <li class="nav-item">
            <a class="nav-link" href="#">Meus Cursos</a>
          </li>
        </router-link>
        </ul>
      </div>

      <div v-if="isLoggedIn" class="user-nav">
        <i class="bx bxs-user"></i> Bem-vindo(a),⠀<span>{{ name }}</span>!
      </div>
    </div>
  </nav>
</template>

<script>
import { jwtDecode } from "jwt-decode";
export default {
  data() {
    return {
      isLoggedIn: false,
    };
  },

  created() {
    const token = localStorage.getItem("token");

    if (token && typeof token === "string") {
      try {
        const decodedToken = jwtDecode(token);
        console.log(decodedToken);
        this.name = decodedToken.name;
        this.isLoggedIn = true;
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
  },
};
</script>

<style scoped>
.navbar {
  padding: 1px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.08);
}

.logo {
  max-height: 90px;
  cursor: default;
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



.user-nav {
  font-weight: 400;
  font-size: 16px;
  margin-left: auto;
  display: flex;
  align-items: center;
  color: var(--tertiary);
  cursor: default;
}

.router-link{
  text-decoration: none;
}

.user-nav span {
  font-weight: 700;
  margin-left: -5px;
}

.user-nav i {
  margin-right: 5px;
}

@media (max-width: 768px) {
  .user-nav {
    display: none;
  }
}
</style>
