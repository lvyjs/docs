---
sidebar_position: 3
---

# 模版开发

:::tip 提示

使用脚手架快速创建模版项目。

:::

## 创建项目

```bash
npm create lvyjs@latest -y
```

```bash title="选择模版"
? Which template do you want to use? ...
> alemonjs
  yunzaijs
  jsxp
  pure
```

> 超时连接可尝试使用镜像
>
> ```sh
> npm create --registry=https://registry.npmmirror.com lvyjs@latest -y
> ```

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
- [Yunzaijs 开发文档](https://yunzaijs.github.io/docs/)

## 源码

[create-yunzai](https://github.com/lvyjs/core/tree/main/packages/create-lvyjs/bin/template)
