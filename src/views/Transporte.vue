<template>
  <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css" />
  <div class="contact">
    <h1 class="title">Transporte</h1>
  </div>
  <hr style="border-color:red;">
  <div id="DataTables_Table_0_filter" class="dataTables_filter">
    <label
      >Buscar:<input
        type="search"
        class="form-control"
        placeholder=""
        aria-controls="DataTables_Table_0"
    /></label>
  </div>
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
            >Exportar</span
          >
        </button>
        <button
          class="dt-button create-new btn btn-primary"
          tabindex="0"
          aria-controls="DataTables_Table_0"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#modals-slide-in"
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
              class="feather feather-plus me-50 font-small-4"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line></svg
            >Añadir nuevo registro</span
          >
        </button>
      </div>
    </div>
  </div>
  <div class="container" style="margin-top: 59px">
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Correo</th>
          <th scope="col">Lugar</th>
          <th scope="col">Horario</th>
          <th scope="col">Vehículo</th>
          <th scope="col">Patente</th>
          <th scope="col">Conductor</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Juan Mendez</td>
          <td>jmendez@gmail.com</td>
          <td>Turístico</td>
          <td>No Disponible</td>
          <td>Kia</td>
          <td>GWKG-64</td>
          <td>Marcelo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Claudia López</td>
          <td>clopez@gmail.com</td>
          <td>Turístico</td>
          <td>Tarde</td>
          <td>Mazda</td>
          <td>DR67-68</td>
          <td>Luis</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Benjamin Morales</td>
          <td>bmorales@gmail.com</td>
          <td>Turístico</td>
          <td>Mañana</td>
          <td>Honda</td>
          <td>BBBB-10</td>
          <td>No asiganado</td>
        </tr>
      </tbody>
    </table>
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

