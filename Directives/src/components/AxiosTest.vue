<template>
  <div class="boks">
    <!-- <ul ref="parent">
      <li v-for="(item,index) in anlegg" @click="fjern(index)">
        <h3>Navn: {{item.attributes.Anleggsnavn}}</h3>
        <p>Type: {{item.attributes.TYPEANLEGG}}</p>
      </li>
    </ul> -->
    <div class="items" v-for="(item,index) in anlegg" @click="fjern(index)">
      <h3>Navn: {{item.attributes.Anleggsnavn}}</h3>
      <p>Type: {{item.attributes.TYPEANLEGG}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  data() {
    return {
      anlegg: [],
      testArray: []
    }
  },
  props: ['anleggnavn'],
  methods: {
    fjern(index) {
      // this.$refs.parent.removeChild(event.target)
      this.anlegg.splice(index,1)

    }
  },
  // Fetches posts when the component is created.
  created() {
    const options = {
      params: {
        f: 'json',
        where: '1=1',
        outFields: '*',
        returnGeometry: false

      }
    }
    axios.get(`http://kart.tromso.kommune.no/arcgis/rest/services/Temadata/Friluftsliv/FeatureServer/0/query?`, options)
    .then(response => {
      // JSON responses are automatically parsed.
      // console.log(response.data);
      this.anlegg = response.data.features
      const testArray = response.data.features.map(h => {return h.attributes.Anleggsnavn})
      this.anleggnavn = testArray
      this.$emit('testEmit', this.anleggnavn)

    })
    .catch(e => {
      console.log(e)
    })

    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
  }
}
</script>

body {
  user-select: none;
}

<style scoped>
  .grusbane{
    background-color: rgb(146, 177, 148)
  }
  .boks {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
  }
  .items {
    flex: 1 1 auto;
    background-color: rgb(255, 175, 124);
    padding: 10px;
    margin: 2px;
    transition: all 0.3s
  }

  .items:hover{
    background-color:rgb(226, 226, 226);
  }

  h3 {
    color: rgb(126, 126, 126)
  }



</style>
