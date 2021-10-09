<template>
  <div>
    <link
      rel="stylesheet"
      href="path/to/font-awesome/css/font-awesome.min.css"
    />
    <div class="contact">
      <h1 class="title">Agregar Departamento</h1>
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
                      >Estado</font
                    ></font
                  ></label
                >
                <input
                  type="text"
                  id="status-column"
                  class="form-control"
                  placeholder="Estado"
                  name="festado-column"
                />
              </div>
            </div>
            <div class="col-md-6 col-12">
              <div class="mb-1">
                <label class="form-label" for="last-name-column"
                  ><font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit">Capacidad</font></font
                  ></label
                >
                <input
                  type="text"
                  id="capacidad-column"
                  class="form-control"
                  placeholder="Capacidad"
                  name="lcapacidad-column"
                />
              </div>
            </div>
            <div class="col-md-6 col-12">
              <div class="mb-1">
                <label class="form-label" for="city-column"
                  ><font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit">cantidad de cuartos</font></font
                  ></label
                >
                <input
                  type="text"
                  id="city-column"
                  class="form-control"
                  placeholder="cantidad de cuartos"
                  name="lcuarto-column"
                />
              </div>
            </div>
            <div class="col-md-6 col-12">
              <div class="mb-1">
                <label class="form-label" for="country-floating"
                  ><font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit">cuarto de baño</font></font
                  ></label
                >
                <input
                  type="text"
                  id="country-floating"
                  class="form-control"
                  placeholder="cuarto de baño"
                  name="lcuartob"
                />
              </div>
            </div>
            <div class="col-md-6 col-12">
              <div class="mb-1">
                <label class="form-label" for="company-column"
                  ><font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit">Direccion</font></font
                  ></label
                >
                <input
                  type="text"
                  id="company-column"
                  class="form-control"
                  placeholder="Direccion"
                  name="ldireccion"
                />
              </div>
            </div>
            <div class="col-md-6 col-12">
              <div class="mb-1">
                <label class="form-label" for="email-id-column"
                  ><font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit"
                      >Descripcion</font
                    ></font
                  ></label
                >
                <input
                  type="text"
                  id="email-id-column"
                  class="form-control"
                  name="email-id-column"
                  placeholder="ldescripcion"
                />
              </div>
            </div>
            <div class="col-md-6 col-12">
              <div class="mb-1">
                <label class="form-label" for="email-id-column"
                  ><font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit"
                      >Valor</font
                    ></font
                  ></label
                >
                <input
                  type="email"
                  id="email-id-column"
                  class="form-control"
                  name="email-id-column"
                  placeholder="Valor"
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
  name : "Agregar",
  data:function() {
    return {
      id:null,
      form:{
        "status" : "",
        "capacity":"",
        "bedroom":"",
        "bathroom":"",
        "address":"",
        "description":"",
        "value":"",
        "created_at":"",
        "token" :""
      }
    };
  },
  mounted:function(){
    this.id = this.$route.prams.id;
    axios.get()
  }

  created() {},

  methods: {},
};
</script>