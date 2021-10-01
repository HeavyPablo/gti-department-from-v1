

<template>
 <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
  <div class="contact">
    <h1 class="title">Departamento Disponible</h1>
    <form action class="form">
      <input
        v-model="name"
        class="form-input"
        type="text"
        id="name"
        required
        placeholder="Nombre"
      >
      <input class="form-submit" type="submit" value="Buscar">
    </form>
  </div>

<div class="container" style="margin-top: 59px;">
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre Departamento</th>
        <th scope="col">Direccion</th>
        <th scope="col">Estado</th>
        <th scope="col">Detalle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>Disponible</td>
         <td data-v-2cc91267="" class="action-cell">
        <button data-v-66587b73="" data-v-2cc91267="" class="btn btn-outline-success">
        <i data-v-66587b73="" class="fa fa-eye"></i></button>
        </td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>No Disponible</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>Disponible</td>
      </tr>

      <tr>
        <th scope="row">4</th>
        <td>Larry</td>
        <td>the Bird</td>
      
      </tr>
    </tbody>




      
  </table>

  
</div>
 

</template>





<script>
  export default {
    data() {
      return {
      
      };
    },
    created() {},
    methods: {},
  };
</script>