<template>
  <div>
    <v-sheet color="#fff" min-height="300px"></v-sheet>
    <v-row>
      <v-col cols="12" md="2"></v-col>
      <v-col cols="12" md="8">
        <vue-editor v-model="content" />
        <div></div>

        <span v-html="content"></span>
      </v-col>
      <v-col cols="12" md="2"></v-col>
    </v-row>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'

import store from '@/store'
import { mapState } from 'vuex'

export default {
  components: { VueEditor },

  data: () => ({
    value: '',
    leading: false,
    content: `
      <h1>Yay Headlines!</h1>
      <p>All these <strong>cool tags</strong> are working now.</p>
    `,
    customToolbar: [
      ['bold', 'italic', 'underline'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [],
    ],
    ...mapState(['system']),
  }),
  methods: {
    TestFunctions() {
      store.dispatch('system/testFunctions', { url: 'https://sapo.pt' })
    },
  },
}
</script>
<style >
.ql-editor {
  user-select: text;
  -ms-user-select: text;
  -moz-user-select: text;
  -webkit-user-select: text;
}
</style>