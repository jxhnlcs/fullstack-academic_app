<template>
  <div class="modal-overlay" v-if="showModal">
    <div class="modal-box">
      <div class="modal-header">
        <button class="close-button" @click="closeModal">&#10006;</button>
      </div>
      <div class="content-modal">
        <div class="left-modal">
          <h1>Antes de conferir seu curso<br>vamos nos cadastrar!</h1>
          <img src="../assets/image/course-app-animate.svg" alt="Your Image" />
        </div>
        <div class="right-modal">
          <div v-if="step === 1">
            <h3>Informações Principais</h3>
            <form @submit.prevent="nextStep">

              <label for="name">Nome*</label>
              <input v-model="name" type="text" id="name">

              <label for="email">E-mail*</label>
              <input v-model="email" type="email" id="email">

              <label for="phone">Telefone*</label>
              <input @input="formatarTelefone" v-model="phone" type="tel" id="phone">

              <div class="next">
                <button class="prosseguir" type="submit"><i class='bx bx-right-arrow-alt'></i></button>
              </div>
            </form>
          </div>

          <div v-else-if="step === 2">
            <h3>Informações Adicionais</h3>
            <form @submit.prevent="nextStep">
              <label for="cep">CEP*</label>
              <input @input="formatarCep" v-model="cep" type="text" id="cep">

              <label for="cpf">CPF*</label>
              <input @input="formatarCpf" v-model="cpf" type="text" id="cpf">

              <label for="birthdate">Data de Nascimento*</label>
              <input v-model="birthdate" type="date" id="birthdate">

              <div class="buttons-next">
                <button class="prosseguir" @click.prevent="prevStep"><i class='bx bx-left-arrow-alt'></i></button>
                <button class="prosseguir" type="submit"><i class='bx bx-right-arrow-alt'></i></button>
              </div>
            </form>
          </div>

          <div v-else-if="step === 3">
            <h3>Informações Finais</h3>
            <form @submit.prevent="submitForm">

              <label for="username">Usuário*</label>
              <input v-model="username" type="text" id="username">

              <label for="password">Senha*</label>
              <input v-model="password" type="password" id="password">

              <label for="document">Enviar Documento*</label>
              <input class="file" type="file" id="document" accept=".pdf, .jpg, .png">

              <div class="buttons-next">
                <button class="prosseguir" @click.prevent="prevStep"><i class='bx bx-left-arrow-alt'></i></button>
                <button class="prosseguir" type="submit">Enviar</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/utils/axios';
import Swal from 'sweetalert2';


export default {

  data() {
    return {
      showModal: false,
      step: 1,
      name: '',
      email: '',
      phone: '',
      cep: '',
      cpf: '',
      birthdate: '',
      username: '',
      password: '',
      document: null,
    };
  },

  props: {
    showModal: Boolean,
  },

  methods: {

    formatarTelefone(telefone) {
      const telefoneFormatado = event.target.value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
      this.phone = telefoneFormatado;
    },

    formatarCep(cep) {
      const cepFormatado = event.target.value.replace(/(\d{5})(\d{3})/, '$1-$2');
      this.cep = cepFormatado;
    },

    formatarCpf(cpf) {
      const cpfFormatado = event.target.value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
      this.cpf = cpfFormatado;
    },

    isValidName(value) {
      const regex = /^[a-zA-ZÀ-ÿ\s]+$/;
      return regex.test(value);
    },

    isValidNumber(value) {
      const regex = /^[0-9]+$/;
      return regex.test(value);
    },

    isValidPhone(value) {
      const regex = /^[0-9]+$/;
      return regex.test(value);
    },

    openModal() {
      this.showModal = true;
    },

    closeModal() {
      this.$emit("close-modal");
    },

    nextStep() {
      this.step++;
    },

    prevStep() {
      this.step--;
    },

    async submitForm() {
      try {

        if (!this.isValidName(this.name)) {
          Swal.fire({
            icon: 'error',
            title: 'Erro',
            text: 'O campo Nome deve conter apenas letras e acentos.',
          });
          return;
        }

        if (!this.isValidNumber(this.cep)) {
          Swal.fire({
            icon: 'error',
            title: 'Erro',
            text: 'O campo CEP deve conter apenas números.',
          });
          return;
        }

        if (!this.isValidNumber(this.cpf)) {
          Swal.fire({
            icon: 'error',
            title: 'Erro',
            text: 'O campo CPF deve conter apenas números.',
          });
          return;
        }

        if (!this.isValidPhone(this.phone)) {
          Swal.fire({
            icon: 'error',
            title: 'Erro',
            text: 'O campo Telefone deve conter apenas números.',
          });
          return;
        }

        const responseCadastro = await axios.post('/cadastrar', {
          Name: this.name,
          Username: this.username,
          Password: this.password,
          Email: this.email,
          Telefone: this.phone,
          CEP: this.cep,
          CPF: this.cpf,
          Nascimento: this.birthdate,
          Documento: this.document,
        });

        if (responseCadastro.status >= 200 && responseCadastro.status < 300) {
          const responseLogin = await axios.post('/login', {
            Username: this.username,
            Password: this.password,
          });

          localStorage.setItem('token', responseLogin.data.token);

          this.closeModal();
          this.resetForm();

          Swal.fire({
            icon: 'success',
            title: 'Cadastro efetuado com sucesso!',
            showConfirmButton: false,
            timer: 3500,
          }).then(() => {
            location.reload();
          });

          

        }
      } catch (error) {
        console.error('Erro ao enviar formulário:', error);
      }
    },

    resetForm() {
      this.step = 1;
      this.name = '';
      this.email = '';
      this.phone = '';
      this.cep = '';
      this.cpf = '';
      this.username = '';
      this.password = '';
      this.birthdate = '';
      this.document = null;
    },

  },

};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.modal-box {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  width: 45%;
  padding: 20px;
}

.modal-header {
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: -20px;
  margin-right: -20px;
}

.content-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -30px;
}

.left-modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-right: 30px;
}

.left-modal h1 {
  font-size: 24px;
  text-align: center;
}

.left-modal img {
  width: 100%;
  height: auto;
}

.right-modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

h3 {
  font-size: 18px;
  margin-bottom: 15px;
}

label {
  color: #345434;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  margin-top: 10px;
}

input {
  display: flex;
  padding: 10px 14px;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid #d0ddd1;
  background: #FFF;
  outline: none;
  width: 100%;

  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
}

input[type="file"] {
  font-size: 8px;
  border: 1px solid #d0ddd1;
}

.prosseguir {
  margin-top: 10px;
  background-color: #00BE4B;
  color: white;
  border: none;
  padding: 5px 14px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}

.close-button {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #555;
  padding: 10px 15px;
}

.next {
  display: flex;
  justify-content: end;
}

.buttons-next {
  display: flex;
  justify-content: space-between;
}
</style>