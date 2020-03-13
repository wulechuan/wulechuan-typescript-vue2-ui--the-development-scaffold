<link rel="stylesheet" href="./node_modules/@wulechuan/css-stylus-markdown-themes/dist/css/wulechuan-styles-for-html-via-markdown--vscode.default.min.css">


# 吴乐川的针对 Vue 2.x 的用户界面组件开发模板

## 简介

本模板项目用于快速搭建一个新的独立项目。该项基于 Vue 2.x，并适合开发独立的 Vue 组件，特别是“单文件组件（Single-filed component）”。

配备了现成的 Gulp 工具链，可：

-   令 `.vue`、`.ts` 各自单独编译，而不是打包成单一 `.js` 文件。
-   将单独的 `.styl` 文件编译成标准的 `.css`。


配备了现成的 NPM 脚本项，例如：

-   `generate-html-docs`
-   `lint`
-   `before-git-commit`
-   `dist`
-   `start`
-   `prepublishOnly`


## 使用方法

实际使用时，请：

-   删除 `.git` 文件夹。
-   将本 `ReadMe.md` 删除。并将 `ReadMe.component*.md` 中的“`component`”字样删除。
-   将根文件夹下的 `package.json` 中的 `"private"` 项目去除，或改为 `false`。
-   在根文件夹下的 `package.json` 中，按需填写搜索关键字。
-   在根文件夹下的 `package.json` 中，按需填写与 Git 有关的信息。
