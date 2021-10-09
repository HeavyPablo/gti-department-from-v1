<template>
  <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css" />
  <div class="contact">
    <h1 class="title">Lista Servicios</h1>
  </div>
  <div id="DataTables_Table_0_filter" class="dataTables_filter">
    <label
      >Buscar:<input
        type="search"
        class="form-control"
        placeholder=""
        aria-controls="DataTables_Table_0"
    /></label>
    <div class="card-header border-bottom p-1">
    <div class="dt-action-buttons text-end">
      <div class="dt-buttons d-inline-flex">
        <button
          class="
            dt-button
            buttons-collection
            btn btn-outline-secondary
            dropdown-toggle
            me-2
          "
          tabindex="0"
          aria-controls="DataTables_Table_0"
          type="button"
          aria-haspopup="true"
        >
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-share font-small-4 me-50"
            >
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
              <polyline points="16 6 12 2 8 6"></polyline>
              <line x1="12" y1="2" x2="12" y2="15"></line></svg
            >Buscar</span
          >
        </button>

      </div>
    </div>
  </div>


  </div>
  
  <div class="container" style="margin-top: 59px">
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#id</th>
          <th scope="col">Lugar</th>
          <th scope="col">Partir de la Fecha </th>
          <th scope="col">Hasta la fecha</th>
          <th scope="col">Contacto</th>
          <th scope="col">Tipo Servicio</th>
          <th scope="col">Trasnporte</th>
        </tr>
      </thead>
      <tbody>
        <tr>
       
          <td>15252336</td>
          <td>Plaza de armas Melipilla</td>
          <td>15/11/2021</td>
          <td>20/11/2021</td>
          <td>+569 59571232</td>
          <td>TOUR</td>
          <td>Auto Citroen CD MC 59</td>

          
          
        </tr>
        <tr>
   
          <td>15255446</td>
          <td>Estacion Central Santiago Centro</td>
          <td>10/12/2021</td>
          <td>13/12/2021</td>
          <td>+569 51236749</td>
          <td>TOUR</td>
          <td>MAZDA 3 Rojo MJ 26 24</td> 
          
        </tr>
        <tr>

          <td>26543562</td>
          <td>Playa La Herradura Coquimbo</td>
          <td>27/12/2021</td>
          <td>27/12/2021</td>
          <td>+569 96352418</td>
          <td>TOUR</td>
          <td>CHERY TIGGO Azul ZC CD 59</td>
          
        </tr>
      </tbody>
    </table>
  </div>






</template>

<script>
export default {
  _name: "ListaServicio",
  get name() {
    return this._name;
  },
  set name(value) { 
    this._name=value;
  },
  data() {
    return {};
  },

  created() {},

  methods: {},
};
</script>