<template lang="html">
  <div class="row">
    <p> {{ fruit }}</p>
    <button class="btn btn-primary" v-clipboard:copy="fruit">Kopier dette</button>
    <hr>
  </div>

</template>

<script>
export default {
  props: ['fruit']
}
</script>

<style lang="css">
</style>
