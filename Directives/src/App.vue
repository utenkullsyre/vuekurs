<template>
    <div class="container">
        <div class="row">
            <!-- <app-autocomplete :items="anleggnavn"></app-autocomplete> -->
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
                <p v-highlight:background.delayed="'lightblue'" ref="testref">Color this</p>
                <p v-local-highlight:background.delayed.blink="{mainColor: 'red', secondColor: 'blue', delay: '500'}" ref="testref">Color this</p>
                <button class="btn btn-primary" type="button" name="button" @click="testTest">Test</button>
                <ul>
                  <li v-for="n in 10" ref="numbers">{{ n }}</li>
                </ul>
            </div>
        </div>
        <div class="row">
          <app-axios @axiosResponse="testAxios" :url="url" :options="options"></app-axios>
        </div>
        <div class="row anlegg-container">
          <app-anlegg v-for="(item,index) in anlegg" @click.left="tsetsf(index)" :navn="item.attributes.Anleggsnavn" :aapen="aapenAnlegg">
            <span class="header" slot="header" >{{ item.attributes.Anleggsnavn }}</span>
            <p slot="content">{{ item.attributes.TYPEANLEGG}}</p>
          </app-anlegg>
        </div>
    </div>
</template>

<script>
import AxiosTest from './components/AxiosTest.vue'
import Anlegg from './components/Anlegg.vue'
// import Autocomplete from './components/Autocomplete.vue'
import { EventBus } from './main'

    export default {
      directives: {
        'local-highlight': {
          bind(el, binding, vnode) {
            var delay = 0;
            if (binding.modifiers['delayed']) {
              delay = 3000;
            }
            if (binding.modifiers['blink']) {
              let mainColor = binding.value.mainColor;
              let secondColor = binding.value.secondColor;
              let currentColor = mainColor;
              setTimeout(() => {
                setInterval(() => {
                  currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor
                  if (binding.arg === 'background') {
                    el.style.backgroundColor = currentColor;
                  } else {
                    el.style.color = currentColor;
                  }
                },binding.value.delay);
              }, delay);
            } else {
              setTimeout(() => {
                if (binding.arg === 'background') {
                  el.style.backgroundColor = binding.value;
                } else {
                  el.style.color = binding.value;
                }
              }, delay);
            }

          }
        }
      },
      data() {
        return {
          aapenAnlegg: ['Tromsø ishall'],
          anlegg: null,
          anleggnavn: '',
          url: 'http://kart.tromso.kommune.no/arcgis/rest/services/Temadata/Friluftsliv/FeatureServer/0/query?',
          options: {
            params: {
              f: 'json',
              where: '1=1',
              outFields: '*',
              returnGeometry: false
            }
        },
        response: null
      }
    },
      methods: {
        tsetsf(index) {
          console.log(index);
          this.anlegg.splice(index,1)
        },
        testAxios(response) {
          response
          .then(response => {
            console.log(response);
            this.anlegg = response.data.features
            // const testArray = response.data.features.map(h => {return h.attributes.Anleggsnavn}).filter(h => {
            //   if(h){
            //     return h
            //   }
            // })
            // this.anleggnavn = testArray
            // this.$emit('testEmit', this.anleggnavn)
            // console.log('anleggNavn', JSON.stringify(testArray));

          })
          .catch(e => {
            console.log(e)
          })
        },
        testTest() {
          console.log(this.$refs.numbers);
        },
        testlog(testArray){
          console.log(testArray);
        }
      },
      created() {
        EventBus.$on('anleggNavn', (anlegg) => {
          this.anleggnavn = anlegg
        });
      },
      components: {
        appAxios: AxiosTest,
        appAnlegg: Anlegg
        // appAutocomplete: Autocomplete
      }
    }
</script>

<style scoped>
  .anlegg-container {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
  }

</style>
