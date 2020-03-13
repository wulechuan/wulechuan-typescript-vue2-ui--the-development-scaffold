<template>
    <someting
        class="my-first-something"
        :my-prop-1="true"
    ></someting>
</template>

<style lang="stylus">
.my-first-something {
}
</style>

<script>
import Vue from 'vue'
import UISomething from '@wulechuan/vue2-ui--something/dist/index.vue'

export default {
    components: {
        'something': UISomething,
    },
    data: function () {
        return {
        }
    },
}
</script>
