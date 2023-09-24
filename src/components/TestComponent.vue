<template>
  {{ cell }}
  <div class="grid max-w-[1056px] m-auto grid-cols-stc grid-rows-str">
    <div
      v-for="(cell, index) in cells" :key="index" class="box-border block w-12 h-12 text-xs bg-red-600 border-2 border-red-950"
      @click="logPos(cell.x, cell.y); cell.selected = !cell.selected"
    >
      x: {{ cell.x }}
      y: {{ cell.y }}
      {{ index + 1 }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import type { Cell } from '../types'
import { Attribute } from '../enums'

const cell : Ref<Cell> = ref({
  node: {
    type: {
      cost: 1,
      value: 1,
      type: Attribute.Generic,
    },
    selected: false,
  },
  x: 1,
  y: 1
})

const cells = computed(() => {
  let cells = []
  for (let rowIndex = 1; rowIndex <= 20; rowIndex++) {        // rows
    for (let colIndex = 1; colIndex <= 22; colIndex++) {      // columns
      let newCell = JSON.parse(JSON.stringify(cell.value))
      newCell.x = colIndex
      newCell.y = rowIndex
      cells.push(newCell)
    }
  }
  return cells
})

function logPos(x: number, y: number) {
  console.log(getPos(x, y))
}

function getPos (x: number, y: number) : number {
  const gridLength = 22
  return (gridLength * y) - x + x - (gridLength - x)
}
</script>
