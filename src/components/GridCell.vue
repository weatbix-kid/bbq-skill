<template>
  <div
    v-if="cell.node"
    :style="`order: ${cell.pos}`"
    class="box-border block w-12 h-12 text-xs bg-red-600 border-2 cursor-pointer select-none border-red-950"
    :class="cell.node.selected ? '!bg-green-600 !border-green-950' : null"
    @click="logPos((cell.x as number), (cell.y as number)); cell.node.selected = !cell.node.selected"
  >
    x: {{ cell.x }}
    y: {{ cell.y }}
    {{ cell.node.selected }}
  </div>
  <div v-else class="box-border block w-12 h-12" :style="`order: ${cell.pos}`"></div>
</template>

<script setup lang="ts">
import type { Cell } from '@/types';
import { getCellPos } from '@/utils/gridFunctions';
import { ref } from 'vue';

const props = defineProps<{
  cell: Cell
}>()

const cell = ref(props.cell)

function logPos(x: number, y: number) {
  console.log(`x: ${x}`, `y: ${y}`);
  console.log(getCellPos(x, y))
}

</script>
