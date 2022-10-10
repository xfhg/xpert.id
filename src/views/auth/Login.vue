<template>
  <div>
    <v-row no-gutters>
      <v-col
        class="flex-grow-0 flex-shrink-1"
        cols="0"
        sm="3"
        md="4"
        xl="5"
      ></v-col>
      <v-col class="flex-grow-1 flex-shrink-0" cols="12" sm="6" md="4" xl="2">
        <v-sheet
          class="d-flex mb-10"
          color="transparent"
          min-height="0px"
        ></v-sheet>

        <v-sheet class="elevation-0 mx-auto mb-10 pa-2 text-center">
          <v-icon size="64" color="#1d2226">mdi-fingerprint</v-icon>
          <!-- <Logo
            lwidth="200px"
            lheight="200px"
            lfill="#f6f9fc"
            lstroke="#f6f9fc"
          /> -->
          <p class="overline text-center">Sign in with</p>

          <v-container fluid>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-btn
                  :disabled="loading"
                  class="my-2"
                  color="#f6f9fc"
                  large
                  block
                  depressed
                  @click="loginWithGoogle"
                >
                  <v-icon dark class="mr-3" color="#dd4b39">mdi-google</v-icon>
                  GOOGLE
                </v-btn>

                <v-btn
                  :disabled="loading"
                  class="my-2"
                  color="#f6f9fc"
                  large
                  block
                  depressed
                  @click="loginWithTwitter"
                >
                  <v-icon dark class="mr-3" color="#1da1f2">mdi-twitter</v-icon>
                  TWITTER
                </v-btn>

                <!-- <v-btn
                  :disabled="loading"
                  class="my-2"
                  color="#f6f9fc"
                  large
                  block
                  depressed
                  @click="loginWithGithub"
                >
                  <v-icon class="mr-3" dark>mdi-github</v-icon> GITHUB
                </v-btn> -->
              </v-col>
            </v-row>
            <v-scroll-x-transition>
              <v-alert
                class="mt-5"
                v-if="error"
                dense
                font-weight-light
                body-2
                type="error"
                >{{ message }}</v-alert
              >
              <v-alert
                class="mt-5"
                v-if="info"
                dense
                font-weight-light
                body-2
                type="info"
                >{{ message }}</v-alert
              >
            </v-scroll-x-transition>
          </v-container>

          <p class="overline text-center mt-5">or Sign in with your email</p>
          <ValidationObserver
            ref="form"
            v-slot="{ invalid, valid, handleSubmit }"
          >
            <v-form class="mt-10" ref="form">
              <v-container fluid>
                <v-row>
                  <v-col cols="12" md="12">
                    <ValidationProvider
                      name="Login Email"
                      rules="email|required"
                      v-slot="{ errors, valid }"
                    >
                      <v-text-field
                        v-model.trim="email"
                        :error-messages="errors"
                        :valid="valid"
                        autofocus
                        label="E-mail"
                        placeholder="E-mail"
                        solo
                        prepend-inner-icon="mdi-email"
                      ></v-text-field>
                    </ValidationProvider>
                    <ValidationProvider
                      name="Login Password"
                      rules="required"
                      v-slot="{ errors, valid }"
                    >
                      <v-text-field
                        v-model="password"
                        :error-messages="errors"
                        :valid="valid"
                        label="Password"
                        placeholder="Password"
                        solo
                        prepend-inner-icon="mdi-form-textbox-password"
                        :type="passwordShow ? 'text' : 'password'"
                        @click:append="passwordShow = !passwordShow"
                      ></v-text-field>
                    </ValidationProvider>
                    <v-btn
                      :disabled="invalid || !valid"
                      x-large
                      block
                      color="#32e0c4"
                      class="my-5"
                      @click="handleSubmit(validate)"
                      elevation="5"
                      >SIGN IN</v-btn
                    >

                    <v-btn
                      small
                      depressed
                      color="#ffffff"
                      class="mb-5"
                      @click="passwordReset"
                      >Password Reset</v-btn
                    >
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </ValidationObserver>

          <v-card class="elevation-0 py-2 px-2 mt-5" color="#fff">
            <v-card-title class=""> </v-card-title>

            <v-card-text>
              <v-avatar class="ma-3" size="64" tile>
                <Logo
                  lwidth="64px"
                  lheight="64px"
                  lfill="#f6f9fc"
                  lstroke="#f6f9fc"
                ></Logo>
              </v-avatar>
              <router-link to="/register">
                <v-btn rounded large depressed class="ma-2" color="#f6f9fc"
                  >Sign Up</v-btn
                >
              </router-link>
            </v-card-text>
          </v-card>
        </v-sheet>

        <v-sheet
          class="d-flex mb-10"
          color="transparent"
          min-height="150px"
        ></v-sheet>
      </v-col>
      <v-col
        class="flex-grow-0 flex-shrink-1"
        cols="0"
        sm="3"
        md="4"
        xl="5"
      ></v-col>
    </v-row>
  </div>
</template>

<script>
  import store from '@/store'
  import { get } from 'vuex-pathify'

  import Logo from '@/components/main/Logo'

  /* eslint-disable */
  export default {
    data: () => ({
      auth: '',
      passwordShow: false,
      valid: true,
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',

        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          'E-mail must be valid',
      ],
      password: '',
      passwordRules: [(v) => !!v || 'Password is Required'],
    }),
    components: { Logo },
    computed: {
      error: get('status@error'),
      info: get('status@info'),
      message: get('status@message'),
      loading: get('status@loading'),
    },

    methods: {
      validate() {
        if (this.$refs.form.validate()) {
          this.loginWithFirebase()
        }
      },

      reset() {
        this.$refs.form.reset()
      },

      loginWithFirebase() {
        const user = {
          email: this.email,
          password: this.password,
        }
        store.dispatch('auth/signInAction', user)
      },
      loginWithGithub() {
        store.dispatch('updateGlobalStatus', { loading: true })
        store.dispatch('auth/signInActionWithGithub', null)
      },
      loginWithGoogle() {
        store.dispatch('updateGlobalStatus', { loading: true })
        store.dispatch('auth/signInActionWithGoogle', null)
      },
      loginWithTwitter() {
        store.dispatch('updateGlobalStatus', { loading: true })
        store.dispatch('auth/signInActionWithTwitter', null)
      },

      passwordReset() {
        if (this.email != '') {
          store.dispatch('auth/passwordResetAction', { email: this.email })
        } else {
          store.dispatch('triggerNotification', {
            type: 'info',
            message: 'Fill in your email before pressing the reset button.',
          })
        }
      },
    },
  }
  /* eslint-enable */
</script>
