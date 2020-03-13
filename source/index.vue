<template>
    <div class="something">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component({})
export default class MyComponent1 extends Vue {
    @Prop() myProp1?: any

    private get myGetter1(): boolean {
        return !!this.myProp1
    }
}
</script>

<style lang="stylus">
.something {
}
</style>
