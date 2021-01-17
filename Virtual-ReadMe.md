# 吴乐川的针对 Vue 2.x 的用户界面组件：某某组件（支持 TypeScript 语法）

<link rel="stylesheet" href="./node_modules/@wulechuan/css-stylus-markdown-themes/dist/css/wulechuan-styles-for-html-via-markdown--vscode.default.min.css">





## NPM 页

<dl>
<dt>NPM 包名</dt>
<dd>

[@wulechuan/vue2-ui--something](https://www.npmjs.com/package/@wulechuan/vue2-ui--something)

</dd>
<dt>作者</dt>
<dd><p>南昌吴乐川</p></dd>
</dl>





## 简介



## 用法

### 基本使用思路说明

### 开发任务拆解

于开发者而言，使用思路明确之后，还需明白开发的具体任务。众所周知，在基于 Vue 框架的开发过程中，不论你采用 Vue 的【单文件组件】（所谓 Single-filed Component，SFC）与否，开发任务总可以为三个部分：模板部分、脚本逻辑部分和样式部分。下文将分此三个部分，并结合前述使用思路和示例，介绍本组件之用法。


#### 模板（`<template>`）部分

撰写模板的任务，又可进一步细分为 2 个小任务：

1.  在模板上按需给出 Props。例如 `:my-prop-1="true"`。
1.  将内容插入本组件模板预先设计好的插槽（`slot`）中。


##### 模板的 Props

昝略。见下文中的示例。另见下文《[应用编程接口（所谓 API）](#%E5%BA%94%E7%94%A8%E7%BC%96%E7%A8%8B%E6%8E%A5%E5%8F%A3%EF%BC%88%E6%89%80%E8%B0%93-api%EF%BC%89)》一节。


##### 模板插槽

模板包含以下插槽（`slot`）：

-   默认插槽，被 `.something` 包裹，用于接纳主体内容。

模板根标签所接纳的属性（attributes）昝略。见下文《[应用编程接口（所谓 API）](#%E5%BA%94%E7%94%A8%E7%BC%96%E7%A8%8B%E6%8E%A5%E5%8F%A3%EF%BC%88%E6%89%80%E8%B0%93-api%EF%BC%89)》一节。

一段较完整的示例代码如下：

```html
<template>
    <something
        class="my-first-something"
        :my-prop-1="true"
    >
        <p>内容</p>
    </something>
</template>
```


---


#### 脚本语言（`<script>`）部分

##### 针对 TypeScript 编程环境的用法示例

> 注意！采用本 Vue 组件之 TypeScript 版本时，`import` 语句的 `from` 须指向 `./source/index.vue`。

```ts
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import UISomething from '@wulechuan/vue2-ui--something/source/index.vue'

@Component({
    components: {
        'something': UISomething,
    },
})
export default class MyFirstSomething extends Vue {}
```


##### 针对 JavaScript 编程环境的用法示例

> 注意！采用本 Vue 组件之 JavaScript 版本时，`import` 语句的 `from` 须指向 `./dist/index.vue`。

```js
import Vue from 'vue'
import UISomething from '@wulechuan/vue2-ui--something/dist/index.vue'

export default {
    components: {
        'something': UISomething,
    },
}
```


---


#### 样式（`<style>`）部分

##### 所谓“关键但不确定”的样式

**所谓“关键但不确定”的样式，是指那些运用本组件时必不可少，但本组件却不直接提供，而是要求用户自行确定的样式。**目前，实则仅涉及 0 个数据：

1.  某某部分的宽度
2.  某某部分的高度

以上数据往往因设计稿而异，故本组件不便冒然给出所谓默认值，而是交由采纳本组件之项目自行明确之。

###### 某某部分之宽度

```stylus
.my-first-something {
    width: 1234px;
    height: 567px;
}
```



##### 锦上添花之样式 1：自由编写

本组件默认不迎合特定的视觉风格或要求，故而默认不包含任何与视觉风格有关的样式规则。诸君可以自由书写锦上添花的样式。

下面是所谓额外样式之示例代码。

```stylus
.my-first-something {
}
```




##### 锦上添花之样式 2：本组件自带的额外样式

为多个项目、甚至为统一项目的多个页面反复书写额外样式，未免乏味，甚至令人厌烦。于是，本组件亦附带了 ? 种预设好的 `.css` 文件，以方便地实现符合本人喜好的样式。诸君若有兴趣，欢迎尝试。

我先逐一介绍这三个 CSS 文件之功用或目的。稍后再于《[上述三个额外 CSS 文件的使用方法](#%E4%B8%8A%E8%BF%B0%E4%B8%89%E4%B8%AA%E9%A2%9D%E5%A4%96-css-%E6%96%87%E4%BB%B6%E7%9A%84%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95)》一节统一介绍具体如何在你的 Vue 项目中正确加载它们。



###### 自带的额外 CSS 文件 1 之功用

第 1 个自带的额外 CSS 文件是`./dist/something.css`。


该 CSS 达到的目的（或者说提供的效果）其实很简单，归纳起来有 ? 点：

1.  待详实。


###### 自带的额外 CSS 文件 2 之功用

第 2 个自带的额外 CSS 文件是`./dist/some-other-thing.css`。

该 CSS 文件达到的目的也很简单：

1.  待详实。


###### 上述 ？ 个额外 CSS 文件的使用方法

在了解了上述 ？ 个 CSS 文件之目的或作用之后，我介绍一下它们在诸君 Vue 项目中的正确用法。

凡 Vue 项目，均配备 `main.js` 或 `main.ts`。诸君之 Vue 项目也不例外。为方便指代，不妨暂称其为“main 文件”。欲采用前述 ？ 个 CSS 文件之任一，即应在“main 文件”的首部引入此 CSS 文件。见下例：

```js
import '@wulechuan/vue2-ui--something/dist/something.css'
import '@wulechuan/vue2-ui--something/dist/some-other-thing.css'

import Vue from 'vue'
import App from './app.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
```

> 须注意，我推荐令导入 css 之 `import` 语句位于“main 文件”之**最顶端**。此举可确保这些 CSS 之代码**早于**各 `.vue` 文件中书写的样式被纳入诸君项目最终编译得到的汇总 `.css` 文件中。


---


### 可运转的完整示例项目

本代码库自带的可运转的示例项目：

-   《[demos/demo-of-typescript](./demos/demo-of-typescript/)》。
-   《[demos/demo-of-javascript](./demos/demo-of-javascript/)》。




---


## 应用编程接口（所谓 API）

### 输入项（即 Vue 组件的 Props）

我相信，以下个 Props 之功用均不言自明。

#### 小驼峰（camelCase）记法

```ts
@Prop() myProp1?: any;
```

#### 葫芦串（所谓 kebab）记法

```html
<page
    :my-prop-1="true"
></page>
```



### Vue 组件插槽（即 `slot`）

-   默认插槽，被 `.something` 包裹，用于接纳主体内容。


---

## 未来计划

暂无。


---

## 许可证类型

WTFPL

> 注意：
>
> 我未研究过许可证的约束。因此姑且声明为 WTFPL 类型。但实际上该许可证类型可能与我采用的开源模块有冲突。



