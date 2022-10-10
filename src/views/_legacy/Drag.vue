<template>
  <div class="simple-page">
    <Container @drop="onDrop" drag-handle-selector=".column-drag-handle">
      <Draggable v-for="item in items" :key="item.id">
        <div class="draggable-item">
          <span class="column-drag-handle" style="float: left; padding: 0 10px"
            >&#x2630;</span
          >
          {{ item.data }}
        </div>
      </Draggable>
    </Container>
  </div>
</template>

<script>
import { Container, Draggable } from 'vue-smooth-dnd'
export default {
  name: 'DragHandle',
  components: { Container, Draggable },
  data() {
    return {
      items: this.generateItems(50, (i) => ({
        id: i,
        data: '<v-card>Draggable</v-card> ' + i,
      })),
    }
  },
  methods: {
    onDrop(dropResult) {
      this.items = this.applyDrag(this.items, dropResult)
    },
    generateItems(count, creator) {
      const result = []
      for (let i = 0; i < count; i++) {
        result.push(creator(i))
      }
      return result
    },
    applyDrag(arr, dragResult) {
      const { removedIndex, addedIndex, payload } = dragResult
      if (removedIndex === null && addedIndex === null) return arr

      const result = [...arr]
      let itemToAdd = payload

      if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0]
      }

      if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd)
      }

      return result
    },
  },
}
</script>
