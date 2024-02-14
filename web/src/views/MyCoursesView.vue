<template>
  <div class="my-courses">

    <Navbar />

    <div class="courses">
      <div class="container">
        <h2 style="margin-top: 20px;" class="text-center mb-4">Meus Cursos</h2>

        <div class="row">
          <div v-for="userCourse in userCourses" :key="userCourse.UserCourseID" class="col-md-4 mb-4">
            <div class="card">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">
                  <i :class="getIconClass(userCourse.Type)"
                    :style="{ color: getIconColor(userCourse.Type) }"></i> {{ userCourse.Title }}
                </h5>
                <div class="description-container">
                  <p class="card-text description">
                    <i class="bx bx-info-circle"></i> {{ userCourse.Description }}
                  </p>
                </div>
                <p class="card-text">
                  <i class="bx bx-walk"></i> {{ userCourse.Model }}
                </p>
                <p class="card-text">
                  <i class="bx bx-category"></i> {{ userCourse.Category }}
                </p>
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
import axios from '@/utils/axios';
import { jwtDecode } from "jwt-decode";

export default {
  components: {
    Navbar,
    Footer,
  },

  beforeRouteEnter(to, from, next) {
    const documentTitle = typeof to.meta.title === 'string' ? to.meta.title : 'Enrofy';
    document.title = documentTitle;
    next();
  },

  created() {
    this.fetchUserCourses();
  },

  data() {
    return {
      userCourses: [],
    };
  },

  methods: {

    async fetchUserCourses() {
      try {

        const token = localStorage.getItem("token");

        if (token && typeof token === "string") {
          try {
            const decodedToken = jwtDecode(token);
            this.userId = decodedToken.userid
          } catch (error) {
            console.error("Error decoding token:", error);
          }
        }

        const userID = this.userId;
        console.log(this.userID)

        const response = await axios.get(`/user-courses/${userID}`);
        this.userCourses = response.data;
        console.log(this.userCourses)
      } catch (error) {
        console.error('Erro ao buscar os cursos do usuário:', error);
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

  // ...
}
</script>

<style scoped>
.card {
  transition: transform 0.3s ease-in-out;
  height: 100%;
}

.card:hover {
  transform: scale(1.05);
}

.text-center {
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

.card-text {
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

.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}

</style>