# express 开发环境搭建模版

用于开发 `express 服务`

基于 `babel` 进行 `es6` 语法的转译，在开发时使用 `es6` 语法，发布时转译为 `node` 可直接解释的 `es5` 代码

模版计划：

- [x] es6 开发环境 (babel)
  - [x] 模块路由映射 (babel-plugin-module-resolver)
- [x] 自动重载 (nodemon)
- [x] 单元测试 (jest)
- [x] 命令行解析 (argparse)
- [x] 文档生成 (docsify)
- [x] 服务日志 (winston)

### 目录结构

```
├── docs						# 文档
│   ├── .nojekyll
│   ├── README.md
│   └── index.html
├── project						# 开发目录
│   ├── utils
│   │   ├── arg_parse.js
│   │   └── meta.js
│   └── index.js
├── release						# 发布目录
│   ├── utils
│   │   ├── arg_parse.js
│   │   ├── arg_parse.js.map
│   │   ├── meta.js
│   │   └── meta.js.map
│   ├── index.js
│   └── index.js.map
├── test						# 测试目录
│   └── start.test.js
├── .babelrc					# babel 配置文件
├── .editorconfig				# editorconfig 配置文件
├── .gitignore
├── README.md
├── jest.json					# jest 测试配置文件
└── package.json
```

#### 目录说明

1. 所有的项目开发都在 `project` 目录中进行
2. `release` 目录用于转译 `es6` 语法，结构上与 `project` 保持一致，并且额外生成 `source map` ，方便运行调试
3. `project/utils/arg_parse.js` 用于命令行解析配置，版本信息来源于 `package.json`
4. `test` 目录下包含所有测试用例，只需要测试文件以 `.test.js` 作为文件后缀即可，测试同时会输出覆盖率报告，保存在目录下的 `coverage` 目录下
5. `.babelrc` 文件主要用于转译配置，包含路由映射配置，暂时将 `@` 映射为 `project` 目录，可根据需要添加
6. `.editorconfig` 文件为 editorconfig 配置文件，需要编辑器支持
7. `jest.json` 包含测试配置项，其中包含测试用例中的模块映射，这里的模块映射与 `project` 下的模块映射不同，不能混在一起

#### 命令说明

- `npm run dev` 将使用 `nodemon` 一直监听文件变动，将对入口文件进行自动重载
- `npm run build` 将 `project` 目录转译到 `release` 目录，并附带 `source map` 方便查错
- `npm run serve` 将开启 `express` 服务
- `npm run test` 将开始测试，并输出覆盖率报告到 `coverage` 目录
- `npm run init-docs` 将初始化文档服务，主要会覆盖 `docs` 目录下的 `README.md` 文件，即文档服务的首页内容来自整个项目的 `README.md`
- `npm run serve-docs` 将启动文档服务，可进行查看

#### 其他

> you are free to make any change

##### 测试用例

测试用例并非完全局限于 `test` 目录，现在的配置只要满足 `*.test.js` 通配的文件都会进行测试

##### 文档服务

这里只给出了文档服务最基本的配置，更多配置以及插件可以到官网查看 [docsify](https://docsify.js.org)
