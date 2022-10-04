<script setup lang="ts">
import SingleBlock from '@/components/board/SingleBlock.vue'
import { ref } from 'vue'

const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const activeBlockId = ref('')

const relatedBlocks = ref<string[]>([])

const getBlockSections = () => {
  const rows = [
    ['A', 'B', 'C'],
    ['D', 'E', 'F'],
    ['G', 'H', 'I'],
  ]

  const cols = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]

  const sections = new Map<string, string[]>()
  sections.set('00', [])
  sections.set('01', [])
  sections.set('02', [])
  sections.set('10', [])
  sections.set('11', [])
  sections.set('12', [])
  sections.set('20', [])
  sections.set('21', [])
  sections.set('22', [])

  sections.forEach((section, key) => {
    rows[parseInt(key[0])].forEach((row) => {
      cols[parseInt(key[1])].forEach((col) => {
        section.push(`${row}${col}`)
      })
    })
  })

  return sections
}

const blockSections = getBlockSections()

const findRelatedBlock = (blockId: string) => {
  let foundKey = ''
  blockSections.forEach((section, key) => {
    if (section.includes(blockId)) foundKey = key
  })

  return blockSections.get(foundKey)
}

const setBlocksColor = (activeColumn: string, activeRow: number) => {
  activeBlockId.value = `${activeColumn}${activeRow}`

  const relatedBlockResult: string[] = []

  const relatedRows = rows.map((row) => `${activeColumn}${row}`)
  const relatedColumns = columns.map(
    (column) => `${column}${activeRow}`,
  )
  const relatedBlock =
    findRelatedBlock(`${activeColumn}${activeRow}`) || []

  relatedBlocks.value = relatedBlockResult
    .concat(relatedRows, relatedColumns, relatedBlock)
    .filter((block) => block !== `${activeColumn}${activeRow}`)
}
</script>

<template>
  <div
    class="grid grid-cols-9 justify-items-center w-fit mx-auto border-black border-2"
  >
    <div v-for="row in rows" :key="row" class="flex flex-col">
      <SingleBlock
        v-for="column in columns"
        :key="`${column}${row}`"
        :class="{
          'border-r-2 border-r-black': row === 3 || row === 6,
          'border-b-2 border-b-black':
            column === 'C' || column === 'F',
          'bg-amber-400 dark:bg-indigo-800':
            activeBlockId === `${column}${row}`,
          'bg-amber-400/50 dark:bg-indigo-800/50':
            relatedBlocks.includes(`${column}${row}`),
        }"
        @click="setBlocksColor(column, row)"
      />
    </div>
  </div>
</template>
