<template>
  <div class="LocaleChanger">
    <v-menu transition="slide-y-transition" bottom>
      <template v-slot:activator="{ on }">
        <div v-on="on" class="current">
          <v-btn text v-on="on">
            <img
              :src="require(`@/assets/flags/${langs[userLocale]}.png`)"
              :alt="langs[userLocale]"
            />
          </v-btn>
        </div>
      </template>
      <v-list class="LocaleChangerMenu">
        <v-list-item
          v-for="(lang, i) in langs"
          :key="i"
          @click="changeLang(lang, i)"
        >
          <v-list-item-content>
            <img :src="require(`@/assets/flags/${langs[i]}.png`)" :alt="lang" />
            <span>{{ lang }}</span>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { languages } from '@/lang'
import store from '@/store'

export default {
  name: 'LocaleChanger',
  data() {
    return {
      langs: languages,
      current: languages.findIndex((e) => e == store.get('nonuser@locale')),
    }
  },
  computed: {
    userLocale: () => {
      return languages.findIndex((e) => e == store.get('nonuser@locale'))
    },
  },
  methods: {
    changeLang(lang, i) {
      this.$i18n.locale = lang
      this.$vuetify.lang.current = lang
      this.current = i
      this.$store.dispatch('user/setUserLocaleAction', { locale: lang })
    },
  },

  mounted() {
    this.$i18n.locale = store.get('nonuser@locale')
    this.$vuetify.lang.current = store.get('nonuser@locale')
  },
  created() {
    //this.current = this.langs.findIndex(e => e == this.$i18n.locale)
    // console.log(store.get('auth/user@locale'))
    this.current = this.langs.findIndex((e) => e == store.get('nonuser@locale'))
    if (this.current == -1) this.current = 0
  },
}
</script>

<style lang="scss">
.LocaleChanger {
  .current {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  img {
    height: 35px;
  }
}
.LocaleChangerMenu .v-list-item__content {
  justify-content: space-between;
  padding: 6px 0;
  text-transform: uppercase;
  font-size: 10px;
  color: #888888;
  & > * {
    line-height: initial;
    flex: initial;
  }
  span {
    margin-left: 10px;
  }
}
</style>