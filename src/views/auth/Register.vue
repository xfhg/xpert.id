<template>
  <div>
    <v-row no-gutters>
      <v-col class="" cols="0" sm="3" md="4" xl="5"></v-col>
      <v-col class="" cols="12" sm="6" md="4" xl="2">
        <v-sheet
          class="d-flex mb-10"
          color="transparent"
          min-height="0px"
        ></v-sheet>

        <v-card
          class="elevation-0 mx-auto mb-10 pa-2 text-center"
          color="#ffffff"
        >
          <v-icon size="64" color="#1d2226">mdi-fingerprint</v-icon>
          <!-- <Logo
            lwidth="200px"
            lheight="200px"
            lfill="#f6f9fc"
            lstroke="#f6f9fc"
          /> -->
          <p class="overline text-center">Quick Sign up with</p>

          <v-container fluid>
            <v-row justify="center">
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
              <v-alert v-if="error" class="mt-5" dense type="error">
                {{ message }}
              </v-alert>
            </v-scroll-x-transition>
          </v-container>

          <p class="overline text-center mt-5">
            or create an account with your email
          </p>
          <ValidationObserver
            ref="form"
            v-slot="{ invalid, valid, handleSubmit }"
          >
            <v-form class="mt-10" ref="form">
              <v-container fluid>
                <v-row>
                  <v-col cols="12" md="12">
                    <ValidationProvider
                      name="SignUp Name"
                      rules="alpha_num_spaces|required"
                      v-slot="{ errors, valid }"
                    >
                      <v-text-field
                        class="mb-2"
                        v-model="displayName"
                        autofocus
                        :error-messages="errors"
                        :valid="valid"
                        label="Name"
                        placeholder="Name"
                        solo
                        prepend-inner-icon="mdi-fingerprint"
                      ></v-text-field>
                    </ValidationProvider>
                    <ValidationProvider
                      name="SignUp Email"
                      rules="email|required"
                      v-slot="{ errors, valid }"
                    >
                      <v-text-field
                        class="mb-2"
                        v-model.trim="email"
                        :error-messages="errors"
                        :valid="valid"
                        label="E-mail"
                        placeholder="E-mail"
                        solo
                        prepend-inner-icon="mdi-email"
                      ></v-text-field>
                    </ValidationProvider>
                    <ValidationProvider
                      name="SignUp Password"
                      rules="required"
                      v-slot="{ errors, valid }"
                    >
                      <v-text-field
                        class="mb-2"
                        v-model.trim="password"
                        :rules="passwordRules"
                        label="Password"
                        placeholder="Password"
                        solo
                        :error-messages="errors"
                        :valid="valid"
                        :type="passwordShow ? 'text' : 'password'"
                        @click:append="passwordShow = !passwordShow"
                        prepend-inner-icon="mdi-form-textbox-password"
                        hint="Passwords must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character."
                      ></v-text-field>
                    </ValidationProvider>
                    <ValidationProvider
                      name="SignUp Password"
                      rules="required"
                      v-slot="{ valid }"
                    >
                      <v-text-field
                        class="mb-5"
                        v-model.trim="confirmPassword"
                        label="Confirm Password"
                        placeholder="Confirm Password"
                        :rules="passwordRules"
                        solo
                        :valid="valid"
                        :error-messages="passwordMatchError()"
                        prepend-inner-icon="mdi-form-textbox-password"
                        :type="confirmPasswordShow ? 'text' : 'password'"
                        @click:append="
                          confirmPasswordShow = !confirmPasswordShow
                        "
                      ></v-text-field>
                    </ValidationProvider>

                    <v-btn
                      :disabled="invalid || !valid"
                      :loading="loading"
                      class="mb-15 mt-5"
                      block
                      elevation="5"
                      x-large
                      color="#32e0c4"
                      @click="handleSubmit(validate)"
                      >Create Account</v-btn
                    >
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </ValidationObserver>

          <v-divider></v-divider>
          <p class="overline text-center mt-3">
            If you already have an account
          </p>

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
              <router-link to="/login">
                <v-btn rounded large depressed class="ma-2" color="#f6f9fc"
                  >Sign In</v-btn
                >
              </router-link>
            </v-card-text>
          </v-card>
        </v-card>

        <v-sheet
          class="d-flex mb-10"
          color="transparent"
          min-height="150px"
        ></v-sheet>
      </v-col>
      <v-col class="" cols="0" sm="3" md="3" xl="4"></v-col>
    </v-row>
  </div>
</template>

<script>
  import store from '@/store'
  import { get } from 'vuex-pathify'

  import Logo from '@/components/main/Logo'

  export default {
    data: () => ({
      passwordShow: false,
      confirmPasswordShow: false,
      valid: true,
      email: '',
      displayName: '',
      password: '',
      confirmPassword: '',
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) => (v && v.length >= 8) || 'Password must have 8+ characters',
        (v) => /(?=.*[A-Z])/.test(v) || 'Must have one uppercase character',
        (v) => /(?=.*\d)/.test(v) || 'Must have one number',
        (v) => /([!@$-%])/.test(v) || 'Must have one special character [!@#$%]',
      ],
    }),
    components: { Logo },
    computed: {
      error: get('status@error'),
      message: get('status@message'),
      loading: get('status@loading'),
    },

    methods: {
      validate() {
        if (this.$refs.form.validate()) {
          this.registerWithFirebase()
        }
      },
      passwordMatchError() {
        return this.password === this.confirmPassword
          ? ''
          : 'Passwords must match'
      },
      reset() {
        this.$refs.form.reset()
      },

      registerWithFirebase() {
        const user = {
          email: this.email,
          password: this.password,
          displayName: this.displayName,
        }
        store.dispatch('updateGlobalStatus', { loading: true })
        store.dispatch('auth/signUpAction', user)
      },
      loginWithGithub() {
        store.dispatch('updateGlobalStatus', { loading: true })
        store.dispatch('auth/signInActionWithGithub', null)
      },
      loginWithTwitter() {
        store.dispatch('updateGlobalStatus', { loading: true })
        store.dispatch('auth/signInActionWithTwitter', null)
      },
      loginWithGoogle() {
        store.dispatch('updateGlobalStatus', { loading: true })
        store.dispatch('auth/signInActionWithGoogle', null)
      },
    },
  }
</script>

<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
