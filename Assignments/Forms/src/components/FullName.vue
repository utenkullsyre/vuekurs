<template lang="html">
  <div class="row">
    <div class="form-group">
        <label for="name">Name</label>
        <!-- Bruka en manuell v-model metode for å vis kossn v-model egentlig funka -->
        <input
                type="text"
                placeholder="Firstname"
                class="form-control"
                :value="firstName"
                @input="nameChanged(true, $event)">
        <input
                type="text"
                placeholder="Lastname"
                class="form-control"
                :value="lastName"
                @input="nameChanged(false, $event)"
                >
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      firstname: '',
      lastname: ''
    }
  },
  computed: {
    firstName() {
      return this.value.split(" ")[0];
    },
    lastName() {
      return this.value.split(" ")[1];
    }
  },
  methods: {
    nameChanged(isFirst, event) {
      let name = '';
      if (isFirst) {
        name = event.target.value + ' ' + this.lastName;
      } else {
        name = this.firstName + ' ' + event.target.value ;
      }
      this.value = name;
      this.$emit('input', this.value);
    }
  },
  props: ['value']
}
</script>

<style lang="css" scoped>
</style>
