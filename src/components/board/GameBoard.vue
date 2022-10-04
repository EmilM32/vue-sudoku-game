<script setup lang="ts">
import SingleBlock from '@/components/board/SingleBlock.vue'
import { ref } from 'vue'

const columnsSections = [
  ['A', 'B', 'C'],
  ['D', 'E', 'F'],
  ['G', 'H', 'I'],
]

const rowsSections = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

const columns = columnsSections.flat()
const rows = rowsSections.flat()

const activeBlockId = ref('')
const relatedBlocks = ref<string[]>([])

const getBlockSections = () => {
  const sections = new Map<string, string[]>()
  const sectionsCoordinates = [
    '00',
    '01',
    '02',
    '10',
    '11',
    '12',
    '20',
    '21',
    '22',
  ]

  sectionsCoordinates.forEach((key) => {
    sections.set(key, [])
  })

  sections.forEach((section, key) => {
    columnsSections[parseInt(key[0])].forEach((col) => {
      rowsSections[parseInt(key[1])].forEach((row) => {
        section.push(`${col}${row}`)
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
          'bg-amber-400 dark:bg-indigo-900':
            activeBlockId === `${column}${row}`,
          'bg-amber-400/[.06] dark:bg-indigo-800/[.06]':
            relatedBlocks.includes(`${column}${row}`),
        }"
        @click="setBlocksColor(column, row)"
      />
    </div>
  </div>
</template>
