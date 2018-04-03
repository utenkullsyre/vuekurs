<template lang="html">
  <div class="col-sm-6 col-md-4 col-lg-3">
    <div class="panel panel-default">
      <div class="panel-body quote">
        <slot>

        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['quote']
}
</script>

<style lang="css" scoped>
.panel-body{
  font-family: 'Arizonia', cursive;
  font-size: 24px;
  background-color: rgb(246, 166, 86)
}

.quote {
  cursor: pointer;
  }
.quote:hover{
  background-color: rgb(221, 184, 148)
}
</style>
