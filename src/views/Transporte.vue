<template>

  <div>
    <div class="content-header row">
      <div class="content-header-left col-md-9 col-12 mb-2">
        <div class="row breadcrumbs-top">
          <div class="col-12">
            <h2 class="content-header-title float-start mb-0">Transporte</h2>
          </div>
        </div>
      </div>
      <div
        class="
          content-header-right
          text-md-end
          col-md-3 col-12
          d-md-block d-none
        "
      >
        <div class="mb-1 breadcrumb-right">
          <div class="dropdown">
            <button
              class="
                btn-icon btn btn-primary btn-round btn-sm
                dropdown-toggle
                waves-effect waves-float waves-light
              "
              type="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
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
                class="feather feather-grid"
              >
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            </button>
            <div class="dropdown-menu dropdown-menu-end">
              <a class="dropdown-item" href="app-todo.html"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-check-square me-1"
                >
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path
                    d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
                  ></path></svg
                ><span class="align-middle">Todo</span></a
              ><a class="dropdown-item" href="app-chat.html"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-message-square me-1"
                >
                  <path
                    d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                  ></path></svg
                ><span class="align-middle">Chat</span></a
              ><a class="dropdown-item" href="app-email.html"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-mail me-1"
                >
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  ></path>
                  <polyline points="22,6 12,13 2,6"></polyline></svg
                ><span class="align-middle">Email</span></a
              ><a class="dropdown-item" href="app-calendar.html"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-calendar me-1"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line></svg
                ><span class="align-middle">Calendar</span></a
              >
            </div>
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
              <div class="card-header border-bottom p-1">
                <div class="head-label">
                  <h6 class="mb-0">Desde/Hacia el Departamento</h6>
                </div>
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
                          <path
                            d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
                          ></path>
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
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="75">75</option>
                        <option value="100">100</option>
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
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="checkboxSelectAll"
                        /><label
                          class="form-check-label"
                          for="checkboxSelectAll"
                        ></label>
                      </div>
                    </th>
                    <th
                      class="sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      style="width: 121px"
                      aria-label="Name: activate to sort column ascending"
                    >
                      Nombre
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
                      Correo
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
                      Lugar
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
                      Horario
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
                      Vehículo
                    </th>
                    <th
                      class="sorting_disabled"
                      rowspan="1"
                      colspan="1"
                      style="width: 149px"
                      aria-label="Actions"
                    >
                      Conductor
                    </th>
                  </tr>
                </thead>
                <tbody>
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
      <!-- Modal to add new record -->
      <div class="modal modal-slide-in fade" id="modals-slide-in">
        <div class="modal-dialog sidebar-sm">
          <form class="add-new-record modal-content pt-0">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              ×
            </button>
            <div class="modal-header mb-1">
              <h5 class="modal-title" id="exampleModalLabel">New Record</h5>
            </div>
            <div class="modal-body flex-grow-1">
              <div class="mb-1">
                <label class="form-label" for="basic-icon-default-fullname"
                  >Full Name</label
                >
                <input
                  type="text"
                  class="form-control dt-full-name"
                  id="basic-icon-default-fullname"
                  placeholder="John Doe"
                  aria-label="John Doe"
                />
              </div>
              <div class="mb-1">
                <label class="form-label" for="basic-icon-default-post"
                  >Post</label
                >
                <input
                  type="text"
                  id="basic-icon-default-post"
                  class="form-control dt-post"
                  placeholder="Web Developer"
                  aria-label="Web Developer"
                />
              </div>
              <div class="mb-1">
                <label class="form-label" for="basic-icon-default-email"
                  >Email</label
                >
                <input
                  type="text"
                  id="basic-icon-default-email"
                  class="form-control dt-email"
                  placeholder="john.doe@example.com"
                  aria-label="john.doe@example.com"
                />
                <small class="form-text">
                  You can use letters, numbers &amp; periods
                </small>
              </div>
              <div class="mb-1">
                <label class="form-label" for="basic-icon-default-date"
                  >Joining Date</label
                >
                <input
                  type="text"
                  class="form-control dt-date flatpickr-input"
                  id="basic-icon-default-date"
                  placeholder="MM/DD/YYYY"
                  aria-label="MM/DD/YYYY"
                  readonly="readonly"
                />
              </div>
              <div class="mb-4">
                <label class="form-label" for="basic-icon-default-salary"
                  >Salary</label
                >
                <input
                  type="text"
                  id="basic-icon-default-salary"
                  class="form-control dt-salary"
                  placeholder="$12000"
                  aria-label="$12000"
                />
              </div>
              <button
                type="button"
                class="
                  btn btn-primary
                  data-submit
                  me-1
                  waves-effect waves-float waves-light
                "
              >
                Submit
              </button>
              <button
                type="reset"
                class="btn btn-outline-secondary waves-effect"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </form>
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

