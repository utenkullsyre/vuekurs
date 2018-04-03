<template lang="html">
  <div class="row">
    <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
      <form class="" action="index.html" method="post">
        <label>Quote</label>
        <textarea class="form-control" name="name" rows="3" cols="80" v-model="quote"></textarea>
      </form>
    </div>
    <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
      <button class="btn btn-primary" type="button" name="button" @click.prevent="addQuote">Add quote</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      quote: ''
    };
  },
  methods: {
    addQuote () {
      this.$emit('quoteAdded', this.quote);
      this.quote = ''
    }
  }
}
</script>

<style lang="css">
</style>
