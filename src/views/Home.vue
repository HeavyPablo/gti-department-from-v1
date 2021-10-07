<template>
  <section id="knowledge-base-search">
    <div class="row">
      <div class="col-12">
        <div
          class="card knowledge-base-bg text-center"
          style="
            background-image: url('../../../app-assets/images/banner/banner.png');
          "
        >
          <div class="card-body">
            <h2 class="text-primary">
              <font style="vertical-align: inherit"
                ><font style="vertical-align: inherit"
                  >Bienvenido a Turismo Real!</font
                ></font
              >
            </h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="home">
    <div class="row">
      <div class="col-lg-3 col-sm-6">
        <div class="card">
          <div
            class="card-body d-flex align-items-center justify-content-between"
          >
            <div>
              <h3 class="fw-bolder mb-75">
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">21</font></font
                >
              </h3>
              <span
                ><font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit"
                    >Clientes Registrados</font
                  ></font
                ></span
              >
            </div>
            <div class="avatar bg-light-primary p-50">
              <span class="avatar-content">
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
                  class="feather feather-user font-medium-4"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6">
        <div class="card">
          <div
            class="card-body d-flex align-items-center justify-content-between"
          >
            <div>
              <h3 class="fw-bolder mb-75">
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">3</font></font
                >
              </h3>
              <span
                ><font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit"
                    >Departamentos Disponibles</font
                  ></font
                ></span
              >
            </div>
            <div class="avatar bg-light-danger p-50">
              <span class="avatar-content">
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
                  class="feather feather-user-plus font-medium-4"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="8.5" cy="7" r="4"></circle>
                  <line x1="20" y1="8" x2="20" y2="14"></line>
                  <line x1="23" y1="11" x2="17" y2="11"></line>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6">
        <div class="card">
          <div
            class="card-body d-flex align-items-center justify-content-between"
          >
            <div>
              <h3 class="fw-bolder mb-75">
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">18</font></font
                >
              </h3>
              <span
                ><font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">Reservas</font></font
                ></span
              >
            </div>
            <div class="avatar bg-light-success p-50">
              <span class="avatar-content">
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
                  class="feather feather-user-check font-medium-4"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="8.5" cy="7" r="4"></circle>
                  <polyline points="17 11 19 13 23 9"></polyline>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6">
        <div class="card">
          <div
            class="card-body d-flex align-items-center justify-content-between"
          >
            <div>
              <h3 class="fw-bolder mb-75">
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">0</font></font
                >
              </h3>
              <span
                ><font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">Inventario</font></font
                ></span
              >
            </div>
            <div class="avatar bg-light-warning p-50">
              <span class="avatar-content">
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
                  class="feather feather-user-x font-medium-4"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section id="knowledge-base-content">
      <div class="row kb-search-content-info match-height">
        <!-- sales card -->
        <div class="col-md-4 col-sm-6 col-12 kb-search-content">
          <div class="card">
            <a href="page-kb-category.html">
              <img
                src="@/assets/images/illustration/sales.svg"
                class="card-img-top"
                alt="imagen-base-conocimiento"
              />

              <div class="card-body text-center">
                <h4>
                  <font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit"
                      >Registrar Cliente</font
                    ></font
                  >
                </h4>
                <p class="text-body mt-1 mb-0">
                  <font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ducimus earum dolorum laudantium, dolorem voluptatum optio
                      praesentium quia beatae voluptate magni accusantium
                      repellendus eius non quaerat blanditiis architecto maxime
                      eum sit!
                    </font></font
                  >
                </p>
              </div>
            </a>
          </div>
        </div>

        <!-- marketing -->
        <div class="col-md-4 col-sm-6 col-12 kb-search-content">
          <div class="card">
            <a href="page-kb-category.html">
              <img
                src="@/assets/images/illustration/email.svg"
                class="card-img-top"
                alt="imagen-base-conocimiento"
              />
              <div class="card-body text-center">
                <h4>
                  <font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit"
                      >Registrar Departamento</font
                    ></font
                  >
                </h4>
                <p class="text-body mt-1 mb-0">
                  <font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure, fugit provident commodi consectetur tempore,
                      inventore cum, saepe rerum incidunt error delectus nulla
                      odit. Perferendis minus nostrum est ut assumenda! Nostrum?
                    </font>
                  </font>
                </p>
              </div>
            </a>
          </div>
        </div>

        <!-- api -->
        <div class="col-md-4 col-sm-6 col-12 kb-search-content">
          <div class="card">
            <a href="page-kb-category.html">
              <img
                src="@/assets/images/illustration/api.svg"
                class="card-img-top"
                alt="imagen-base-conocimiento"
              />
              <div class="card-body text-center">
                <h4>
                  <font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit"
                      >Mantener Disponibilidad</font
                    ></font
                  >
                </h4>
                <p class="text-body mt-1 mb-0">
                  <font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit"
                      >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Pariatur ipsam laudantium minus, quidem dolorem unde
                      soluta, beatae modi provident minima nobis quod voluptate
                      facere tempora incidunt exercitationem consequuntur
                      aspernatur facilis.</font
                    ></font
                  >
                </p>
              </div>
            </a>
          </div>
        </div>

        <!-- no result -->
      </div>
    </section>
  </div>
</template>


