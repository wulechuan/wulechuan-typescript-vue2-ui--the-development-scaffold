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

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import UISomething from '@wulechuan/vue2-ui--something/source/index.vue'

@Component({
    components: {
        'something': UISomething,
    },
})
export default class MyFirstSomething extends Vue {
}
</script>
