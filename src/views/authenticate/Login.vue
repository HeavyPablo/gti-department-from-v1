<template>
  <div>
    <div class="content-overlay"></div>
    <div class="content-wrapper">
      <div class="content-header row"></div>
      <div class="content-body">
        <div class="auth-wrapper auth-cover">
          <div class="auth-inner row m-0">
            <a class="brand-logo" href="">
              <h2 class="brand-text text-primary ms-1">Turismo Real</h2>
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
                  src="@/assets/images/pages/login-v2.svg"
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
                  class="auth-login-form mt-2"
                  action="index.html"
                  method="POST"
                >
                  <div class="mb-1">
                    <label class="form-label" for="login-email">Email</label>
                    <input
                      class="form-control"
                      id="login-email"
                      type="text"
                      name="login-email"
                      placeholder="john@example.com"
                      aria-describedby="login-email"
                      autofocus=""
                      tabindex="1"
                    />
                  </div>
                  <div class="mb-1">
                    <label class="form-label" for="login-password"
                      >Contraseña</label
                    >
                    <div
                      class="input-group input-group-merge form-password-toggle"
                    >
                      <input
                        class="form-control form-control-merge"
                        id="login-password"
                        type="password"
                        name="login-password"
                        placeholder="············"
                        aria-describedby="login-password"
                        tabindex="2"
                      /><span class="input-group-text cursor-pointer"
                        ><i data-feather="eye"></i
                      ></span>
                    </div>
                  </div>
                  <button class="btn btn-primary w-100" tabindex="4">
                    Ingresar
                  </button>
                </form>
                <p class="text-center mt-2">
                  <span>¿Eres nuevo en nuestra plataforma?</span
                  ><a href="auth-register-cover.html"
                    ><span>&nbsp;Crea una cuenta</span></a
                  >
                </p>
                <div class="divider my-2">
                  <div class="divider-text">o</div>
                </div>

                <div class="auth-footer-btn d-flex justify-content-center">
                  <a class="btn btn-facebook" href="#">
                    <vue-feather type="facebook"></vue-feather>
                  </a>
                  <a class="btn btn-twitter white" href="#">
                    <vue-feather type="twitter"></vue-feather>
                  </a>
                  <a class="btn btn-google" href="#">
                    <vue-feather type="mail"></vue-feather>
                  </a>
                </div>
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
export default {
  data() {
    return [];
  },

  props: [""],

  created() {},

  methods: {},
};
</script>

<style scoped src="@/assets/css/pages/authentication.min.css">
</style>