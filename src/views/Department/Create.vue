<template>
    <div>
        <modal id="dlgNewDepartment" title="Crear nuevo Departamento">
            <template v-slot:body>
              <div class="card-body m">
                <form class="form">
                    <div class="row">
                        <div class="ecommerce-gallery" data-mdb-zoom-effect="true" data-mdb-auto-height="true">
  <div class="row py-3 shadow-5">
    <div class="col-12 mb-1">
      <div class="lightbox">
        <img
          src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg"
          alt="Gallery image 1"
          class="ecommerce-gallery-main-img active w-100"
        />
      </div>
    </div>
    <div class="col-3 mt-1">
      <img
        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg"
        data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg"
        alt="Gallery image 1"
        class="active w-100"
      />
    </div>
    <div class="col-3 mt-1">
      <img
        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
        data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
        alt="Gallery image 2"
        class="w-100"
      />
    </div>
    <div class="col-3 mt-1">
      <img
        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg"
        data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg"
        alt="Gallery image 3"
        class="w-100"
      />
    </div>
    <div class="col-3 mt-1">
      <img
        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
        data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
        alt="Gallery image 4"
        class="w-100"
      />
    </div>
  </div>
</div>
                        <div class="col-md-6 col-12">
                            <div class="mb-1">
                                <label class="form-label" for="first-name-column"
                                ><font style="vertical-align: inherit"
                                    ><font style="vertical-align: inherit">Nombre Completo</font></font
                                ></label>
                                <input type="text" id="first-name-column" class="form-control" placeholder="Nombre Completo" name="fname-column"/>
                            </div>
                        </div>
                            <div class="col-md-6 col-12">
                                <div class="mb-1">
                                    <label class="form-label" for="last-name-column"><font style="vertical-align: inherit"><font style="vertical-align: inherit">Fecha</font></font></label>
                                    <input type="text" class="form-control date-mask" placeholder="AAAA-MM-DD" id="date"/>
                                </div>
                            </div>
                            <div class="col-md-6 col-12">
                                <div class="mb-1">
                                    <label class="form-label" for="city-column"><font style="vertical-align: inherit"><font style="vertical-align: inherit">Tipo de Servicio</font></font></label>
                                    <select class="form-select" id="basicSelect">
                                        <option>
                                            <font style="vertical-align: inherit"><font style="vertical-align: inherit">Servico 1</font></font>
                                        </option>
                                        <option>
                                            <font style="vertical-align: inherit"><font style="vertical-align: inherit" >Servico 2</font></font>
                                        </option>
                                        <option>
                                            <font style="vertical-align: inherit"><font style="vertical-align: inherit">Servico 3</font></font>
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6 col-12">
                                <div class="mb-1">
                                    <label class="form-label" for="country-floating"/>
                                        <font style="vertical-align: inherit"><font style="vertical-align: inherit">Lugar</font></font >
                                    <input type="text" id="country-floating" class="form-control" name="country-floating" placeholder="Lugar" >
                                </div>
                            </div>
                    </div>
                </form>
      </div>
            </template>

            <template v-slot:btnSuccess>
                <button type="button" class="btn btn-primary" @click="store">Guardar</button>
            </template>
        </modal>
    </div>
</template>

<script>
import Department from '../../services/Department'
import { Modal } from 'bootstrap'


export default {
    data() {
        return {
            create: {},
            errors: {}
        }
    },

    methods: {
        async store() {
            this.$toast.clear();

            await Department.store(this.create, () => {
                this.$toast.open({
                    message: 'Tipo de equipamiento creado!',
                    type: 'success'
                });

                this.create = {};

                this.$emit('stored');

                var myModalEl = document.getElementById('dlgNewDepartment')
                var modal = Modal.getInstance(myModalEl)
                modal.hide();
            }, errors => {
                this.errors = errors
            })
        }
    }
}
</script>