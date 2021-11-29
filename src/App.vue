<template>
  <div id="app">
    <Starts
      :startQuantity="5"
      :num="0"
      :size="14"
      @getStartNum="getStartNum"
    />
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    getStartNum(val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss">

</style>
