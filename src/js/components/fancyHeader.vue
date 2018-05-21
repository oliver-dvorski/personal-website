<template>
    <div class="header" :class="size">
        <div class="container mx-auto">
            <slot></slot>
            <div class="subtitle">
                <slot name="subtitle"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['size']
    }
</script>
