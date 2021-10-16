<template>
  <div>
    <div class="content-overlay"></div>
    <div class="content-wrapper">
      <div class="content-header row"></div>
      <div class="content-body">
        <div class="auth-wrapper auth-cover">
          <div class="auth-inner row m-0">
            <a class="brand-logo" href="">
              <h2 class="brand-text text-primary ms-1">Arriendo Departamento</h2>
            </a>

            <!-- Left Text-->
            <div class="d-none d-lg-flex col-lg-8 align-items-center p-5">
              <div
                class="
                  w-100
                  d-lg-flex
                  align-items-center
                  justify-content-center
                  px-5
                "
              >
                <img
                  class="img-fluid"
                  src="@/assets/images/pages/login-v22.jpg"
                  alt="Login V2"
                />
              </div>
            </div>
            <!-- /Left Text-->

            <!-- Login-->
            <div class="d-flex col-lg-4 align-items-center auth-bg px-2 p-lg-5">
              <div class="col-12 col-sm-8 col-md-6 col-lg-12 px-xl-2 mx-auto">
                <h2 class="card-title fw-bold mb-1">Bienvenido/a</h2>
                <p class="card-text mb-2">Ingresa tu cuenta para continuar</p>
                <form
                  class="auth-login-form mt-2" @submit.prevent="login"
                >
                  <div class="mb-1">
                    <label class="form-label" for="login-email">Email</label>
                    <input
                      class="form-control"
                      type="text"
                      placeholder="john@example.com"
                      required
                      v-model="create.username"
                    />
                  </div>

                  <div class="mb-1">
                    <label class="form-label" for="login-password"
                      >Contraseña</label>
                    <div
                      class="input-group input-group-merge form-password-toggle"
                    >
                      <input
                        class="form-control form-control-merge"
                        type="password"
                        placeholder="············"
                        required
                        v-model="create.password"
                      />
                      <span class="input-group-text cursor-pointer"><i data-feather="eye"></i></span>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary w-100" tabindex="4">
                    Ingresar
                  </button>
                </form>
              </div>
            </div>
            <!-- /Login-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Login from '../../services/Login';

export default {
  data() {
    return {
      create: {},
      errors: {}
    };
  },

  props: [""],

  created() {},

  methods: {

    login() {
      this.$toast.clear();
      Login.store(this.create, data => {
        this.$toast.open({
            message: 'Credenciales correctas!',
            type: 'success'
        });

        localStorage.setItem('user-token', data.token);
        localStorage.setItem('token-refresh', data.refreshToken);
        localStorage.setItem('username', data.user ? data.user.username : '');
        localStorage.setItem('role', data.user && data.user.role ? data.user.role.name : '');

        window.location.href = '/';
      }, errors => {
        this.errors = errors;
        if (this.errors.status && this.errors.status === 401) {
          this.$toast.open({
              message: 'Usuario y/o contraseña incorrecta!',
              type: 'error'
          });
        }
      })
    },

  },
};
</script>

<style scoped src="@/assets/css/pages/authentication.min.css">
</style>