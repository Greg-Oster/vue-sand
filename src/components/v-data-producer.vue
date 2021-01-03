<template>
    <!-- <h1>Suk</h1> -->
    <ul>
    <li v-for="(goal,index) in goals" :key="index">
        <slot :item="goal" additionalInfo="хуй"></slot>
    </li>
    </ul>
</template>

<script>
    export default {
        data() {
            return {
                goals: ["first item","second", "third one"]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>