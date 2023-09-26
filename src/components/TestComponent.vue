<template>
  {{ cell }}
  <div class="grid max-w-[1056px] m-auto grid-cols-stc grid-rows-str">
    <div
      v-for="(cell, index) in cells" :key="index" class="box-border block w-12 h-12 text-xs bg-red-600 border-2 cursor-pointer border-red-950" :style="`order: ${cell.pos}`"
      @click="logPos(cell.x, cell.y)"
    >
      x: {{ cell.x }}
      y: {{ cell.y }}
      <!-- {{ cell.pos }} -->
      <!-- {{ index + 1 }} -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import type { Cell } from '../types'
import { Attribute } from '../enums'

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
      newCell.pos = getPos(newCell.x, newCell.y)
      cells.push(newCell)
    }
  }
  return cells // .sort(() => Math.random() - 0.5);
})

function logPos(x: number, y: number) {
  console.log(`x: ${x}`, `y: ${y}`);
  console.log(getPos(x, y))
}

function getPos (x: number, y: number) : number {
  const columns = 22
  const rows = 20
  return columns * (rows - y) - (columns - x) + columns;
}

</script>
