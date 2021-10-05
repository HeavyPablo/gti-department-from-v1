<template>
  <div>
    <div class="content-header row">
      <div class="content-header-left col-md-9 col-12 mb-2">
        <div class="row breadcrumbs-top">
          <div class="col-12">
            <h2 class="content-header-title float-start mb-0">Disponible</h2>
          </div>
        </div>
      </div>
    </div>

    <section id="basic-datatable">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div
              id="DataTables_Table_0_wrapper"
              class="dataTables_wrapper dt-bootstrap5 no-footer"
            >
          
              <div
                class="
                  d-flex
                  justify-content-between
                  align-items-center
                  mx-0
                  row
                "
              >
                <div class="col-sm-12 col-md-6">
                  <div class="dataTables_length" id="DataTables_Table_0_length">
                    <label
                      >Filtro
                      <select
                        name="DataTables_Table_0_length"
                        aria-controls="DataTables_Table_0"
                        class="form-select"
                      >
                        <option value="7">7</option>
                        <option value="10">10</option>
                      </select>
                    </label>
                  </div>
                </div>
                <div class="col-sm-12 col-md-6">
                  <div id="DataTables_Table_0_filter" class="dataTables_filter">
                    <label
                      >Buscar:<input
                        type="search"
                        class="form-control"
                        placeholder=""
                        aria-controls="DataTables_Table_0"
                    /></label>
                  </div>
                </div>
              </div>
              <table
                class="datatables-basic table dataTable no-footer dtr-column"
                id="DataTables_Table_0"
                role="grid"
                aria-describedby="DataTables_Table_0_info"
                style="width: 1248px"
              >
                <thead>
                  <tr role="row">
                    <th
                      class="control sorting_disabled"
                      rowspan="1"
                      colspan="1"
                      style="width: 38px; display: none"
                      aria-label=""
                    ></th>
                    <th
                      class="
                        sorting_disabled
                        dt-checkboxes-cell dt-checkboxes-select-all
                      "
                      rowspan="1"
                      colspan="1"
                      style="width: 38px"
                      data-col="1"
                      aria-label=""
                    >
                   
                    </th>
                    <th
                      class="sorting"
                      scope="col"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      style="width: 121px"
                      aria-label="Name: activate to sort column ascending"
                    >
                      Estado
                    </th>
                    <th
                      class="sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      style="width: 125px"
                      aria-label="Email: activate to sort column ascending"
                    >
                      Direccion
                    </th>
                    <th
                      class="sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      style="width: 113px"
                      aria-label="Date: activate to sort column ascending"
                    >
                      Precio
                    </th>
                    <th
                      class="sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      style="width: 144px"
                      aria-label="Salary: activate to sort column ascending"
                    >
                      Descripcion 
                    </th>
                    <th
                      class="sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      style="width: 139px"
                      aria-label="Status: activate to sort column ascending"
                    >
                      capacidad
                    </th>
                  
                  </tr>
                </thead>
                <tbody>
                  <tr   scope="col" class="odd">
                    <td >
                       1
                    </td>
                    <td >
                      Disponible
                    </td>
                     <td >
                      Vargas 475
                    </td>
                     <td >
                     500
                    </td>
                     <td >
                     Pieza de departamento dispoble 
                    </td>
                    <td >
                     2 persona
                    </td>

                  </tr>
      <tr class="odd">
                    <td valign="top" colspan="7" class="dataTables_empty">
                      Cargando...
                    </td>
                

                  </tr>


                </tbody>
              </table>
              <div class="d-flex justify-content-between mx-0 row">
                <div class="col-sm-12 col-md-6">
                  <div
                    class="dataTables_info"
                    id="DataTables_Table_0_info"
                    role="status"
                    aria-live="polite"
                  >
                    Mostrando 0 a 0 de 0 entradas
                  </div>
                </div>
                <div class="col-sm-12 col-md-6">
                  <div
                    class="dataTables_paginate paging_simple_numbers"
                    id="DataTables_Table_0_paginate"
                  >
                    <ul class="pagination">
                      <li
                        class="paginate_button page-item previous disabled"
                        id="DataTables_Table_0_previous"
                      >
                        <a
                          href="#"
                          aria-controls="DataTables_Table_0"
                          data-dt-idx="0"
                          tabindex="0"
                          class="page-link"
                          >&nbsp;</a
                        >
                      </li>
                      <li
                        class="paginate_button page-item next disabled"
                        id="DataTables_Table_0_next"
                      >
                        <a
                          href="#"
                          aria-controls="DataTables_Table_0"
                          data-dt-idx="1"
                          tabindex="0"
                          class="page-link"
                          >&nbsp;</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <button
    class="
      btn btn-primary btn-icon
      scroll-top
      waves-effect waves-float waves-light
    "
    type="button"
    style="display: inline-block"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-arrow-up"
    >
      <line x1="12" y1="19" x2="12" y2="5"></line>
      <polyline points="5 12 12 5 19 12"></polyline>
    </svg>
  </button>
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

