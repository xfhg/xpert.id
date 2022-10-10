<template>
  <div>
    <v-sheet color="#fff" min-height="100px"></v-sheet>
    <DividerTop dcolor="eff3f5" style="margin-top: 150px"></DividerTop>
    <v-sheet color="#eff3f5" min-height="10">
      <v-row>
        <v-col cols="12" md="2"></v-col>
        <v-col cols="12" md="4">
          <v-skeleton-loader
            v-bind="attrs"
            type="card-avatar, article, actions"
          ></v-skeleton-loader>

          <v-skeleton-loader
            v-bind="attrs"
            type="date-picker"
          ></v-skeleton-loader>
        </v-col>

        <v-col cols="12" md="4">
          <v-skeleton-loader
            v-bind="attrs"
            type="article, actions"
          ></v-skeleton-loader>

          <v-skeleton-loader
            v-bind="attrs"
            type="table-heading, list-item-two-line, image, table-tfoot"
          ></v-skeleton-loader>

          <v-skeleton-loader
            v-bind="attrs"
            type="list-item-avatar, divider, list-item-three-line, card-heading, image, actions"
          ></v-skeleton-loader>

          <v-skeleton-loader
            v-bind="attrs"
            type="list-item-avatar-three-line, image, article"
          ></v-skeleton-loader>
        </v-col>
        <v-col cols="12" md="2"></v-col>
      </v-row>
    </v-sheet>
    <DividerBottom dcolor="eff3f5" style="margin-bottom: 150px"></DividerBottom>

    <v-row no-gutters>
      <v-col class cols="12" sm="0" md="2" xl="2"></v-col>
      <v-col class cols="12" sm="12" md="8" xl="8">
        <v-autocomplete
          v-model="values"
          :items="items"
          :loading="loading"
          clearable
          outlined
          hide-no-data
          label="Company"
          item-text="name"
          return-object
          :search-input.sync="search"
        >
          <template v-slot:selection="data">
            <v-chip v-bind="data.attrs" :input-value="data.selected" outlined>
              <v-avatar left>
                <v-img :src="data.item.logo"></v-img>
              </v-avatar>
              {{ data.item.name }}
            </v-chip>
          </template>
          <template v-slot:item="data">
            <template v-if="typeof data.item !== 'object'">
              <v-list-item-content v-text="data.item"></v-list-item-content>
            </template>
            <template v-else>
              <v-list-item-avatar>
                <img :src="data.item.logo" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="data.item.name"></v-list-item-title>
                <v-list-item-subtitle
                  v-html="data.item.domain"
                ></v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </template>
        </v-autocomplete>
      </v-col>
      <v-col class cols="12" sm="0" md="2" xl="2"></v-col>
    </v-row>

    <v-row no-gutters>
      <v-col class cols="12" sm="0" md="2" xl="2"></v-col>
      <v-col class cols="12" sm="12" md="8" xl="8"> {{ values }}</v-col>
      <v-col class cols="12" sm="0" md="2" xl="2"></v-col>
    </v-row>
    <v-sheet color="#fff" min-height="200px"></v-sheet>
    <v-divider></v-divider>
    <v-sheet color="#fff" min-height="200px"></v-sheet>
    <v-row no-gutters>
      <v-col class cols="12" sm="0" md="2" xl="2"></v-col>
      <v-col class cols="12" sm="12" md="8" xl="8"> </v-col>
      <v-col class cols="12" sm="0" md="2" xl="2"></v-col>
    </v-row>
    <v-sheet color="#fff" min-height="200px"></v-sheet>
  </div>
</template>
<script>
import DividerTop from '@/components/divider/DividerTop'
import DividerBottom from '@/components/divider/DividerBottom'
import _ from 'lodash'

export default {
  data: () => ({
    attrs: {
      class: 'mb-6',
      boilerplate: true,
      elevation: 2,
    },
    search: null,
    values: [],
    loading: false,
    items: [],
    query: null,
  }),
  components: {
    DividerTop,
    DividerBottom,
  },

  computed: {},
  methods: {
    fetchCompanies: _.debounce(function (val) {
      this.loading = true
      fetch(
        'https://autocomplete.clearbit.com/v1/companies/suggest?query=' + val
      )
        .then((res) => res.clone().json())
        .then((res) => {
          this.items = res
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => (this.loading = false))
    }, 1000),
  },
  watch: {
    search(val) {
      this.query = val
      if (!val) {
        return false
      } else if (val.length > 1) {
        this.fetchCompanies(encodeURI(this.query))
      }
    },
  },
}
</script>


<style>
/* transform: skew(0deg,4deg); */
</style>