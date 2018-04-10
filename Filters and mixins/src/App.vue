<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- <p>{{ text | toUppercase | to-lowercase}}</p>
                <hr> -->
                <input type="text" name="" value="" v-model="filterText">
                <ul>
                  <li v-for="fruit in filteredFruits">{{fruit}}</li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <app-fruit v-for="fruit in fruits" :fruit="fruit"></app-fruit>
            </div>
        </div>
    </div>
</template>

<script>
    import Fruit from './components/Fruit.vue'
    export default {
      data() {
        return {
          text: 'Hello there!',
          fruits: ['Mango', 'Banana', 'Apple', 'Melon'],
          filterText: ''
        }
      },
      filters: {
        toUppercase(value) {
          return value.toUpperCase();
        }
      },
      computed: {
        filteredFruits() {
          return this.fruits.filter((element) => {
            return element.match(this.filterText);
          })
        }
      },
      components: {
        appFruit: Fruit
      }
    }
</script>

<style>

</style>
