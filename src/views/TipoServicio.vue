<template>
  <div>
    <link
      rel="stylesheet"
      href="path/to/font-awesome/css/font-awesome.min.css"
    />
    <div class="contact">
      <h1 class="title">Tipos de servicios</h1>
    </div>
    <hr style="border-color: red" />
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">
          <font style="vertical-align: inherit"
            ><font style="vertical-align: inherit"
              >Registro Servicio</font
            ></font
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
                      >Nombre Completo</font
                    ></font
                  ></label
                >
                <input
                  type="text"
                  id="first-name-column"
                  class="form-control"
                  placeholder="Nombre Completo"
                  name="fname-column"
                />
              </div>
            </div>
            <div class="col-md-6 col-12">
              <div class="mb-1">
                <label class="form-label" for="last-name-column"
                  ><font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit">Fecha</font></font
                  ></label
                >
                <input
                  type="text"
                  class="form-control date-mask"
                  placeholder="AAAA-MM-DD"
                  id="date"
                />
              </div>
            </div>
            <div class="col-md-6 col-12">
              <div class="mb-1">
                <label class="form-label" for="city-column"
                  ><font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit"
                      >Tipo de Servicio</font
                    ></font
                  ></label
                >
                <select class="form-select" id="basicSelect">
                  <option>
                    <font style="vertical-align: inherit"
                      ><font style="vertical-align: inherit">Servico 1</font></font
                    >
                  </option>
                  <option>
                    <font style="vertical-align: inherit"
                      ><font style="vertical-align: inherit"
                        >Servico 2</font
                      ></font
                    >
                  </option>
                  <option>
                    <font style="vertical-align: inherit"
                      ><font style="vertical-align: inherit"
                        >Servico 3</font
                      ></font
                    >
                  </option>
                </select>
              </div>
            </div>
            <div class="col-md-6 col-12">
              <div class="mb-1">
                <label class="form-label" for="country-floating"
                  ><font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit">Lugar</font></font
                  ></label
                >
                <input
                  type="text"
                  id="country-floating"
                  class="form-control"
                  name="country-floating"
                  placeholder="Lugar"
                />
              </div>
            </div>
            <div class="col-md-6 col-12">
              <div class="mb-1">
                <label class="form-label" for="company-column"
                  ><font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit">Teléfono</font></font
                  ></label
                >
                <div class="input-group input-group-merge">
                  <span class="input-group-text"
                    ><font style="vertical-align: inherit"
                      ><font style="vertical-align: inherit"
                        >Chile (+569)</font
                      ></font
                    ></span
                  >
                  <input
                    type="text"
                    class="form-control phone-number-mask"
                    placeholder="1234 5678"
                    id="phone-number"
                  />
                </div>
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