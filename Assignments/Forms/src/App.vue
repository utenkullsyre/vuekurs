<template>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h3>Innmeldingsskjema</h3>
        </div>
      </div>
        <form v-if="!isSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <form id="skjema">
                      <app-fullname v-model="userData.fullname"></app-fullname>

                      <div class="form-group">
                          <label for="email">E-mail</label>
                          <!-- Bruka en manuell v-model metode for å vis kossn v-model egentlig funka -->
                          <input
                                  type="text"
                                  id="email"
                                  class="form-control"
                                  v-model="userData.email"
                                  >
                      </div>

                      <div class="form-group">
                          <label for="password">Password</label>
                          <!-- Bruka en manuell v-model metode for å vis kossn v-model egentlig funka -->
                          <input
                                  type="text"
                                  id="password"
                                  class="form-control"
                                  v-model="userData.password"
                                  >
                      </div>

                      <div class="row">
                          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                              <h4>Store data?</h4>
                              <label for="yes">
                                  <input
                                          type="radio"
                                          id="yes"
                                          value="true"
                                          v-model="storeData"> Yes
                              </label>
                              <label for="female">
                                  <input
                                          type="radio"
                                          id="female"
                                          value="false"
                                          v-model="storeData"> No
                              </label>
                          </div>
                      </div>
                      <div class="row">
                        <button class="btn btn-primary" type="button" name="button" @click.prevent="submitted">Submit</button>
                      </div>
                    </form>
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ userData.fullname }}</p>
                        <p>Mail: {{ userData.email }}</p>
                        <p>Password: {{ userData.password }}</p>
                        <p>Store in Database?: {{ storeData }}</p>
                    </div>
                </div>
                <button class="btn btn-primary" type="button" name="button" @click="resetForm">Send inn nytt skkjema</button>
            </div>
        </div>
    </div>
</template>

<script>
import FullName from './components/FullName.vue'
    export default {
      data() {
        return {
          userData: {
            firstname: '',
            lastname: '',
            fullname: 'Tor Børset',
            email: '',
            password: ''
          },
          storeData: false,
          isSubmitted: false
        }
      },
      methods:{
        submitted() {
          this.isSubmitted = true
        },
        resetForm() {
          this.isSubmitted = false
          this.userData.firstname = ''
          this.userData.lastnamename = ''
          this.userData.email = ''
          this.userData.password = ''
        }
      },
      components: {
        appFullname: FullName
      }
    }
</script>

<style>
</style>
