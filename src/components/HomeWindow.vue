<script setup>

const props = defineProps({
      id: Number
    })

const emit = defineEmits(['startResizing'])
</script>

<template>
    <div class="viewport w-full h-full overflow-auto flex items-center justify-center m-[15px]">
        <slot></slot>
    </div>
    <div @mousedown="emit('startResizing','top', props.id)" class="edge-top w-full h-[10px] absolute top-0 cursor-ns-resize z-2"></div>

    <div @mousedown="emit('startResizing','left', props.id)" class="edge-left h-full w-[10px] absolute left-0 cursor-ew-resize z-2"></div>

    <div @mousedown="emit('startResizing','bottom', props.id)" class="edge-bottom w-full h-[10px] absolute bottom-0 cursor-ns-resize z-2"></div>

    <div @mousedown="emit('startResizing','right', props.id)" class="edge-right h-full w-[10px] absolute right-0 cursor-ew-resize z-2"></div>
</template>