<template>
  <div class="contact">
    <h1 class="title">Departamento Disponible</h1>
    <form action class="form" @submit.prevent="contact">
      <label class="form-label" for="#name">Nombre</label>
      <input
        v-model="name"
        class="form-input"
        type="text"
        id="name"
        required
        placeholder="Nombre"
      >
      <label class="form-label" for="#email">Email</label>
      <input
        v-model="email"
        class="form-input"
        type="email"
        id="email"
        placeholder="Email"
      >
      <input class="form-submit" type="submit" value="Buscar">
    </form>
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