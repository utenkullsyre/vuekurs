<template>
    <div class="container">
        <app-newquote @quoteAdded="newQuote"></app-newquote>
        <app-quotegrid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quotegrid>
        <div class="row">
          <div class="col-sm-12 text-center">
            <div class="alert alert-info">
              Info: Click on a quote to delete it
            </div>
          </div>
        </div>
    </div>
</template>

<script>
  import NewQuote from './components/NewQuote.vue'
  import QuoteGrid from './components/QuoteGrid.vue'

  export default {
      data: function () {
        return {
          maxQuotes: 10,
          quotes: [
            'Just a quote too see shiznit',
          ]
        }
      },
      components: {
        appQuotegrid: QuoteGrid,
        appNewquote: NewQuote
      },
      methods: {
        newQuote(quote) {
          this.quotes.push(quote)
        },
        deleteQuote(index) {
          this.quotes.splice(index,1);
        }
      }
  }
</script>

<style>
</style>
