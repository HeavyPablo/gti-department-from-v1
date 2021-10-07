<template>
  <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css" />
  <div class="contact">
    <h1 class="title">Disponible</h1>
  </div>
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
          <th scope="col">Estado</th>
          <th scope="col">Capacidad</th>
          <th scope="col">Cuarto</th>
          <th scope="col">cuarto de baño</th>
          <th scope="col">Direccion</th>
          <th scope="col">Descripcion</th>
          <th scope="col">Precio</th>
        </tr>
      </thead>
      <tbody>
        <tr>
       
          <td></td>
          <td>Disponible</td>
          <td>2 persona</td>
          <td>2</td>
          <td>1</td>
          <td>vargas 475</td>
          <td>..........</td>
          <td>250.000</td>
        </tr>
        <tr>
   
          <td></td>
          <td>Disponible</td>
          <td>2 persona</td>
          <td>2</td>
          <td>1</td>
          <td>vargas 475</td>
          <td>..........</td> 
          <td>250.000</td>
        </tr>
        <tr>

          <td></td>
          <td>Disponible</td>
          <td>2 persona</td>
          <td>2</td>
          <td>1</td>
          <td>vargas 475</td>
          <td>..........</td>
          <td>250.000</td>
        </tr>
      </tbody>
    </table>
  </div>






</template>


<script>
 
  export default {
    data() {
      return {
      
      }
    }
  }
</script>

