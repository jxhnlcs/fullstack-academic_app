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

    <div class="courses">
      <div class="container">
        <h2 class="text-center mb-4">Conheça nossos cursos</h2>
        <div class="row">
          <div v-for="course in courses" :key="course.CourseID" class="col-md-4 mb-4">
            <div class="card">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">
                  <i :class="getIconClass(course.Type)" :style="{ color: getIconColor(course.Type) }"></i> {{ course.Title
                  }}
                </h5>
                <div class="description-container">
                  <p class="card-text description">
                    <i class="bx bx-info-circle"></i> {{ course.Description }}
                  </p>
                </div>
                <p class="card-text">
                  <i class="bx bx-dollar"></i> R$ {{ course.Price.toFixed(2) }}
                </p>
                <p class="card-text">
                  <i class="bx bx-walk"></i> {{ course.Model }}
                </p>
                <p class="card-text">
                  <i class="bx bx-category"></i> {{ course.Category }}
                </p>
                <a href="#" class="btn btn-primary">Saiba Mais</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />

  </div>

</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import axios from '@/utils/axios'

export default {
  components: {
    Navbar,
    Footer,
  },

  data() {
    return {
      courses: [],
    };
  },

  methods: {
    entrar() {
      console.log('Botão "Entrar" clicado');
    },

    async fetchCourses() {
      try {
        const response = await axios.get('/courses');
        this.courses = response.data;
      } catch (error) {
        console.error('Erro ao buscar os cursos:', error);
      }
    },

    getIconClass(type) {
      const iconMap = {
        Tecnologia: 'bx bx-code',
        Marketing: 'bx bx-bar-chart',
        Design: 'bx bx-paint',
        Arte: 'bx bx-image',
        Idiomas: 'bx bx-globe',
        Negócios: 'bx bx-briefcase',
        Exercício: 'bx bx-dumbbell',
      };

      return iconMap[type] || 'bx-question-mark';
    },

    getIconColor(type) {
      const colorMap = {
        Tecnologia: '#3498db',
        Marketing: '#e74c3c',
        Design: '#2ecc71',
        Arte: '#f39c12',
        Idiomas: '#9b59b6',
        Negócios: '#34495e',
        Exercício: '#1abc9c',
      };

      return colorMap[type] || '#000';
    },
  },

  created() {
    this.fetchCourses();
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
  cursor: default;
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

.courses {
  background-color: #f2f2f2;
  padding: 40px 0;
}

.card {
  transition: transform 0.3s ease-in-out;
  height: 100%;
}

.card:hover {
  transform: scale(1.05);
}

.text-center{
  cursor: default;
}

.card-body {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-title {
  font-size: 1.25rem;
  cursor: default;
}

.card-text{
  cursor: default;
}

.description-container {
  flex-grow: 1;
  overflow: hidden;
  margin-bottom: 10px;
}

.description {
  color: #555;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.btn-primary {
  background-color: var(--primary);
  border-color: var(--primary);
}

.btn-primary:hover {
  background-color: var(--primary-black);
  border-color: var(--primary-black);
}

</style>