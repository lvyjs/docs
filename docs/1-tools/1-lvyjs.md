---
sidebar_position: 1
---

# lvyjs

使用开发工具提高开发效率，提升开发体验。

:::tip lvyjs

为 nodejs 应用而设计的打包构建工具

:::

| Project | Status                | Description |
| ------- | --------------------- | ----------- |
| [lvyjs] | [![lvyjs-s]][lvyjs-p] | 打包工具    |

[lvyjs]: https://github.com/lemonade-lab/alemonjs/tree/main/packages/lvyjs
[lvyjs-s]: https://img.shields.io/npm/v/lvyjs.svg
[lvyjs-p]: https://www.npmjs.com/package/lvyjs

文档： https://vlyjs.dev/

```sh
npm install lvyjs -D
```

```json title="tsconfig.json"
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@src/*": ["src/*"]
    }
  },
  "include": ["src/**/*"],
  "extends": "lvyjs/tsconfig.json"
}
```

```ts title="lvy.config.ts"
import { defineConfig } from 'lvyjs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const server = () => import('./src/index')
export default defineConfig({
  plugins: [() => server],
  alias: {
    entries: [{ find: '@src', replacement: join(__dirname, 'src') }]
  },
  build: {
    OutputOptions: {
      intro: `/**  https://lvyjs.dev script start **/`,
      outro: ` /**  https://lvyjs.dev script end  **/ `
    }
  }
})
```

```sh
npx lvy dev
```

```sh title="对 src 目录打包并输出到 lib 目录"
npx lvy build
```

## 资源

- 装载

```ts title="src/index.ts
import { readFileSync } from 'fs'
// 得到该文件的绝对路径，类型 string
import img_logo from '../logo.png'
const data = readFileSync(img_logo, 'utf-8')
```

- 别名

```ts title="src/index.ts"
import { readFileSync } from 'fs'
// 得到该文件的绝对路径，类型 string
import img_logo from '@src/asstes/img/logo.png'
const data = readFileSync(img_logo, 'utf-8')
```

## styles

```ts title="src/index.ts"
import { readFileSync } from 'fs'
// 得到该文件的绝对路径，类型 string
import ccsURL from '@src/asstes/img/logo.css'
// 完整的单文件css数据、即使内部有其他文件引用。
const data = readFileSync(css, 'utf-8')
```

> 内置了对 css 的处理。

> 如果你要处理 less 、sass、scss

```sh
yarn add less sass -D
```

### 引用

- css

```css
@import url('@src/assets/test2.css');
@import url('./test2.css');
/* 支持别名 */
```

- scss

```scss
@import url('@src/assets/test3.scss');
@import url('./test3.scss');
@use './test3.scss';
```

以下写法待修复

```scss
@use '@src/assets/test2.scss';
```

- sass

```sass
// none
```

- less

```less
@import './test1.css';
```

以下写法待修复

```less
@import url('@src/assets/test2.less');
@import url('./test2.less');
@import '@src/assets/test2.less';
@import './test2.less';
//
@import 'src/assets/test2.less';
```

- sass

```scss
@import url('@src/assets/test.css');
@import url('./test.css');
@import './test.css';
@import '@src/assets/test.css';
// @import ./_test4.sass;
@use 'test4;
```

error

```scss
@import url('@src/assets/_test4.sass');
@import url('./_test4.sass');
```

### postcss

- 压缩

```sh
yarn add cssnano -D
```

```cjs title="postcss.config.cjs"
module.exports = {
  plugins: {
    cssnano: {
      preset: 'default'
    }
  }
}
```

- tailwindcss

```sh
yarn add tailwindcss
```

```cjs title="postcss.config.cjs"
module.exports = {
  plugins: {
    tailwindcss: {}
  }
}
```

```js title="tailwind.config.js"
/**
 *  @type {import('tailwindcss').Config}
 */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}']
}
```
