<template>
  <div>
    <div class="vertical-layout vertical-menu-modern navbar-floating footer-static" :class="isLogin ? 'blank-page' : ''">
      
        <Header></Header>

        <Nav v-if="!isLogin"></Nav>

        <div class="app-content content ">
          <router-view/>
        </div>

        <div v-if="!isLogin" class="sidenav-overlay"></div>
        <div v-if="!isLogin" class="drag-target"></div>

        <footer v-if="!isLogin" class="footer footer-static footer-light">
            <p class="clearfix mb-0"><span class="float-md-start d-block d-md-inline-block mt-25"> &copy; <a class="ms-25" href="https://1.envato.market/pixinvent_portfolio" target="_blank"></a><span class="d-none d-sm-inline-block"></span></span><span class="float-md-end d-none d-md-block">© 2021 - Turismo Real<i data-feather="heart"></i></span></p>
        </footer>
        <button class="btn btn-primary btn-icon scroll-top" type="button"><vue-feather type="arrow-up"></vue-feather></button>
    </div>
    
  </div>
</template>

<script>
import Nav from '@/components/VerticalNavegation.vue'
import Header from '@/components/HeaderNavegation.vue'


export default {
  name: 'Home',

  components: { Nav, Header },

  data() {
    return {

    }
  },

  computed: {
    isLogin: function() {
      return this.$route.name === 'Login' ? true : false
    }
  },

  created() {

  },

  methods: {

  }
}
</script>
