<template>
  <div>
    <link
      rel="stylesheet"
      href="path/to/font-awesome/css/font-awesome.min.css"
    />
    <div class="contact">
      <h1 class="title">Tipos de servicios</h1>
    </div>
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">
          <font style="vertical-align: inherit"
            ><font style="vertical-align: inherit">Formulario</font></font
          >
        </h4>
      </div>
      <div class="card-body">
        <form class="form">
          <div class="row">
            <div class="col-md-6 col-12">
              <div class="mb-1">
                <label class="form-label" for="first-name-column"
                  ><font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit"
                      >Nombre</font
                    ></font
                  ></label
                >
                <input
                  type="text"
                  id="first-name-column"
                  class="form-control"
                  placeholder="Nombre"
                  name="fname-column"
                />
              </div>
            </div>
            <div class="col-md-6 col-12">
              <div class="mb-1">
                <label class="form-label" for="last-name-column"
                  ><font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit">Apellido</font></font
                  ></label
                >
                <input
                  type="text"
                  id="last-name-column"
                  class="form-control"
                  placeholder="Apellido"
                  name="lname-column"
                />
              </div>
            </div>
            <div class="col-md-6 col-12">
              <div class="mb-1">
                <label class="form-label" for="city-column"
                  ><font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit">asd</font></font
                  ></label
                >
                <input
                  type="text"
                  id="city-column"
                  class="form-control"
                  placeholder="asd"
                  name="city-column"
                />
              </div>
            </div>
            <div class="col-md-6 col-12">
              <div class="mb-1">
                <label class="form-label" for="country-floating"
                  ><font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit">asd</font></font
                  ></label
                >
                <input
                  type="text"
                  id="country-floating"
                  class="form-control"
                  name="country-floating"
                  placeholder="asd"
                />
              </div>
            </div>
            <div class="col-md-6 col-12">
              <div class="mb-1">
                <label class="form-label" for="company-column"
                  ><font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit">asd</font></font
                  ></label
                >
                <input
                  type="text"
                  id="company-column"
                  class="form-control"
                  name="company-column"
                  placeholder="asd"
                />
              </div>
            </div>
            <div class="col-md-6 col-12">
              <div class="mb-1">
                <label class="form-label" for="email-id-column"
                  ><font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit"
                      >Correo electrónico</font
                    ></font
                  ></label
                >
                <input
                  type="email"
                  id="email-id-column"
                  class="form-control"
                  name="email-id-column"
                  placeholder="Correo electrónico"
                />
              </div>
            </div>
            <div class="col-12">
              <button
                type="reset"
                class="
                  btn btn-primary
                  me-1
                  waves-effect waves-float waves-light
                "
              >
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">Registrar</font></font
                >
              </button>
              <button
                type="reset"
                class="btn btn-outline-secondary waves-effect"
              >
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">Limpiar</font></font
                >
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  created() {},

  methods: {},
};
</script>