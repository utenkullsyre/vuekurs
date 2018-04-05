<template lang="html">
  <div class="boks" @mouseover="isOpen = !isOpen">
      <slot  name="header"  ></slot>
      <slot class="content" name="content" v-if="isOpen"></slot>
  </div>

</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    testFunc() {
      alert('Klikk')
    }
  }
}
</script>

<style lang="css" scoped>
.boks {
  height: 50px;
  flex: 1 1 auto;
  background-color: #abe8d0;
  font-family: sans-serif, monospace;
  margin: 5px
}

.header {
  height: 30px;
  font-size: 1.2em;
  font-weight: bold;
  cursor: pointer;
}
.content {
  font-size: 1em;
  font-style: italic;
}
</style>
