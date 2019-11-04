<template>
    <div id="main">
        <Header title="我的喵喵"/>
        <div id="content">
          <Login/>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Login from '@/components/Login'
export default {
  components: {
    Header,
    Login
  }
}
</script>

<style lang="sass">

</style>
