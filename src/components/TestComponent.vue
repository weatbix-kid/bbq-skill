<template>
  <div class="grid max-w-[1056px] m-auto grid-cols-stc grid-rows-str">
    <GridCell :cell="cell" v-for="(cell, index) in cells" :key="index" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import type { Cell } from '../types'
import { Attribute } from '../enums'
import { getCellPos } from '../utils/gridFunctions'

import GridCell  from '../components/GridCell.vue'

const cell : Ref<Cell> = ref({
  x: 1,
  y: 1,
  pos: 1,
  node: {
    type: {
      cost: 1,
      value: 1,
      type: Attribute.Generic,
    },
    selected: false,
  },
})

const cells = computed(() => {
  let cells = []
  const rows : number = 20
  const columns : number = 22
  for (let rowIndex = 1; rowIndex <= rows; rowIndex++) {           // rows
    for (let colIndex = 1; colIndex <= columns; colIndex++) {      // columns
      let newCell = JSON.parse(JSON.stringify(cell.value))
      newCell.x = colIndex
      newCell.y = rows - rowIndex + 1
      newCell.pos = getCellPos(newCell.x, newCell.y)
      cells.push(newCell)
    }
  }
  return cells // .sort(() => Math.random() - 0.5);
})

</script>
