---
sidebar_position: 3
---

# 模板

:::tip 提示

使用脚手架快速创建模版项目。

:::

| Project        | Status                    | Description |
| -------------- | ------------------------- | ----------- |
| [create-lvyjs] | [![c-lvyjs-s]][c-lvyjs-p] | 打包工具    |

[create-lvyjs]: https://github.com/lemonade-lab/lvyjs/tree/main/packages/create-lvyjs
[c-lvyjs-s]: https://img.shields.io/npm/v/create-lvyjs.svg
[c-lvyjs-p]: https://www.npmjs.com/package/create-lvyjs

## 创建项目

```bash
npm create lvyjs@latest -y --registry=https://registry.npmmirror.com
```

```bash title="选择模版"
? Which template do you want to use? ...
> alemonjs
  yunzaijs
  jsxp
  pure
```

## 进入项目

> 按照提示，进入项目目录

```bash title="进入项目"
cd alemonb
cd yunzaib
cd jsxp
cd pure
```

## 安装依赖

```bash title="包管理"
npm install yarn@1.19.1 -y
```

```bash title="安装依赖"
yarn install
```

## 开发

:::tip develop

按照你的喜好，进行开发吧！

:::

### 指引文档

- [lvyjs 文档](./tools/lvyjs)
- [JSXP 文档](./tools/jsxp)
- [Alemonjs 开发文档](https://alemonjs.com/)

## 模板源码

[create-lvyjs](https://github.com/lemonade-lab/lvyjs/tree/main/packages/create-lvyjs/bin/template)
