<template>
    <div>
        <h1>Filters & Mixins</h1>
        <input type="text" name="" value="" v-model="filterText">
        <ul>
          <li v-for="fruit in filteredFruits">{{fruit}}</li>
        </ul>
    </div>
</template>

<script>
import { fruitMixin } from '../fruitMixin'
    export default {
      mixins: [fruitMixin],
      created() {
        console.log('Inside list created');
      }
    }
</script>

<style>

</style>
