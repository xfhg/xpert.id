<template>
  <div :key="$route.params.id">
    <!-- <v-navigation-drawer
      v-if="auth.authenticated"
      v-model="drawer"
      color="#f6f9fc"
      app
      bottom
      right
      clipped
      class="baseline-nav-drawer"
      disable-resize-watcher
      style="z-index: 60"
    >
      <v-list>
        <v-subheader
          v-if="user.data.onboarded"
          class="mt-0 grey--text text--darken-1"
          >{{ user.data.username }}</v-subheader
        >

        <router-link class v-if="auth.authenticated" to="/dashboard">
          <v-list-item link>
            <v-list-item-action>
              <chevron-up-left-icon stroke-width="1"></chevron-up-left-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link class v-if="auth.authenticated" to="/x">
          <v-list-item link>
            <v-list-item-action>
              <chevron-up-left-icon stroke-width="1"></chevron-up-left-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link class v-if="auth.authenticated" to="/profile">
          <v-list-item link>
            <v-list-item-action>
              <chevron-up-left-icon stroke-width="1"></chevron-up-left-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Edit Profile</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
      <v-subheader class="mt-4 grey--text text--darken-1">xTALENT</v-subheader>
      <v-list dense>
        <v-list-item class="mt-4" link>
          <v-list-item-action>
            <chevron-up-left-icon stroke-width="1"></chevron-up-left-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1"
            >Received</v-list-item-title
          >
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <chevron-up-left-icon stroke-width="1"></chevron-up-left-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1"
            >Location</v-list-item-title
          >
        </v-list-item>
      </v-list>

      <v-subheader class="mt-4 grey--text text--darken-1">xACADEMY</v-subheader>
      <v-list dense>
        <v-list-item class="mt-4" link>
          <v-list-item-action>
            <chevron-up-left-icon stroke-width="1"></chevron-up-left-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1"
            >Dashboard</v-list-item-title
          >
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <chevron-up-left-icon stroke-width="1"></chevron-up-left-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1"
            >Location</v-list-item-title
          >
        </v-list-item>
      </v-list>

      <v-subheader class="mt-4 grey--text text--darken-1">xNOMAD</v-subheader>
      <v-list dense>
        <v-list-item class="mt-4" link>
          <v-list-item-action>
            <chevron-up-left-icon stroke-width="1"></chevron-up-left-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1"
            >Dashboard</v-list-item-title
          >
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <chevron-up-left-icon stroke-width="1"></chevron-up-left-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1"
            >Location</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->

    <!-- /////////////////////////////////////////////////////////////////////////////////////////// -->

    <v-app-bar
      app
      clipped-right
      color="transparent"
      elevate-on-scroll
      class="coodrop"
      style="backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px)"
    >
      <v-row no-gutters style="flex-wrap: nowrap">
        <v-col class="" cols="0" sm="0" md="1" xl="2"></v-col>
        <v-col
          style="max-width: 100%"
          class=""
          cols="12"
          sm="12"
          md="10"
          xl="8"
        >
          <v-toolbar
            flat
            class="ma-0 px-0"
            color="transparent"
            sm="12"
            style="z-index: 62"
          >
            <router-link :to="{ name: 'Home' }">
              <v-toolbar-title>
                <!-- <span class="overline text-left">xpert </span> -->
                <!-- <v-icon>mdi-fingerprint</v-icon> -->

                <!-- <Logo
                  lwidth="24px"
                  lheight="24px"
                  lfill="#52616b"
                  lstroke="#f6f9fc"
                /> -->
                <!-- <span class="overline text-left">
                  id
                  <span class="mx-1">· · ·</span>
                </span> -->

                <v-btn class="" text color="#52616b">
                  <Logo
                    lwidth="25px"
                    lheight="25px"
                    lfill="#52616b"
                    lstroke="#52616b"
                  />
                  <!-- <span class="mx-2">··</span>ID -->
                </v-btn>
              </v-toolbar-title>
            </router-link>

            <!-- <v-progress-linear
              v-if="loading && !loadingBlock"
              rounded
              indeterminate
              color="#32e0c4"
              style="width: 55px"
            ></v-progress-linear> -->
            <!-- <v-autocomplete
              :items="commands"
              class="hidden-xs-only mt-5 mx-10"
              v-if="auth.authenticated && user.data.onboarded"
              dense
              rounded
              color="#22292d"
              no-data-text="XPERT Command Prompt"
              clearable
              item-text="name"
              ref="prompt"
              append-icon=""
              :search-input.sync="cmdInput"
              @change="cmdInput = ''"
            >
              <template v-slot:item="{ item }">
                <v-list-item dense @click="sendMeTo(item.url)"
                  ><prompt-icon size="24px"></prompt-icon
                  >{{ item.name }}</v-list-item
                >
              </template>
            </v-autocomplete> -->

            <!-- <v-spacer v-if="!auth.authenticated"></v-spacer>
            <v-spacer
              v-if="auth.authenticated && !user.data.onboarded"
            ></v-spacer>

            {{ auth.authenticated }} - {{ user.data.onboarded }} -->
            <v-spacer></v-spacer>

            <!-- <router-link class="ml-2" v-if="!auth.authenticated" to="/explore">
              <v-btn small depressed class="ma-2" color="#ffffff">{{ $t('explore') }}</v-btn>
            </router-link>-->

            <!-- <router-link
              class="hidden-xs-only ml-2"
              v-if="!auth.authenticated"
              to="/trial"
            >
              <v-btn
                dark
                text
                small
                class="hidden-xs-only mr-10"
                color="#52616b"
                >Request an invite</v-btn
              >
            </router-link> -->

            <!-- <router-link
              class="ml-2"
              v-if="
                !auth.authenticated &&
                this.$router.currentRoute.name != 'Login' &&
                this.$router.currentRoute.name != 'Register'
              "
              to="/login"
            >
              <v-btn outlined small class="" color="#52616b">{{
                $t('signIn')
              }}</v-btn>
            </router-link>

            <v-btn
              :disabled="loading"
              class="mx-2"
              color="#52616b"
              outlined
              small
              v-if="
                !auth.authenticated &&
                this.$router.currentRoute.name != 'Login' &&
                this.$router.currentRoute.name != 'Register'
              "
              @click="loginWithGoogle"
            >
              <v-icon dark small class="mr-3" color="#52616b"
                >mdi-google</v-icon
              >
              Login
            </v-btn> -->

            <!-- <router-link class="ml-2 hidden-xs-only" v-if="auth.authenticated" to="/logout">
              <v-btn small depressed class="ma-2" color="white">{{ $t('logout') }}</v-btn>
            </router-link>-->

            <router-link
              class="ml-2"
              v-if="auth.authenticated && user.data.onboarded"
              to="/create"
            >
              <v-btn class="mr-1" color="#39444b" text v-if="auth.authenticated"
                ><v-icon>mdi-plus-thick</v-icon></v-btn
              >
            </router-link>
            <router-link
              class="ml-2"
              v-if="auth.authenticated && user.data.onboarded"
              to="/brain"
            >
              <v-btn
                class="mr-1"
                color="#39444b"
                text
                v-if="auth.authenticated"
              >
                <v-icon>mdi-hexagon-multiple</v-icon></v-btn
              >
            </router-link>
            <router-link
              class="ml-2"
              v-if="auth.authenticated && user.data.onboarded"
              to="/brainstorm"
            >
              <v-btn
                class="mr-1"
                color="#39444b"
                text
                v-if="auth.authenticated"
              >
                <v-icon>mdi-protocol</v-icon></v-btn
              >
            </router-link>
            <router-link
              class="ml-2 hidden-xs-only"
              v-if="auth.authenticated && user.data.onboarded"
              to="/start"
            >
              <v-btn
                class="hidden-xs-only mr-1"
                color="#39444b"
                text
                v-if="auth.authenticated"
              >
                <v-icon>mdi-flash</v-icon></v-btn
              >
            </router-link>
            <router-link
              class="ml-2 hidden-xs-only"
              v-if="auth.authenticated && user.data.onboarded"
              to="/logout"
            >
              <v-btn
                class="hidden-xs-only mr-1"
                color="#39444b"
                text
                v-if="auth.authenticated"
              >
                <v-icon>mdi-logout-variant</v-icon></v-btn
              >
            </router-link>

            <!-- <router-link
              v-if="auth.authenticated && user.data.onboarded"
              class="ml-5"
              to="/dashboard"
            >
            </router-link> -->

            <router-link
              v-if="auth.authenticated && !user.data.onboarded"
              class="ml-5"
              to="/onboarding"
            >
              <v-avatar class size="25">
                <v-img
                  v-if="user.data.avatar"
                  :src="user.data.avatar"
                  style="border-radius: 50%"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="#32e0c4"
                        :width="1"
                        size="25"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
                <v-img v-else>
                  <v-icon>mdi-fingerprint</v-icon>
                </v-img>
              </v-avatar>
            </router-link>

            <!-- <router-link
              class="hidden-xs-only"
              v-if="auth.authenticated && user.data.onboarded"
              to="/profile"
            >
              <v-btn
                class="hidden-xs-only mr-5"
                depressed
                color="#fdfdfd"
                v-if="auth.authenticated && user.data.username"
              >
                <v-avatar class="mr-5" size="25" color="white">
                  <v-img>
                    <v-icon>mdi-fingerprint</v-icon>
                  </v-img>
                </v-avatar>

                {{ user.data.username.slice(0, 12) }}
              </v-btn>
            </router-link> -->

            <router-link
              class=""
              v-if="auth.authenticated && user.data.onboarded"
              to="/dashboard"
            >
              <v-btn
                class=""
                color="#52616b"
                text
                v-if="auth.authenticated && user.data.username"
              >
                <!-- <Logo
                  lwidth="24px"
                  lheight="24px"
                  lfill="#52616b"
                  lstroke="#f6f9fc"
                /> -->
                <v-avatar size="25">
                  <v-img
                    v-if="user.data.avatar"
                    :src="user.data.avatar"
                    style="border-radius: 50%"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="#32e0c4"
                          :width="1"
                          size="25"
                        ></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                  <v-img v-else>
                    <v-icon color="#32e0c4">mdi-fingerprint</v-icon>
                  </v-img>
                </v-avatar>
              </v-btn>
            </router-link>

            <!-- <v-menu
              v-if="auth.authenticated && user.data.onboarded"
              eager
              bottom
              left
              :offset-y="true"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="ml-1" text v-bind="attrs" v-on="on">
                  <v-icon>mdi-menu</v-icon>
                </v-btn>
              </template>

              <v-list dense shaped>
                <v-list-item link to="/profile">
                  <v-list-item-icon>
                    <v-icon class="px-0">mdi-triangle-outline</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>IDENTITY</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item link to="/academy">
                  <v-list-item-icon>
                    <v-icon>mdi-rhombus-outline</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>ACADEMY </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item link to="/talent">
                  <v-list-item-icon>
                    <v-icon>mdi-pentagon-outline</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>TALENT</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item link to="/bit/sandbox">
                  <v-list-item-icon>
                    <v-icon>mdi-hexagon-outline</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>XPERT BITS</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-menu> -->

            <!-- <v-btn
              class="ml-5"
              v-if="auth.authenticated && user.data.onboarded"
              icon
              @click.stop="drawer = !drawer"
            >
              <v-icon v-if="!drawer">mdi-menu</v-icon>
              <v-icon v-if="drawer">mdi-menu-open</v-icon>
            </v-btn> -->
          </v-toolbar>
        </v-col>
        <v-col class="" cols="0" sm="0" md="1" xl="2"></v-col>
      </v-row>
    </v-app-bar>
  </div>
</template>

<script>
  import store from '@/store'
  import { get } from 'vuex-pathify'
  import { mapState } from 'vuex'
  import Logo from '@/components/main/Logo'
  import router from '@/router/index'

  export default {
    data: () => ({
      cmdInput: '',
      drawer: false,
      commands: [
        {
          id: 1,
          name: 'Edit Profile',
          url: '/profile',
        },
        {
          id: 3,
          name: 'Start',
          url: '/start',
        },
        {
          id: 3,
          name: 'Join Talent Hub',
          url: '/join/talent',
        },
        {
          id: 3,
          name: 'Join Academy',
          url: '/join/academy',
        },
        {
          id: 2,
          name: 'Dashboard',
          url: '/dashboard',
        },
        {
          id: 3,
          name: 'Lab Bits',
          url: '/lab/bit/sandbox',
        },
        {
          id: 3,
          name: 'Logout',
          url: '/logout',
        },
      ],
    }),

    computed: {
      loading: get('status@loading'),
      loadingBlock: get('status@loadingBlock'),
      ...mapState(['auth', 'user', 'xpert']),
    },
    mounted() {
      // document.onkeydown = (e) => {
      //   e = e || window.event
      //   if (e.key === '/') {
      //     e.preventDefault()
      //     this.$refs.prompt.focus()
      //   }
      // }
    },

    components: { Logo },
    methods: {
      sendMeTo(url) {
        if (url === this.$route.path) {
          return
        } else {
          this.$refs.prompt.reset()
          router.push(url)
        }
      },
      signOut() {
        store.dispatch('auth/signOutAction', null)
      },
      loginWithGoogle() {
        store.dispatch('updateGlobalStatus', { loading: true })
        store.dispatch('auth/signInActionWithGoogle', null)
      },
    },
  }
</script>

<style>
  a {
    color: #0e0e0e !important;
  }
  .v-navigation-drawer__border {
    width: 0px !important;
  }
  .baseline-nav-drawer {
    border-top: 1px solid #eee !important;
    box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 4px -1px,
      rgba(0, 0, 0, 0.14) 2px 4px 5px 0px, rgba(0, 0, 0, 0.12) 2px 1px 10px 0px;
  }
</style>
