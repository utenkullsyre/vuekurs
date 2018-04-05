<template>
    <div class="container">
        <div class="row">
            <app-autocomplete :items="[ 'Apple', 'Banana', 'Orange', 'Mango', 'Pear', 'Peach', 'Grape', 'Tangerine', 'Pineapple']"></app-autocomplete>
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Built-in Directives</h1>
                <p v-text="'Some text'"></p>
                <p v-html="'<b>Strong text</b>'"></p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <p v-highlight:background="'lightblue'" ref="testref">Color this</p>
                <button class="btn btn-primary" type="button" name="button" @click="testTest">Test</button>
                <ul>
                  <li v-for="n in 10" ref="numbers">{{ n }}</li>
                </ul>
            </div>
        </div>
        <div class="row">
          <app-axios :anleggnavn="anleggnavn"></app-axios>
          <p>{{ anleggnavn }}</p>
        </div>
    </div>
</template>

<script>
import AxiosTest from './components/AxiosTest.vue'
import Autocomplete from './components/Autocomplete.vue'

    export default {
      data() {
        return {
          anleggnavn: ['Test']
        }
      },
      methods: {
        testTest() {
          console.log(this.$refs.numbers);
        },
        testlog(testArray){
          console.log(testArray);
        }
      },
      components: {
        appAxios: AxiosTest,
        appAutocomplete: Autocomplete
      }
    }
</script>

<style>

</style>
