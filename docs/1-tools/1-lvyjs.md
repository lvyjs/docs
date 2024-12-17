---
sidebar_position: 1
---

# lvyjs

使用开发工具提高开发效率，提升开发体验。

:::tip lvyjs

为 nodejs 应用而设计的打包构建工具

:::

| Project | Status                | Description  |
| ------- | --------------------- | ------------ |
| [lvyjs] | [![lvyjs-s]][lvyjs-p] | 打包开发工具 |

[lvyjs]: https://github.com/lvyjs/core
[lvyjs-s]: https://img.shields.io/npm/v/lvyjs.svg
[lvyjs-p]: https://www.npmjs.com/package/lvyjs

## 安装

```sh
npm install lvyjs -D
```

## 配置示例

> typescript 配置

```json title="./tsconfig.json"
{
  "include": ["src/**/*"],
  "extends": "lvyjs/tsconfig.json"
}
```

> 编译打包配置

```ts title="./lvy.config.ts"
import { defineConfig } from 'lvyjs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
const __dirname = dirname(fileURLToPath(import.meta.url))
const App = () => import('src/index')
export default defineConfig({
  plugin: [() => App]
})
```

```ts title="./src/index.ts"
const main = () => {
  console.log('main dev')
}
main()
```

```sh
npx lvy dev
```

## 非模块文件

```ts title="./lvy.config.ts"
import { defineConfig } from 'lvyjs'
export default defineConfig({
  assets: {
    filter: /\.(png|jpg|jpeg|gif|svg|webp|ico)$/
  }
})
```

### 类型

```ts title="src/end.d.ts"
/// <reference types="lvyjs/env" />
```

### 示例

```ts
import { readFileSync } from 'fs'
// 得到该文件的绝对路径，类型 string
import img_logo from '../logo.png'
const data = readFileSync(img_logo, 'utf-8')
```

## 别名

:::info

简化和统一导入格式

:::

### 配置

```ts title="./lvy.config.ts"
import { defineConfig } from 'lvyjs'
export default defineConfig({
  alias: {
    entries: [{ find: '@src', replacement: join(__dirname, 'src') }]
  }
})
```

```json title="./tsconfig.json"
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@src/*": ["src/*"]
    }
  }
}
```

### 使用

```ts
import { readFileSync } from 'fs'
// 得到该文件的绝对路径，类型 string
import img_logo from '@src/asstes/img/logo.png'
const data = readFileSync(img_logo, 'utf-8')
```

## 移除注释

```ts title="./lvy.config.ts"
import { defineConfig } from 'lvyjs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
export default defineConfig({
  build: {
    // @rollup/plugin-typescript options
    typescript: {
      // 打包时移除注释
      removeComments: true
    }
  }
})
```

## 压缩代码

```sh title="安装压缩插件"
yarn add rollup-plugin-terser -D
```

```ts title="./lvy.config.ts"
import { defineConfig } from 'lvyjs'
import { terser } from 'rollup-plugin-terser' // terser
export default defineConfig({
  build: {
    // rollup options
    RollupOptions: {
      // 使用压缩插件压缩代码
      plugins: [terser()]
    }
  }
})
```

## 打包

```ts title="./lvy.config.ts"
import { defineConfig } from 'lvyjs'
import { terser } from 'rollup-plugin-terser' // terser
export default defineConfig({
  build: {
    // rollup outputOptions
    OutputOptions: {
      input: 'src',
      output: 'lib',
      intro: `/**  https://lvyjs.dev script start **/`,
      outro: ` /**  https://lvyjs.dev script end  **/ `
    }
  }
})
```

> 对 src 目录打包并输出到 lib 目录

```sh
npx lvy build
```
