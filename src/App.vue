<template>
  <div>
    <h1>Hello {{world}}</h1>
    <button @click="clickMe">Click</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      world: 'Daisy'
    }
  },
  methods: {
    clickMe(){
      debugger;
      this.world = 'Buffy';
    }
  }
}
</script>