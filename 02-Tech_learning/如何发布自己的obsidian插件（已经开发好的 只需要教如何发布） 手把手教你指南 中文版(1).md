# 1. 准备工作：发布前的检查清单

在将你的 Obsidian 插件分享给全世界之前，进行全面的准备工作至关重要。本章将指导你完成发布前的检查清单，确保你的插件稳定、易于使用，并为用户提供最佳体验。

## 1.1 功能测试与稳定性

在发布之前，务必对插件的各项功能进行彻底的测试，以确保其稳定性和可靠性。

### 1.1.1 核心功能验证

*   **全面测试：** 逐一测试插件的所有核心功能，确保它们按照预期运行。
*   **边界条件：** 测试插件在各种边界条件下的表现，例如空输入、大量数据、特殊字符等。
*   **与其他插件的兼容性：** 如果可能，测试你的插件与其他常用 Obsidian 插件的兼容性，避免潜在冲突。

### 1.1.2 性能优化

*   **响应速度：** 检查插件的响应速度，确保它不会显著拖慢 Obsidian 的运行。
*   **资源占用：** 监控插件在使用过程中的 CPU 和内存占用情况，进行必要的优化。

### 1.1.3 错误处理

*   **异常捕获：** 确保你的插件能够优雅地处理各种潜在错误，并向用户提供清晰的错误信息。
*   **日志记录：** 实现适当的日志记录，以便在用户遇到问题时能够方便地排查。

## 1.2 代码审查与质量

高质量的代码是插件成功的基石。进行代码审查可以帮助你发现潜在的问题，并提升代码的可维护性。

### 1.2.1 代码风格一致性

*   **遵循规范：** 确保你的代码遵循一致的代码风格，例如缩进、命名约定等。
*   **Linting 工具：** 使用 ESLint 等工具来自动化检查代码风格问题。

### 1.2.2 可读性与维护性

*   **清晰的注释：** 为复杂的代码段添加清晰的注释，解释其功能和逻辑。
*   **模块化设计：** 将代码分解成小的、可重用的模块，提高代码的可读性和可维护性。
*   **避免冗余：** 消除重复的代码，提高代码的效率。

### 1.2.3 安全性考虑

*   **输入验证：** 对所有用户输入进行严格的验证，防止潜在的安全漏洞。
*   **避免敏感信息泄露：** 确保插件不会无意中泄露用户的敏感信息。

## 1.3 文档准备

完善的文档能够帮助用户理解你的插件，并有效地使用它。

### 1.3.1 README 文件

*   **清晰的介绍：** 在 `README.md` 文件中提供插件功能的清晰、简洁的介绍。
*   **安装指南：** 提供详细的安装步骤，包括手动安装和通过社区插件管理器安装。
*   **使用说明：** 详细说明插件的各项功能如何使用，提供示例和截图。
*   **配置选项：** 列出所有可配置的选项，并解释其含义和作用。
*   **常见问题解答 (FAQ)：** 预见用户可能遇到的问题，并提供解决方案。
*   **贡献指南：** 如果你希望社区参与贡献，提供贡献指南。
*   **许可证信息：** 明确插件的开源许可证。

### 1.3.2 示例与演示

*   **实际用例：** 提供一些实际的插件使用场景和示例，让用户更容易理解其价值。
*   **演示视频/GIF：** 如果可能，制作简短的演示视频或 GIF，直观展示插件的功能。

### 1.3.3 changelog

*   **版本记录：** 维护一个 `changelog.md` 文件，记录每个版本的更新内容、修复的 bug 以及新增的功能。这有助于用户了解插件的发展历程。

---

# 2. 插件的结构与元数据

## 2.1 插件的标准目录结构

一个 Obsidian 插件通常遵循一个标准的目录结构，这有助于 Obsidian 识别和加载插件，同时也方便开发者组织代码和资源。尽管 Obsidian 插件的灵活性很高，但以下结构是普遍推荐和常用的：

-   `your-plugin-name/` (插件根目录)
    -   `manifest.json` (插件的元数据文件，**必需**)
    -   `main.ts` (插件的主要入口文件，使用 TypeScript 编写，**必需**)
    -   `styles.css` (自定义 CSS 样式文件，可选)
    -   `assets/` (存放图片、字体等静态资源，可选)
        -   `icon.png` (插件的图标，可选，但推荐)
    -   `src/` (存放插件的源代码模块，可选，但推荐用于大型插件)
        -   `settings.ts` (设置界面相关的代码，可选)
        -   `utils.ts` (工具函数，可选)
    -   `node_modules/` (通过 npm 或 yarn 安装的依赖，**通常不包含在发布版本中**)
    -   `tsconfig.json` (TypeScript 编译配置文件，可选)
    -   `package.json` (Node.js 项目配置文件，可选)
    -   `README.md` (插件的说明文档，可选，但强烈推荐)

### 2.1.1 `manifest.json` 的重要性

`manifest.json` 文件是 Obsidian 插件的核心配置文件。Obsidian 在加载插件时，会首先读取这个文件来获取插件的基本信息、依赖关系以及启动方式。一个有效的 `manifest.json` 文件是插件能够被 Obsidian 正确识别和使用的前提。

## 2.2 `manifest.json` 关键元数据解析

`manifest.json` 文件是一个 JSON 格式的文件，其中包含了描述插件的各种属性。以下是其中一些最关键的元数据字段：

### 2.2.1 `id`

*   **描述**: 插件的唯一标识符。这个 ID 必须是全局唯一的，并且通常采用小写字母、数字和连字符的组合。在发布到 Obsidian 社区插件列表时，它将成为插件的 URL 的一部分。
*   **示例**: `"id": "my-awesome-plugin"`

### 2.2.2 `name`

*   **描述**: 插件的显示名称。这是用户在 Obsidian 界面中看到的插件名称。
*   **示例**: `"name": "My Awesome Plugin"`

### 2.2.3 `version`

*   **描述**: 插件的版本号。遵循 Semantic Versioning (SemVer) 规范（例如 `1.0.0`）。每次更新插件时，都需要增加版本号。
*   **示例**: `"version": "1.0.0"`

### 2.2.4 `minAppVersion`

*   **描述**: 插件所兼容的最低 Obsidian 版本。这确保了插件不会在过旧的 Obsidian 版本上运行，从而避免潜在的兼容性问题。
*   **示例**: `"minAppVersion": "1.0.0"`

### 2.2.5 `description`

*   **描述**: 插件的简短描述。用于向用户说明插件的功能。
*   **示例**: `"description": "A plugin that adds awesome features to Obsidian."`

### 2.2.6 `author`

*   **描述**: 插件的作者姓名或组织名称。
*   **示例**: `"author": "Your Name"`

### 2.2.7 `authorUrl`

*   **描述**: 作者的个人网站、GitHub 仓库或其他联系方式的 URL（可选）。
*   **示例**: `"authorUrl": "https://github.com/yourusername"`

### 2.2.8 `isDesktopOnly`

*   **描述**: 一个布尔值，指示该插件是否仅在桌面版 Obsidian 上可用。如果设置为 `true`，则插件不会在移动版 Obsidian 上显示或加载。
*   **示例**: `"isDesktopOnly": false`

### 2.2.9 `entry`

*   **描述**: 插件的主入口文件相对于插件根目录的路径。通常是 `main.js`（TypeScript 编译后的输出文件）。
*   **示例**: `"entry": "main.js"`

### 2.2.10 `css`

*   **描述**: 插件自定义 CSS 文件的路径（可选）。如果插件使用了 `styles.css` 或其他 CSS 文件，需要在此处指定。
*   **示例**: `"css": "styles.css"`

### 2.2.11 `funding`

*   **描述**: 用于提供插件赞助方式的链接（可选）。可以包含多个赞助平台。
*   **示例**:
    ```json
    "funding": {
        "github": "yourgithubusername",
        "open_collective": "yourproject"
    }
    ```

### 2.2.12 `icon`

*   **描述**: 插件图标文件的路径（可选）。推荐使用 `assets/icon.png`。
*   **示例**: `"icon": "assets/icon.png"`

### 2.2.13 `keywords`

*   **描述**: 描述插件功能的关键词数组（可选）。这有助于用户搜索插件。
*   **示例**:
    ```json
    "keywords": [
        "todo",
        "task management",
        "productivity"
    ]
    ```

### 2.2.14 `dependsOn`

*   **描述**: 插件的依赖项列表（可选）。如果你的插件依赖于其他社区插件，可以在这里列出它们的 `id`。Obsidian 会在加载时检查这些依赖项。
*   **示例**:
    ```json
    "dependsOn": {
        "plugins": [
            "dataview",
            "calendar"
        ]
    }
    ```

### 2.2.15 `required`

*   **描述**: `dependsOn` 中列出的依赖项是否为必需的（可选）。如果为 `true`，则依赖项缺失时插件将无法加载。默认为 `false`。
*   **示例**:
    ```json
    "dependsOn": {
        "plugins": [
            {
                "id": "dataview",
                "required": true
            }
        ]
    }
    ```

### 2.2.16 示例 `manifest.json`

```json
{
    "id": "example-plugin",
    "name": "Example Plugin",
    "version": "1.0.0",
    "minAppVersion": "0.16.0",
    "description": "This is an example of a basic Obsidian plugin manifest.",
    "author": "Your Name",
    "authorUrl": "https://github.com/yourusername",
    "isDesktopOnly": false,
    "entry": "main.js",
    "css": "styles.css",
    "icon": "assets/icon.png",
    "keywords": ["example", "documentation"]
}
```

---

# 3. 代码打包与构建

本章将指导你如何将开发好的 TypeScript 或 JavaScript 代码打包成 Obsidian 插件可识别的格式。这通常涉及到使用构建工具，如 Webpack 或 Rollup，来处理模块、转译代码以及优化输出。

## 3.1 为什么需要代码打包？

在开发 Obsidian 插件时，我们通常会使用现代 JavaScript (ES6+) 和 TypeScript，它们提供了更强大的语言特性和更好的可维护性。然而，浏览器（以及 Obsidian 的 Electron 环境）可能并不原生支持所有这些特性。此外，为了提高加载速度和减少文件数量，我们还需要将多个模块合并成一个或几个文件，并进行代码压缩和优化。

代码打包工具正是为了解决这些问题而生的：

*   **模块化支持**: 允许你使用 `import` 和 `export` 语法组织你的代码，并将其打包成一个单一文件。
*   **语言转译**: 将 TypeScript 或 ES6+ 转换为浏览器/Electron 可理解的 ES5 代码。
*   **代码优化**: 移除未使用的代码 (tree shaking)，压缩代码，提高加载性能。
*   **资源管理**: 处理 CSS、图片等静态资源。

## 3.2 选择构建工具

对于 Obsidian 插件的开发，最常用的构建工具是 Webpack 和 Rollup。

*   **Webpack**: 功能强大且灵活，生态系统庞大，适合处理各种复杂的项目。
*   **Rollup**: 专注于 ES 模块，通常在打包库时表现更优，生成的代码更精简。

在本指南中，我们将主要以 **Webpack** 为例进行讲解，因为它在 Obsidian 插件社区中更为普遍，并且配置相对成熟。Rollup 的概念和流程与之类似，但具体配置会有所不同。

## 3.3 使用 Webpack 打包插件

### 3.3.1 安装依赖

首先，你需要安装 Webpack 及其相关的依赖。在你的插件项目中，运行以下命令：

```bash
npm install --save-dev webpack webpack-cli typescript ts-loader
```

*   `webpack`: Webpack 核心。
*   `webpack-cli`: Webpack 命令行接口，允许你通过命令行运行 Webpack。
*   `typescript`: TypeScript 编译器。
*   `ts-loader`: Webpack 的 loader，用于将 TypeScript 文件转译成 JavaScript。

### 3.3.2 配置 Webpack (`webpack.config.js`)

在你的插件项目根目录下创建一个名为 `webpack.config.js` 的文件，并添加以下基本配置：

```javascript
const path = require('path');

module.exports = {
  // 入口文件，指向你的插件主文件
  entry: './src/main.ts',

  // 输出配置
  output: {
    // 打包后的文件名
    filename: 'main.js',
    // 输出目录
    path: path.resolve(__dirname, 'dist'),
    // 告诉 Webpack 不要在打包后的文件顶部添加一个 IIFE (Immediately Invoked Function Expression)
    // 这对于 Obsidian 插件很重要，因为它需要暴露全局对象
    libraryTarget: 'commonjs2',
    // 清理 dist 目录，避免旧文件的残留
    clean: true,
  },

  // 模式：development (开发) 或 production (生产)
  mode: 'development', // 或者 'production'

  // 模块解析配置
  resolve: {
    extensions: ['.ts', '.js'], // 允许导入文件时省略 .ts 或 .js 后缀
  },

  // 模块规则（loaders）
  module: {
    rules: [
      {
        test: /\.ts$/, // 匹配 .ts 文件
        use: 'ts-loader', // 使用 ts-loader 进行转译
        exclude: /node_modules/, // 排除 node_modules 目录
      },
    ],
  },

  // 插件配置（此处暂时为空，后面会用到）
  plugins: [],

  // 目标环境
  target: 'node', // Obsidian 运行在 Node.js 环境中
};
```

**配置说明**:

*   **`entry`**: 指定你的插件的入口文件。通常是你的 `src/main.ts` 或 `src/main.js`。
*   **`output`**:
    *   `filename`: 打包后生成的文件名。Obsidian 期望插件的主文件名为 `main.js`。
    *   `path`: 打包后文件的输出目录。通常是 `dist` 目录。
    *   `libraryTarget: 'commonjs2'`: **非常重要！** 这告诉 Webpack 将你的代码打包成 CommonJS 模块，并使用 `module.exports` 导出。Obsidian 的插件系统就是基于 CommonJS 的。
    *   `clean: true`: 在每次构建之前，自动清空 `output.path` 指定的目录。
*   **`mode`**: 设置为 `'development'` 或 `'production'`。在生产模式下，Webpack 会进行代码优化和压缩。
*   **`resolve.extensions`**: 允许你在 `import` 语句中省略文件扩展名。
*   **`module.rules`**: 定义如何处理不同类型的文件。这里配置 `ts-loader` 来处理 TypeScript 文件。
*   **`target: 'node'`**: 指定构建目标为 Node.js 环境，这对于 Obsidian 插件至关重要，因为 Obsidian 本身就是一个 Electron 应用，其插件环境是基于 Node.js 的。

### 3.3.3 配置 `tsconfig.json`

如果你的插件使用 TypeScript，确保你有一个 `tsconfig.json` 文件来配置 TypeScript 编译器。如果还没有，可以运行 `npx tsc --init` 生成一个。

一个基本的 `tsconfig.json` 文件可能看起来像这样：

```json
{
  "compilerOptions": {
    "target": "ES2016", // 或更低版本，如 ES5
    "module": "commonjs", // 匹配 Webpack 的 libraryTarget
    "rootDir": "./src", // TypeScript 源文件根目录
    "outDir": "./dist", // TypeScript 输出目录（Webpack 会处理最终打包）
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "lib": ["ES2016", "DOM"] // 包含 DOM 库，以便使用 Obsidian API
  },
  "include": ["src/**/*.ts"], // 包含 src 目录下的所有 .ts 文件
  "exclude": ["node_modules"]
}
```

**注意**: `compilerOptions.module` 最好设置为 `"commonjs"` 以与 Webpack 的 `libraryTarget: 'commonjs2'` 保持一致。`compilerOptions.lib` 包含 `"DOM"` 是因为 Obsidian API 提供了 DOM 相关的接口。

### 3.3.4 添加构建脚本

在你的 `package.json` 文件中，添加一个 `build` 脚本，以便通过 `npm run build` 命令来执行打包：

```json
{
  "name": "my-obsidian-plugin",
  "version": "1.0.0",
  "description": "My awesome Obsidian plugin",
  "main": "dist/main.js", // 指向打包后的入口文件
  "scripts": {
    "build": "webpack --config webpack.config.js",
    "dev": "webpack --config webpack.config.js --watch" // 监听文件变化自动构建
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "ts-loader": "^9.5.1",
    "typescript": "^5.3.3",
    "webpack": "^5.89.0",
    "webpack-cli": "^5.1.4"
  },
  "dependencies": {
    "obsidian": "latest" // 确保你已经安装了 obsidian 类型
  }
}
```

*   `"build": "webpack --config webpack.config.js"`: 运行 Webpack，并指定配置文件。
*   `"dev": "webpack --config webpack.config.js --watch"`: 在开发模式下，使用 `--watch` 参数会让 Webpack 监听文件变化，并在文件修改后自动重新构建。

### 3.3.5 运行构建

现在，你可以通过以下命令来构建你的插件：

*   **开发模式（带监听）**:
    ```bash
    npm run dev
    ```
    这个命令会在 `dist` 目录下生成 `main.js`。当你在 `src` 目录下修改代码时，`dist/main.js` 会自动更新。

*   **生产模式（优化构建）**:
    在 `webpack.config.js` 中将 `mode` 设置为 `'production'`，然后运行：
    ```bash
    npm run build
    ```
    或者，你也可以在 `package.json` 的 `build` 脚本中动态设置模式：
    ```json
    "scripts": {
      "build": "webpack --config webpack.config.js --mode production",
      "dev": "webpack --config webpack.config.js --mode development --watch"
    },
    ```
    生产模式下的构建会进行代码压缩和优化。

## 3.4 将打包后的文件放入插件目录

构建完成后，`dist` 目录中会生成 `main.js` 文件。你需要将这个 `main.js` 文件（以及可能存在的其他静态资源，如 CSS 文件，尽管本例中没有涉及）复制到你的 Obsidian 插件目录中。

通常，插件目录位于：

*   **macOS**: `~/Library/Application Support/Obsidian/plugins/<your-plugin-id>/`
*   **Windows**: `%appdata%\Obsidian\plugins\<your-plugin-id>\`
*   **Linux**: `~/.config/obsidian/plugins/<your-plugin-id>/`

确保你的 `manifest.json` 文件中的 `main` 字段指向你打包后的主文件，例如：

```json
{
  "id": "my-obsidian-plugin",
  "name": "My Obsidian Plugin",
  "version": "1.0.0",
  "minAppVersion": "1.0.0",
  "author": "Your Name",
  "description": "A description of your plugin.",
  "main": "dist/main.js", // <-- 确保这里指向打包后的文件
  "authorUrl": "your-website.com"
}
```

**重要提示**: 如果你的 `manifest.json` 中的 `main` 字段写的是 `main.js`，而你的构建输出文件也是 `main.js`，并且你将 `main.js` 直接放在插件根目录，那么 `main` 字段就应该直接是 `main.js`。如果你将打包后的文件放在 `dist` 文件夹下，并且 `dist` 文件夹也位于插件根目录，那么 `main` 字段就应该指向 `dist/main.js`。

在上面的 `package.json` 示例中，我们设置了 `"main": "dist/main.js"`，这表示在 npm 包的上下文中，`dist/main.js` 是入口。**然而，对于 Obsidian 插件的发布，我们实际需要将 `dist/main.js` 文件复制到插件的根目录，并确保 `manifest.json` 中的 `main` 字段指向它。**

**正确做法**:

1.  在 `package.json` 中，`"main"` 字段可以指向你的源文件入口（如 `"src/main.ts"`），或者留空。
2.  在 `webpack.config.js` 中，`output.path` 设置为 `path.resolve(__dirname, 'dist')`。
3.  **构建后，将 `dist/main.js` 文件复制到你的插件的根目录。**
4.  在 `manifest.json` 中，将 `"main"` 字段设置为 `"main.js"`。

**更简化的发布流程**:
你也可以在 `package.json` 中添加一个 `copy` 脚本，用于自动将 `dist/main.js` 复制到插件根目录。例如，使用 `cpr`（copy-paste-replace）工具：

```bash
npm install --save-dev cpr
```

然后在 `package.json` 的 `scripts` 中：

```json
"scripts": {
  "build": "webpack --config webpack.config.js --mode production",
  "copy": "cpr dist/main.js ./ --overwrite", // 将 dist/main.js 复制到当前目录（插件根目录）
  "postbuild": "npm run copy" // 在 build 成功后自动执行 copy
},
```
这样，运行 `npm run build` 就会自动完成构建和文件复制。

## 3.5 使用 Rollup (简述)

如果你选择使用 Rollup，流程类似，但配置会不同。

1.  **安装依赖**:
    ```bash
    npm install --save-dev rollup @rollup/plugin-typescript typescript
    ```
2.  **配置 Rollup (`rollup.config.js`)**:
    ```javascript
    import typescript from '@rollup/plugin-typescript';

    export default {
      input: 'src/main.ts', // 入口文件
      output: {
        file: 'dist/main.js', // 输出文件
        format: 'cjs', // CommonJS 格式，与 Obsidian 插件兼容
        exports: 'default', // 如果你的插件默认导出
      },
      plugins: [
        typescript(), // 使用 Rollup 的 TypeScript 插件
      ],
      // 如果你使用了某些 Node.js 内置模块，可能需要配置 external
      // external: ['fs', 'path', 'obsidian']
    };
    ```
3.  **`package.json` 脚本**:
    ```json
    "scripts": {
      "build": "rollup -c",
      "dev": "rollup -c -w"
    },
    ```
4.  **运行**:
    ```bash
    npm run build
    npm run dev
    ```

选择哪个构建工具取决于你的偏好和项目需求，但核心目标都是将你的 TypeScript/JavaScript 代码打包成 Obsidian 插件可用的格式。

---

# 4. 编写清晰的 README 文件

一个优秀的 README 文件是你的 Obsidian 插件面向用户的“门面”。它不仅是用户了解你的插件功能、安装和使用方法的第一站，更是吸引潜在用户、建立信任的关键。一个清晰、信息丰富且具有吸引力的 README，能够极大地提升插件的下载量和用户满意度。

## 4.1 README 的核心要素

一个完整的插件 README 文件应该包含以下几个核心部分：

*   **插件名称与简介 (Plugin Name & Short Description)**
*   **安装指南 (Installation Guide)**
*   **功能介绍 (Features)**
*   **使用方法 (Usage)**
*   **截图或 GIF 演示 (Screenshots or GIF Demo)**
*   **配置选项 (Configuration Options)**
*   **已知问题与限制 (Known Issues & Limitations)**
*   **贡献指南 (Contributing)**
*   **许可协议 (License)**

## 4.2 插件名称与简介

这是 README 文件的开头，需要醒目且简洁。

*   **插件名称:** 使用大号字体（通常是 H1 标题）展示你的插件名称。
*   **简短描述:** 在名称下方，用一到两句话概括插件的核心功能和价值。让用户一眼就能明白你的插件是做什么的。

**示例:**

```markdown
# My Awesome Plugin

一个强大的 Obsidian 插件，可以帮助你快速创建和管理项目看板。
```

## 4.3 安装指南

清晰的安装步骤是用户能够顺利使用你插件的基础。

*   **推荐方式:** 优先提供通过 Obsidian 社区插件直接安装的步骤，这是最简便的方式。
*   **手动安装 (如果需要):** 如果你的插件有特殊依赖或需要手动安装，务必提供详细的步骤，包括下载文件、放置位置等。

**示例:**

```markdown
## 4.1 安装指南

### 4.1.1 通过 Obsidian 社区插件安装 (推荐)

1.  打开 Obsidian。
2.  进入 **设置 (Settings)**。
3.  选择 **社区插件 (Community plugins)**。
4.  确保 **安全模式 (Restricted mode)** 已关闭。
5.  点击 **浏览 (Browse)** 社区插件。
6.  在搜索框中输入 "My Awesome Plugin"。
7.  找到你的插件，点击 **安装 (Install)**。
8.  安装完成后，点击 **启用 (Enable)**。

### 4.1.2 手动安装

1.  从 [GitHub Release 页面](https://github.com/yourusername/obsidian-my-awesome-plugin/releases) 下载最新的 `.zip` 文件。
2.  解压文件。
3.  将解压后的 `obsidian-my-awesome-plugin` 文件夹复制到你的 Obsidian Vault 的 `.obsidian/plugins/` 目录下。
4.  重启 Obsidian。
5.  进入 **设置 (Settings)** -> **社区插件 (Community plugins)**，找到 "My Awesome Plugin"，点击 **启用 (Enable)**。
```

## 4.4 功能介绍

详细列出插件提供的所有功能，并简要说明每个功能的作用。使用列表形式可以使信息更易于阅读。

**示例:**

```markdown
## 4.2 功能介绍

*   **看板视图:** 以可视化的看板形式展示你的任务，支持自定义列（如：待办、进行中、已完成）。
*   **快速添加任务:** 通过快捷键或命令面板快速创建新任务。
*   **拖拽排序:** 轻松地通过拖拽来改变任务的优先级或状态。
*   **标签与优先级:** 为任务添加标签和设置优先级，便于筛选和管理。
*   **Markdown 集成:** 支持在任务描述中使用 Markdown 语法。
```

## 4.5 使用方法

这是用户如何与你的插件进行交互的部分。清晰的操作指南至关重要。

*   **命令面板:** 列出插件提供的所有命令，以及如何通过命令面板触发它们。
*   **快捷键:** 如果你的插件有自定义快捷键，请在此列出。
*   **特定操作:** 描述如何执行插件的核心功能，例如如何创建看板、如何添加任务、如何切换视图等。

**示例:**

```markdown
## 4.3 使用方法

### 4.3.1 触发插件命令

你可以在 Obsidian 的命令面板 (Ctrl/Cmd + P) 中搜索以下命令：

*   `My Awesome Plugin: Open Kanban Board` - 打开看板视图。
*   `My Awesome Plugin: Add New Task` - 快速添加一个新任务。

### 4.3.2 创建和管理看板

1.  打开命令面板，运行 `My Awesome Plugin: Open Kanban Board`。
2.  在看板视图中，点击右上角的 "+" 按钮添加新的列（例如："待办", "进行中", "已完成"）。
3.  点击列下方的 "Add a card" 来添加任务。
4.  拖拽卡片可以在不同的列之间移动。
5.  点击卡片可以编辑任务详情。

### 4.3.3 添加任务快捷键

-   `Ctrl/Cmd + Shift + N`: 快速添加新任务到当前聚焦的列。
```

## 4.6 截图或 GIF 演示

“一图胜千言”。高质量的截图或 GIF 演示能够直观地展示插件的界面和工作流程，极大地吸引用户。

*   **截图:** 使用清晰、高分辨率的截图，重点展示插件的关键界面和功能。
*   **GIF 演示:** 对于动态操作（如拖拽、动画效果），GIF 是最佳选择。确保 GIF 文件大小适中，加载速度快。
*   **放置位置:** 通常放在功能介绍之后或使用方法之前，让用户先“看到”插件的效果。

**示例:**

```markdown
## 4.4 截图与演示

### 4.4.1 看板视图概览

![Kanban View](path/to/your/screenshot-kanban.png)

### 4.4.2 演示：添加和移动任务

![Add and Move Task Demo](path/to/your/demo.gif)
```

**重要提示:**
*   确保图片和 GIF 文件路径正确，最好使用相对路径（相对于 README.md 文件）。
*   考虑将图片和 GIF 文件放在一个 `assets` 或 `images` 文件夹中，与 README 文件一起提交到你的插件仓库。

## 4.7 配置选项

如果你的插件提供了可配置的选项，详细列出它们及其作用。

*   **选项名称:** 清晰列出每个配置项的名称。
*   **默认值:** 标明该选项的默认值。
*   **描述:** 解释该选项的作用，以及它会如何影响插件的行为。

**示例:**

```markdown
## 4.5 配置选项

你可以在 Obsidian 的 **设置 (Settings)** -> **插件 (Plugins)** -> **My Awesome Plugin** 中找到以下配置项：

*   **Default Column Order:**
    *   **默认值:** `["To Do", "In Progress", "Done"]`
    *   **描述:** 设置看板默认显示的列及其顺序。
*   **Enable Quick Add Shortcut:**
    *   **默认值:** `true`
    *   **描述:** 是否启用快速添加任务的快捷键。
*   **Theme:**
    *   **默认值:** `light`
    *   **描述:** 选择看板的显示主题（`light`, `dark`, `system`）。
```

## 4.8 已知问题与限制

诚实地列出插件目前存在的已知问题、bug 或功能限制。这有助于管理用户期望，并鼓励用户报告问题。

**示例:**

```markdown
## 4.6 已知问题与限制

*   **Markdown 渲染:** 复杂的 Markdown 语法在任务描述中可能存在显示问题。
*   **大型看板性能:** 当看板包含大量卡片时，可能会出现轻微的性能下降。
*   **同步问题:** 如果 Obsidian Vault 在多个设备间同步，请确保同步工具已完全完成同步后再使用插件，以避免潜在的数据冲突。
```

## 4.9 贡献指南

如果你希望接受社区的贡献（代码、文档、翻译等），提供一个简要的贡献指南。

**示例:**

```markdown
## 4.7 贡献指南

欢迎任何形式的贡献！如果你想提交 bug 报告、功能请求或 Pull Request，请遵循以下步骤：

1.  Fork 本项目。
2.  创建你的功能分支 (`git checkout -b feature/AmazingFeature`)。
3.  提交你的修改 (`git commit -m 'Add some AmazingFeature'`)。
4.  将你的修改推送到分支 (`git push origin feature/AmazingFeature`)。
5.  提交一个 Pull Request。
```

## 4.10 许可协议

明确你的插件使用的许可协议。

**示例:**

```markdown
## 4.8 许可协议

本项目采用 [MIT License](LICENSE) 许可。
```

**提示:**
*   在你的插件仓库根目录下创建一个名为 `LICENSE` 的文件，并将你选择的许可协议文本粘贴进去。
*   在 README 中提供一个指向该 `LICENSE` 文件的链接。

通过精心编写你的 README 文件，你将为你的 Obsidian 插件打下坚实的用户基础，并鼓励更多人发现和使用你的作品。

---

# 5. 插件图标的设计与使用

## 5.1 插件图标的作用

插件图标是用户与您的 Obsidian 插件互动时的第一印象。一个精心设计的图标能够：

*   **提升用户体验：** 帮助用户快速识别和定位您的插件，尤其是在插件列表或命令面板中。
*   **增强插件辨识度：** 使您的插件在众多插件中脱颖而出，更容易被用户记住。
*   **传达插件功能：** 通过视觉符号，间接传达插件的核心功能或特点，让用户一目了然。
*   **提升专业感：** 一个高质量的图标能给用户留下专业、可靠的印象，增加用户对插件的信任度。

## 5.2 图标设计原则

在设计插件图标时，应遵循以下原则：

*   **简洁明了：** 图标应易于理解，避免过多的细节和复杂的图形。
*   **独特性：** 避免与 Obsidian 核心图标或其他流行插件的图标过于相似，以免混淆。
*   **可辨识度：** 在不同大小和分辨率下，图标都应保持清晰可辨。
*   **相关性：** 图标设计应与其插件的功能或主题相关联。
*   **一致性：** 保持图标风格与 Obsidian 的整体设计风格相协调，但也要有自己的特色。
*   **尺寸适配：** Obsidian 使用不同尺寸的图标，需要准备不同分辨率的图标文件。

## 5.3 图标文件格式与尺寸要求

Obsidian 插件通常使用以下格式和尺寸的图标：

*   **文件格式：** 推荐使用 PNG 格式，它支持透明背景，并且在 Web 和桌面应用中都有良好的兼容性。SVG 格式也是一个不错的选择，因为它是矢量图，可以无限缩放而不失真，但 Obsidian 对 SVG 的支持可能不如 PNG 广泛。
*   **尺寸：** Obsidian 主要在以下几个地方使用插件图标：
    *   **插件列表：** 通常需要一个中等尺寸的图标。
    *   **命令面板：** 通常需要一个较小尺寸的图标。
    *   **侧边栏（如果插件添加了侧边栏图标）：** 可能需要一个较小尺寸的图标。

    虽然没有强制的固定尺寸，但以下尺寸是一个不错的起点，可以根据实际效果进行调整：

    *   **主图标（插件列表）：** 128x128 像素
    *   **小图标（命令面板、侧边栏）：** 32x32 像素 或 48x48 像素

    **建议：**
    - 准备一个高分辨率的图标（如 128x128 或 256x256），然后根据需要缩放到较小的尺寸。
    - 确保所有图标都使用相同的视觉风格。
    - 导出 PNG 文件时，务必开启透明背景。

## 5.4 图标文件的放置

您需要将准备好的图标文件放置在您的插件源代码目录的根目录下。

1.  **命名约定：** Obsidian 插件的图标文件通常被命名为 `icon.png`。
2.  **放置位置：** 将 `icon.png` 文件直接放在与您的 `manifest.json` 文件相同的目录下。

    ```
    your-obsidian-plugin/
    ├── manifest.json
    ├── main.js
    ├── styles.css
    └── icon.png  <-- 您的插件图标文件
    ```

    如果您在 `manifest.json` 中指定了不同的图标文件名，Obsidian 将会使用您指定的文件名。但 `icon.png` 是最常见的约定。

    ```json
    // manifest.json 示例
    {
      "id": "my-awesome-plugin",
      "name": "My Awesome Plugin",
      "version": "1.0.0",
      "minAppVersion": "0.12.0",
      "author": "Your Name",
      "authorUrl": "https://yourwebsite.com",
      "isDesktopOnly": false,
      // "icon": "my-custom-icon.png" // 如果使用自定义名称
    }
    ```

    **注意：** 如果您没有在 `manifest.json` 中指定 `icon` 字段，Obsidian 会尝试寻找并使用名为 `icon.png` 的文件。

## 5.5 图标的测试与调整

在完成图标的设计和放置后，务必在 Obsidian 中进行测试：

1.  **加载插件：** 确保您的插件已正确加载，并且没有因为图标文件问题导致错误。
2.  **查看插件列表：** 打开 Obsidian 的“设置” -> “社区插件”，在已安装的插件列表中查看您的插件图标是否显示正常。
3.  **测试命令面板：** 打开命令面板（Ctrl/Cmd + P），搜索您的插件名称，查看其在命令列表中的图标。
4.  **检查不同分辨率：** 如果您准备了不同尺寸的图标，请确保它们在 Obsidian 的不同界面元素中都显示得当。

如果图标显示不正确，请检查：

*   图标文件的格式和命名是否符合要求。
*   图标文件是否放置在插件目录的根目录下。
*   `manifest.json` 中的 `icon` 字段（如果存在）是否正确。
*   图标本身是否存在透明度问题或在小尺寸下难以辨认。

通过以上步骤，您可以为您的 Obsidian 插件设计并集成一个专业且用户友好的图标。

---

# 6. 版本控制与发布流程

## 6.1 版本控制的重要性

在软件开发过程中，版本控制系统（Version Control System, VCS）扮演着至关重要的角色。它能够记录文件的每一次修改，并允许开发者在需要时回滚到任何一个历史版本。对于 Obsidian 插件的开发而言，版本控制尤为重要，原因如下：

*   **追踪变更：** 详细记录代码的每一次改动，包括谁在何时做了什么修改。
*   **协作开发：** 允许多个开发者同时在一个项目上工作，并有效地合并各自的贡献。
*   **错误回滚：** 当引入新的 bug 或出现问题时，可以轻松地回滚到之前的稳定版本。
*   **分支管理：** 允许创建独立的分支来开发新功能或修复 bug，而不会影响主开发线。
*   **历史记录：** 保留完整的开发历史，方便追溯问题根源或理解代码演进过程。

## 6.2 Git：事实上的标准

Git 是目前最流行、最强大的分布式版本控制系统。它易于学习，且拥有庞大的社区支持。对于 Obsidian 插件的开发，强烈建议使用 Git 进行版本控制。

### 6.2.1 Git 的基本概念

*   **仓库 (Repository)：** 存储项目所有文件及其历史记录的地方。可以本地存在，也可以托管在远程服务器上。
*   **提交 (Commit)：** 将项目的一组变更保存到仓库中的一个快照。每次提交都有一个唯一的标识符（哈希值）和一条描述信息。
*   **分支 (Branch)：** 指向某个提交的可变指针。默认分支通常是 `main` 或 `master`。
*   **合并 (Merge)：** 将一个分支的变更整合到另一个分支的过程。
*   **远程仓库 (Remote Repository)：** 托管在互联网上的仓库，用于团队协作和备份。

### 6.2.2 Git 的基本操作

1.  **初始化仓库：**
    在你的插件项目根目录下打开终端，执行：
    ```bash
    git init
    ```

2.  **添加文件：**
    将需要纳入版本控制的文件添加到暂存区：
    ```bash
    git add .
    ```
    或者添加特定文件：
    ```bash
    git add <filename>
    ```

3.  **提交变更：**
    将暂存区的变更提交到本地仓库：
    ```bash
    git commit -m "feat: Initial commit of the plugin"
    ```
    `-m` 参数用于添加提交信息，建议使用清晰、简洁的描述。

4.  **查看状态：**
    查看当前仓库的状态，包括哪些文件被修改、哪些文件待提交：
    ```bash
    git status
    ```

5.  **查看历史记录：**
    查看所有提交的列表：
    ```bash
    git log
    ```

## 6.3 GitHub：插件发布与托管平台

GitHub 是一个基于 Web 的 Git 仓库托管服务。它是 Obsidian 社区插件发布和发现的主要平台。

### 6.3.1 创建 GitHub 仓库

1.  **注册/登录 GitHub：** 如果还没有账号，请先注册一个。
2.  **创建新仓库：** 点击页面右上角的 "+" 图标，选择 "New repository"。
3.  **填写仓库信息：**
    *   **Repository name：** 建议使用你的插件名称，例如 `obsidian-my-awesome-plugin`。
    *   **Description：** 简要描述你的插件功能。
    *   **Public/Private：** 选择 "Public"，以便社区用户访问和安装。
    *   **Initialize this repository with a README：** 可以勾选，稍后我们会更新 README。
4.  **创建仓库：** 点击 "Create repository"。

### 6.3.2 连接本地仓库与 GitHub 仓库

在你的本地插件项目目录中，执行以下命令，将本地仓库与 GitHub 仓库关联：

1.  **添加远程仓库：**
    ```bash
    git remote add origin <your-github-repo-url>
    ```
    `<your-github-repo-url>` 是你刚刚创建的 GitHub 仓库的 URL（例如 `https://github.com/yourusername/obsidian-my-awesome-plugin.git`）。

2.  **推送本地分支到远程：**
    ```bash
    git push -u origin main
    ```
    `-u` 选项用于设置上游分支，这样下次就可以直接使用 `git push`。

### 6.3.3 插件发布流程

#### 6.3.3.1 准备发布文件

在发布之前，确保你的插件项目包含了以下关键文件：

*   `manifest.json`：插件的元数据文件，包含名称、作者、版本号、描述等。
*   `main.js`：插件的主要 JavaScript 代码。
*   `styles.css` (可选)：插件的 CSS 样式文件。
*   `README.md`：插件的详细说明文档，包括安装、使用方法、功能介绍、截图等。
*   `LICENSE` (可选但推荐)：开源许可证文件，例如 MIT License。

#### 6.3.3.2 更新 `manifest.json`

每次发布新版本时，务必更新 `manifest.json` 中的 `version` 字段。版本号应遵循 [SemVer (Semantic Versioning)](https://semver.org/) 规范，例如 `1.0.0`、`1.0.1`、`1.1.0`。

```json
{
    "id": "your-plugin-id",
    "name": "Your Plugin Name",
    "version": "1.0.1", // <-- 确保此处版本号更新
    "minAppVersion": "0.15.0",
    "author": "Your Name",
    "authorUrl": "https://github.com/yourusername",
    "isDesktopOnly": false
}
```

#### 6.3.3.3 编写 `README.md`

一个详尽的 `README.md` 文件对于用户理解和使用你的插件至关重要。它应该至少包含：

*   **插件名称和简介**
*   **功能概述**
*   **截图或 GIF 演示**
*   **安装说明** (通常是通过 Obsidian 的社区插件列表)
*   **使用指南**
*   **支持与反馈渠道**
*   **开发路线图 (可选)**
*   **许可证信息**

#### 6.3.3.4 版本控制与提交

1.  **提交所有变更：**
    ```bash
    git add .
    git commit -m "chore: Prepare for v1.0.1 release"
    ```
    使用 `chore` 类型来标记为发布准备的提交。

2.  **推送代码到 GitHub：**
    ```bash
    git push origin main
    ```

#### 6.3.3.5 创建 Release (发布)

在 GitHub 仓库页面，找到 "Releases" 部分，点击 "Create a new release"。

1.  **Tag version：** 输入你 `manifest.json` 中更新的版本号，例如 `v1.0.1`。
2.  **Release title：** 填写版本号，例如 `v1.0.1`。
3.  **Describe this release：** 简要描述本次发布包含的更新内容。你可以复制 `README.md` 中关于此版本的更新日志。
4.  **Attach binaries：** 对于 Obsidian 插件，通常不需要上传二进制文件，因为用户是通过 Obsidian 社区插件列表直接安装的。
5.  **发布：** 点击 "Publish release"。

#### 6.3.3.6 提交到 Obsidian 社区插件列表

Obsidian 社区插件的发布是通过一个名为 `obsidian-releases` 的 GitHub 仓库来管理的。

1.  **Fork `obsidian-releases` 仓库：** 在 GitHub 上访问 `https://github.com/obsidianmd/obsidian-releases`，点击右上角的 "Fork" 按钮。
2.  **克隆你的 Forked 仓库：**
    ```bash
    git clone https://github.com/yourusername/obsidian-releases.git
    cd obsidian-releases
    ```
3.  **创建新分支：**
    ```bash
    git checkout -b add-your-plugin-name
    ```
    分支名应清晰描述其目的。
4.  **复制你的插件文件：**
    将你的插件项目的 `manifest.json` 和 `README.md` 文件复制到 `obsidian-releases` 仓库的 `community-plugins/` 目录下，并以你的插件 ID 命名文件夹。
    例如：
    ```
    obsidian-releases/
    └── community-plugins/
        └── your-plugin-id/
            ├── manifest.json
            └── README.md
    ```
    **注意：** 你只需要复制 `manifest.json` 和 `README.md`。`main.js` 等其他文件会被 Obsidian 社区插件列表的机器人从你原始的 GitHub 仓库（你自己的插件仓库）中拉取。

5.  **提交和推送：**
    ```bash
    git add .
    git commit -m "feat: Add your-plugin-name"
    git push origin add-your-plugin-name
    ```

6.  **创建 Pull Request (PR)：**
    在你的 Forked `obsidian-releases` 仓库页面，你会看到一个提示你推送新分支的通知。点击 "Compare & pull request"。
    *   **Base repository：** `obsidianmd/obsidian-releases`
    *   **Base：** `main`
    *   **Head repository：** `yourusername/obsidian-releases`
    *   **Compare：** `add-your-plugin-name`
    填写 PR 的标题和描述，然后点击 "Create pull request"。

7.  **等待审核：** Obsidian 团队会审核你的 PR。如果一切符合要求，他们会合并你的 PR，你的插件就会出现在 Obsidian 的社区插件列表中。

#### 6.3.3.7 更新插件

当你有新版本需要发布时，重复以下步骤：

1.  在你自己的插件仓库中：
    *   更新 `manifest.json` 中的 `version`。
    *   添加并提交所有代码变更。
    *   将代码 `git push` 到你的插件仓库。
    *   在你的插件仓库中创建一个新的 GitHub Release（例如 `v1.0.2`）。
2.  在你 Forked 的 `obsidian-releases` 仓库中：
    *   切换到你的插件所在的目录（例如 `community-plugins/your-plugin-id/`）。
    *   拉取最新的 `main` 分支。
    *   更新 `manifest.json` 和 `README.md` 文件，与你刚刚在自己仓库中发布的版本保持一致。
    *   提交这些更新 (`git add .`, `git commit -m "chore: Update to v1.0.2"`)。
    *   推送这些更新到你的 Forked 仓库 (`git push`)。
    *   在 `obsidian-releases` 仓库的页面上，创建一个新的 PR，将更新后的文件合并到 `main` 分支。

**重要提示：** Obsidian 社区插件列表会定期扫描你的插件仓库，并根据 GitHub Release 的 `tag version` 来检测新版本。因此，每次发布新版本时，务必在你的插件仓库创建一个对应的 GitHub Release，并确保 `manifest.json` 的 `version` 与 Release Tag 匹配。

---

# 7. 提交到 Obsidian 社区插件列表

将你的 Obsidian 插件发布到官方社区插件列表是让更多用户发现和使用它的关键一步。本章将手把手指导你完成整个提交流程，包括注册、填写信息以及等待审核。

## 7.1 准备工作

在正式提交之前，请确保你的插件已经满足以下条件：

*   **功能完善且稳定：** 插件应已完成核心功能开发，并且经过充分的测试，能够稳定运行。
*   **清晰的文档：** 提供详细的 `README.md` 文件，说明插件的功能、安装方法、使用指南、配置选项以及任何注意事项。
*   **许可证：** 确保你的插件使用了合适的开源许可证（例如 MIT, GPLv3 等）。
*   **GitHub 仓库：** 你的插件代码需要托管在一个公开的 GitHub 仓库中。

## 7.2 注册 GitHub 账号

如果你还没有 GitHub 账号，请先访问 [GitHub 官网](https://github.com/) 进行注册。注册过程简单，只需提供邮箱、用户名和密码即可。

## 7.3 创建插件仓库

确保你的插件代码已经存在于一个 GitHub 仓库中。如果还没有，请按照 GitHub 的指引创建一个新的仓库，并将你的插件代码上传。

## 7.4 提交到 Obsidian 社区插件列表

Obsidian 社区插件列表的提交是通过 GitHub Pull Request (PR) 的方式进行的。

### 7.4.1 Fork 插件列表仓库

1.  访问 Obsidian 社区插件列表的 GitHub 仓库：[https://github.com/obsidianmd/obsidian-releases](https://github.com/obsidianmd/obsidian-releases)
2.  点击右上角的 "Fork" 按钮，将该仓库 fork 到你自己的 GitHub 账号下。

### 7.4.2 克隆你的 Forked 仓库

将你 fork 好的 `obsidian-releases` 仓库克隆到本地：

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/obsidian-releases.git
cd obsidian-releases
```

替换 `YOUR_GITHUB_USERNAME` 为你的 GitHub 用户名。

### 7.4.3 添加你的插件信息

1.  在 `obsidian-releases` 仓库的根目录下，找到 `community-plugins.json` 文件。
2.  复制你插件的 `manifest.json` 文件到你克隆的 `obsidian-releases` 仓库的根目录下。
3.  打开 `community-plugins.json` 文件，并按照 JSON 格式在其中添加你的插件信息。确保你的插件信息是唯一的，并且字段填写正确。

    示例 `community-plugins.json` 片段：

    ```json
    [
      {
        "id": "your-plugin-id",
        "name": "Your Plugin Name",
        "author": "Your Name",
        "author_url": "https://yourwebsite.com",
        "description": "A brief description of your plugin.",
        "source": "https://github.com/your_github_username/your-plugin-repo",
        "version": "1.0.0",
        "minAppVersion": "0.16.0",
        "isBeta": false,
        "funding_url": "https://ko-fi.com/yourname"
      }
      // ... other plugins
    ]
    ```

    **重要字段说明：**

    *   `id`: 插件的唯一标识符，通常是你的插件目录名或一个简短的字符串。
    *   `name`: 插件的完整名称。
    *   `author`: 插件的作者名称。
    *   `author_url`: 作者的个人网站或社交媒体链接（可选）。
    *   `description`: 插件的简要描述，会显示在社区插件列表中。
    *   `source`: 插件在 GitHub 上的源码仓库 URL。
    *   `version`: 当前插件的版本号。
    *   `minAppVersion`: 插件支持的最低 Obsidian 版本。
    *   `isBeta`: 是否为 beta 版本（`true` 或 `false`）。
    *   `funding_url`: 捐赠链接（可选），例如 Ko-fi、Buy Me A Coffee 等。

### 7.4.4 提交你的更改

1.  将你的更改添加到 Git 暂存区：

    ```bash
    git add .
    ```

2.  提交你的更改，并附带一个清晰的提交信息：

    ```bash
    git commit -m "Add your-plugin-id"
    ```

    将 `your-plugin-id` 替换为你实际的插件 ID。

3.  将你的本地分支推送到你的 GitHub Fork：

    ```bash
    git push origin main
    ```

    （如果你的主分支不是 `main`，请使用你的主分支名称）

### 7.4.5 创建 Pull Request (PR)

1.  回到你 fork 的 `obsidian-releases` 仓库页面。
2.  GitHub 会检测到你推送了新的提交，并显示一个 "Compare & pull request" 按钮。点击它。
3.  在创建 PR 的页面，确保：
    *   "base repository" 是 `obsidianmd/obsidian-releases`。
    *   "base" 分支是 `master` (或者 `main`，取决于 `obsidianmd/obsidian-releases` 的主分支)。
    *   "head repository" 是你的 GitHub 用户名下的 `obsidian-releases`。
    *   "compare" 分支是你刚刚推送的那个分支。
4.  填写 PR 的标题和描述。标题建议包含你的插件 ID，例如 "feat: Add your-plugin-id"。在描述中，可以简要说明你的插件及其主要功能。
5.  点击 "Create pull request"。

## 7.5 等待审核

一旦你提交了 PR，Obsidian 社区插件的维护者会对其进行审查。这个过程可能需要一些时间，具体取决于维护者的响应速度和 PR 的数量。

*   **审查过程：** 维护者会检查你的 `manifest.json` 是否符合规范，你的 `README.md` 是否清晰，以及你的插件代码是否遵循了 Obsidian 的插件开发指南。
*   **沟通：** 如果有任何问题或需要修改的地方，维护者会在 PR 评论区与你沟通。请及时关注并回复。
*   **合并：** 一旦你的 PR 通过审查，它就会被合并到 `obsidianmd/obsidian-releases` 仓库中。
*   **发布：** 合并后，你的插件就会出现在 Obsidian 的社区插件列表中，用户可以通过 Obsidian 应用直接搜索和安装。

## 7.6 更新你的插件

当你的插件有新版本时，更新流程与首次提交类似：

1.  在你的插件 GitHub 仓库中，更新 `manifest.json` 中的 `version` 字段。
2.  在你本地的 `obsidian-releases` Fork 仓库中，也更新 `community-plugins.json` 中对应插件条目的 `version` 字段。
3.  执行 `git add .`, `git commit -m "Update your-plugin-id to vX.Y.Z"`, `git push origin main`。
4.  创建一个新的 Pull Request，描述你这次更新的内容。

## 7.7 常见问题与注意事项

*   **`manifest.json` 格式错误：** 这是最常见的错误之一。请仔细检查 JSON 语法，确保所有字段都正确填写。
*   **`id` 重复：** 确保你的插件 ID 在 `community-plugins.json` 中是唯一的。
*   **`README.md` 不清晰：** 维护者会要求提供清晰的使用说明和功能介绍。
*   **违反社区指南：** 确保你的插件没有包含恶意代码，并且遵循了 Obsidian 的社区指南。
*   **耐心等待：** 审核需要时间，请保持耐心。

通过以上步骤，你就可以成功将你的 Obsidian 插件提交到官方社区插件列表，让更多 Obsidian 用户受益于你的创造！

---

# 8. 插件的更新与维护

## 8.1 版本迭代与发布

插件的生命周期不仅仅是首次发布，持续的更新和维护是保持插件活跃度和用户满意度的关键。本节将详细介绍如何进行版本迭代和发布新版本。

### 8.1.1 版本号的规范

遵循语义化版本控制（Semantic Versioning, SemVer）是推荐的做法。SemVer 使用 `MAJOR.MINOR.PATCH` 的格式：

*   **MAJOR**: 当你做了不兼容的 API 更改时。
*   **MINOR**: 当你以向后兼容的方式增加了功能时。
*   **PATCH**: 当你以向后兼容的方式修复了 bug 时。

例如：`1.0.0` -> `1.0.1` (修复 bug)，`1.0.1` -> `1.1.0` (增加新功能)，`1.1.0` -> `2.0.0` (不兼容更改)。

### 8.1.2 更新 `manifest.json`

每次发布新版本时，都需要更新插件的 `manifest.json` 文件中的 `version` 字段。

```json
{
  "id": "your-plugin-id",
  "name": "Your Plugin Name",
  "version": "1.1.0", // <-- 更新此处
  "minAppVersion": "0.15.0",
  "author": "Your Name",
  "description": "A brief description of your plugin."
}
```

### 8.1.3 Git 标签（Tag）

使用 Git 的标签功能来标记特定的版本发布。这有助于回溯历史版本，并在需要时进行回滚。

```bash
# 假设你已经提交了最新的更改
git tag v1.1.0
git push origin v1.1.0
```

### 8.1.4 构建与打包

确保在发布前，你已经根据最新的代码进行了构建（如果你的插件需要构建步骤）。

*   **TypeScript 插件**: 运行 `npm run build` 或 `yarn build`。
*   **JavaScript 插件**: 通常不需要额外的构建步骤，但请确保代码是干净且符合预期的。

### 8.1.5 准备发布说明（Release Notes）

在 GitHub Release 或 Obsidian 插件库中，发布说明至关重要。它会告诉用户你的新版本带来了什么。

1.  **明确的标题**: 例如 "v1.1.0 - 新功能与 bug 修复"。
2.  **新功能列表**: 使用列表清晰列出新增的功能，可以简要说明其用途。
3.  **Bug 修复列表**: 列出本次修复的 bug。
4.  **兼容性说明**: 如果有任何重要的兼容性变化，请在此说明。
5.  **致谢**: 如果有贡献者，可以提及。

**示例 Release Notes (Markdown 格式):**

```markdown
## v1.1.0 - 🚀 新功能与 🐞 Bug 修复

### ✨ 新增功能
- **支持自定义颜色主题**: 现在可以在插件设置中选择不同的颜色主题。
- **快捷键支持**: 为常用操作添加了可自定义的快捷键。

### 🐛 Bug 修复
- 修复了在特定 Markdown 语法下渲染异常的问题。
- 解决了插件在 Obsidian 0.16.x 版本上可能出现的启动延迟。

### ⚠️ 注意事项
- 此版本需要 Obsidian 0.15.0 或更高版本。
```

### 8.1.6 在 GitHub 上发布 Release。

1.  前往你的插件 GitHub 仓库。
2.  点击 "Releases" 选项卡。
3.  点击 "Draft a new release"。
4.  在 "Tag version" 处，选择或输入你创建的 Git 标签（如 `v1.1.0`）。
5.  在 "Release title" 处填写版本号和简要描述。
6.  在 "Describe this release" 区域粘贴你的 Release Notes。
7.  **上传构建产物**:
    *   如果你的插件发布时需要包含构建后的文件（例如 `main.js`, `styles.css` 等），请在此处上传。通常，你会在 `dist` 或 `build` 文件夹中找到这些文件。
    *   **注意**: Obsidian 插件库通常会自动从你的 `main` 分支拉取最新的 `main.js` 和 `styles.css` 文件进行发布，除非你配置了其他发布流程。对于大多数情况，你只需要确保 `main.js` 和 `styles.css` 在 `main` 分支是最新的。
8.  点击 "Publish release"。

### 8.1.7 同步到 Obsidian 插件列表

Obsidian 社区插件列表通常会通过 Webhook 或定期扫描你的 GitHub 仓库来自动更新。发布 GitHub Release 后，通常需要几分钟到几小时不等，新版本就会出现在 Obsidian 的社区插件列表中。

## 8.2 社区反馈与 Bug 报告处理

积极响应社区反馈和处理 Bug 报告是维护插件健康的关键环节。

### 8.2.1 监控反馈渠道

*   **GitHub Issues**: 这是最主要的 Bug 报告和功能请求渠道。定期查看你的仓库的 "Issues" 选项卡。
*   **Discord/Forum**: 如果你在 Obsidian 的 Discord 服务器或官方论坛上有插件讨论频道，请留意那里的用户反馈。
*   **Obsidian 插件列表评论区**: 虽然功能有限，但有时用户会在那里留言。

### 8.2.2 响应与分类

1.  **及时回复**: 即使不能立即解决，也要让用户知道你看到了他们的反馈。一个简单的 "感谢反馈，我正在查看" 就能极大地提升用户体验。
2.  **提问以获取更多信息**: 如果 Bug 报告不够清晰，礼貌地询问用户提供更多细节，例如：
    *   Obsidian 版本号。
    *   插件版本号。
    *   复现 Bug 的具体步骤。
    *   相关的 Markdown 内容或配置。
    *   是否有其他插件冲突（可以建议禁用其他插件后测试）。
    *   截图或录屏。
3.  **分类 Issues**:
    *   **Bug**: 标记为 "bug" 标签。
    *   **Feature Request**: 标记为 "enhancement" 或 "feature request" 标签。
    *   **Question**: 标记为 "question" 标签。
    *   **Good First Issue/Help Wanted**: 如果是社区可以参与的，可以标记这些标签。

### 8.2.3 Bug 修复流程

1.  **复现 Bug**: 尽最大努力在本地复现用户报告的 Bug。
2.  **定位问题**: 调试代码，找出 Bug 的根本原因。
3.  **编写修复代码**: 提交一个包含 Bug 修复的 Git commit。
4.  **编写测试 (可选但推荐)**: 为修复的 Bug 编写自动化测试，防止将来再次出现。
5.  **发布新版本**: 按照 8.1 节的流程，发布包含 Bug 修复的新版本。
6.  **关闭 Issue**: 在发布新版本后，在 GitHub Issue 中告知用户，并关闭相应的 Issue。

### 8.2.4 处理功能请求

*   **评估可行性**: 考虑功能请求是否符合插件的定位和你的开发能力。
*   **社区讨论**: 对于较大的功能，可以在 GitHub Issue 或社区论坛发起讨论，收集其他用户的意见。
*   **规划到未来版本**: 将被采纳的功能请求加入到你的开发路线图中，并分配到未来的版本迭代中。
*   **告知用户**: 如果决定采纳某个功能请求，告知提出请求的用户，让他们知道其建议被重视。

### 8.2.5 保持耐心与专业

用户反馈是宝贵的资源，即使有时会遇到不友好的评论，也要保持耐心和专业。积极的互动能够建立一个健康、活跃的插件生态。

## 8.3 插件卸载与迁移

虽然不是直接的发布流程，但考虑用户可能卸载或迁移插件也是维护的一部分。

### 8.3.1 数据清理

如果你的插件会生成或存储用户数据（例如，在 `.obsidian/plugins/your-plugin-id/data.json` 中），你需要考虑用户卸载插件时是否应该保留这些数据。

*   **默认保留**: Obsidian 默认不会删除插件生成的数据文件。
*   **提供选项**: 可以在插件设置中提供一个选项，允许用户在卸载插件时选择是否删除相关数据。
*   **明确说明**: 在插件文档中说明插件会存储哪些数据，以及卸载时的数据处理方式。

### 8.3.2 迁移旧版本数据

当进行重大版本更新，特别是当数据结构发生变化时，你需要考虑如何处理旧版本的数据。

*   **向后兼容**: 尽量保持数据格式的向后兼容。
*   **迁移脚本**: 如果无法避免不兼容，可以在新版本插件加载时，执行一个数据迁移脚本，将旧格式数据转换为新格式。
*   **用户提示**: 在 Release Notes 和插件设置中，明确告知用户数据迁移的必要性，并提供操作指导。

**示例：数据迁移时的提示信息**

```typescript
// 在插件的 onload() 函数中，检查并处理数据迁移
async onload() {
  // ... 其他初始化代码

  // 检查旧数据版本
  if (this.settings.version < 1.1) {
    // 执行数据迁移逻辑
    await this.migrateSettingsToV1_1();
    this.settings.version = 1.1; // 更新版本号
    await this.saveSettings();
    new Notice("插件数据已成功迁移到新版本格式。");
  }

  // ... 剩余的 onload() 代码
}

async migrateSettingsToV1_1() {
  // 示例：将旧的 'oldKey' 迁移为新的 'newKey'
  if (this.settings.oldKey) {
    this.settings.newKey = this.settings.oldKey;
    delete this.settings.oldKey;
  }
  // ... 其他迁移逻辑
}
```

---

# 9. 社区互动与推广

发布插件只是成功的一半，另一半在于如何让 Obsidian 用户知道你的插件，并与社区建立良好的互动关系。本章将提供一些关于如何与 Obsidian 用户社区互动、收集反馈、推广插件的建议。

## 9.1 积极参与 Obsidian 社区

融入 Obsidian 社区是推广你的插件并获取宝贵反馈的关键。

### 9.1.1 了解社区生态

*   **Obsidian 官方论坛 (Forum):** 这是最活跃的社区之一，用户会在这里讨论插件、分享使用技巧、提出问题。积极浏览论坛，了解大家的需求和痛点。
*   **Obsidian Discord 服务器:** Discord 是一个实时的交流平台，你可以在这里找到专门的插件开发频道，与其他开发者交流，解答用户疑问。
*   **Reddit (r/ObsidianMD):** Reddit 社区也有很多 Obsidian 用户，虽然不如官方论坛活跃，但也是一个不错的交流和推广渠道。
*   **GitHub:** 插件的仓库通常托管在 GitHub 上，关注你插件的用户以及其他开发者可能会在 issue 中提出问题或建议。

### 9.1.2 提供帮助与分享经验

*   **解答用户问题:** 当你在论坛、Discord 或 GitHub 上看到与你的插件相关的问题时，及时、耐心地解答。即使是与你插件不直接相关的问题，如果你能提供帮助，也能树立良好的开发者形象。
*   **分享开发经验:** 在论坛或博客上分享你的插件开发过程、遇到的挑战和解决方案，这不仅能帮助其他开发者，也能吸引更多用户关注你的工作。

## 9.2 收集和处理用户反馈

用户反馈是改进插件、增加用户粘性的宝贵财富。

### 9.2.1 建立反馈渠道

*   **GitHub Issues:** 这是最直接、最规范的反馈渠道。鼓励用户在 GitHub 的 "Issues" 页面报告 bug 或提出功能请求。
    *   **Issue 模板:** 考虑为 bug 报告和功能请求创建模板，引导用户提供必要的信息，例如插件版本、Obsidian 版本、复现步骤等。
*   **Discord 频道:** 在你的 Discord 服务器（如果创建了）或 Obsidian 的官方 Discord 插件频道中，可以设置专门的反馈或建议频道。
*   **论坛帖子:** 在 Obsidian 官方论坛的插件讨论区，用户可以直接回复你的帖子进行反馈。

### 9.2.2 有效处理反馈

*   **及时响应:** 尽量及时回复用户的反馈，即使只是告知你已收到并正在处理。
*   **分类和优先级:** 对收集到的反馈进行分类（bug、功能请求、一般建议）并确定优先级。
*   **公开透明:** 对于重要的 bug 或功能实现，可以在 GitHub Issues 中公开讨论，让用户了解开发进度。
*   **感谢用户:** 无论反馈是积极还是消极，都要感谢用户花时间提供宝贵的意见。

## 9.3 推广你的插件

让更多 Obsidian 用户了解并使用你的插件，需要一些主动的推广策略。

### 9.3.1 优化插件信息

*   **清晰的 README:** 确保你的 GitHub 仓库 README 文件内容详实、易于理解。
    *   **插件名称和简介:** 突出插件的核心功能。
    *   **截图和 GIF:** 用视觉化的方式展示插件的使用效果。
    *   **功能列表:** 详细列出插件提供的所有功能。
    *   **安装和配置指南:** 提供清晰的安装步骤和必要的配置说明。
    *   **使用示例:** 提供一些实际使用场景的示例。
    *   **已知问题和待办事项:** 公开透明地列出。
    *   **如何贡献:** 鼓励用户参与开发或提供反馈。
*   **社区插件列表:** 确保你的插件在 Obsidian 社区插件列表中有清晰的描述、标签和链接。

### 9.3.2 主动分享和推广

*   **在 Obsidian 官方论坛发帖:**
    *   **发布公告:** 当你的插件发布新版本或有重大更新时，在“插件发布”或“插件讨论”版块发布公告。
    *   **参与讨论:** 在其他与你的插件功能相关的帖子下，适当地提及你的插件，但要避免过度推销。
*   **在 Discord 分享:** 在相关的 Discord 频道（如 #plugins、#show-and-tell）分享你的插件，并附上清晰的介绍和链接。
*   **撰写博客文章或教程:**
    *   **深度解析:** 撰写关于你插件某个特定功能或使用场景的深度博客文章。
    *   **教程指南:** 制作视频教程或图文教程，演示如何使用你的插件解决实际问题。
*   **与其他插件作者合作:**
    *   **交叉推广:** 如果你的插件与某个流行插件的功能互补，可以考虑与该插件的作者联系，进行交叉推广。
    *   **集成:** 探索与其他插件进行集成的可能性，为用户提供更强大的工作流。
*   **利用社交媒体:**
    *   **Twitter:** 在 Twitter 上发布关于你插件的更新、使用技巧和用户反馈。使用相关的 #ObsidianMD #ObsidianPlugin 等标签。
    *   **其他平台:** 根据你的目标用户群体，选择合适的社交媒体平台进行推广。

### 9.3.3 维护和迭代

*   **持续更新:** 根据用户反馈和 Obsidian 的更新，定期发布插件更新，修复 bug，添加新功能。
*   **版本控制:** 保持良好的版本控制，让用户清楚了解每次更新的内容。
*   **保持积极性:** 即使遇到困难，也要保持积极的态度，持续为社区贡献价值。

---

# 10. 高级发布技巧与注意事项

## 10.1 国际化支持 (i18n)

为您的 Obsidian 插件添加国际化支持，可以极大地扩展其用户群体。这意味着您的插件界面和提示信息能够根据用户的 Obsidian 语言设置自动切换。

### 10.1.1 准备语言文件

1.  **创建语言目录**: 在您的插件项目根目录下创建一个 `lang` 文件夹。
2.  **创建语言文件**: 在 `lang` 文件夹内，为每种支持的语言创建一个 JSON 文件。文件名应遵循 ISO 639-1 语言代码（例如，`en.json` 代表英语，`zh-CN.json` 代表简体中文）。
3.  **定义翻译键值对**: 在每个语言文件中，使用键值对来存储翻译文本。键应该是您在代码中使用的唯一标识符，值则是对应语言的翻译。

    **示例：`lang/en.json`**

    ```json
    {
      "settings.title": "My Plugin Settings",
      "settings.enableFeature": "Enable Awesome Feature",
      "notifications.success": "Operation completed successfully!"
    }
    ```

    **示例：`lang/zh-CN.json`**

    ```json
    {
      "settings.title": "我的插件设置",
      "settings.enableFeature": "启用炫酷功能",
      "notifications.success": "操作成功完成！"
    }
    ```

### 10.1.2 在插件代码中使用翻译

1.  **导入 `moment` 库**: Obsidian 插件开发通常会用到 `moment` 库来处理国际化。您需要在 `manifest.json` 中声明对它的依赖。

    ```json
    {
      // ... other properties
      "dependencies": {
        "moment": "latest"
      }
      // ...
    }
    ```

2.  **加载语言文件**: 在您的插件主类中，利用 `moment` 库加载正确的语言文件。Obsidian 会自动检测用户的语言偏好。

    ```typescript
    import { Plugin } from 'obsidian';
    import moment from 'moment';

    export default class MyPlugin extends Plugin {
      async onload() {
        // ...
        await this.loadLanguages();
        // ...
      }

      async loadLanguages() {
        // 加载英语作为默认语言
        moment.locale('en');
        await moment.loadLocale('en', require('../lang/en.json'));

        // 尝试加载用户系统的语言
        const userLocale = moment.locale(); // 获取 Obsidian 的当前语言环境
        try {
          await moment.loadLocale(userLocale, require(`../lang/${userLocale}.json`));
          moment.locale(userLocale);
        } catch (error) {
          console.warn(`Could not load locale ${userLocale}, falling back to en.`);
          moment.locale('en'); // 回退到英语
        }
      }

      // ...
    }
    ```

3.  **使用翻译**: 在插件的 UI 元素或通知消息中使用 `moment` 的翻译功能。

    ```typescript
    // 在设置界面中
    const title = moment("settings.title").format("LL"); // 假设您在某个地方需要格式化，这里仅为示例
    // 更常见的是直接使用
    const enableFeatureText = moment("settings.enableFeature").format();

    // 在通知中
    this.registerEvent(this.app.workspace.on('file-open', () => {
      this.app.notifier.notify({
        message: moment("notifications.success").format()
      });
    }));
    ```

## 10.2 性能优化建议

虽然 Obsidian 插件的性能通常不是瓶颈，但对于复杂的插件或处理大量数据的插件，优化是必要的。

### 10.2.1 减少不必要的渲染

-   **节流 (Throttling)** 和 **防抖 (Debouncing)**: 对于频繁触发的事件（如文本编辑、滚动），使用节流或防抖来限制函数执行的频率，避免不必要的计算和 DOM 更新。
-   **虚拟化列表**: 如果您的插件需要显示大量列表项，考虑使用虚拟化技术，只渲染用户可见的部分，显著提高滚动性能。

### 10.2.2 优化数据处理

-   **避免在主线程执行耗时操作**: 对于大量数据加载、解析或计算，考虑使用 Web Workers 将其移到后台线程，避免阻塞 UI。
-   **惰性加载**: 只在需要时加载数据，而不是在插件启动时一次性加载所有数据。
-   **高效的数据结构**: 选择适合您数据操作模式的高效数据结构。

### 10.2.3 减少插件加载时间

-   **按需加载模块**: 如果您的插件有多个独立的功能模块，可以考虑在用户需要时才加载相应的模块，而不是在插件启动时加载所有代码。
-   **代码分割 (Code Splitting)**: 对于大型插件，可以使用打包工具（如 Webpack）进行代码分割，将代码分成更小的块，按需加载。

## 10.3 发布过程中的常见问题及解决方案

### 10.3.1 插件审核未通过

**常见原因**:

-   **违反社区指南**: 例如，包含恶意代码、侵犯隐私、宣传非法内容等。
-   **功能不稳定或有严重 Bug**: 导致用户体验差或数据丢失。
-   **不遵循插件开发规范**: 例如，代码结构混乱、命名不规范。
-   **未提供清晰的文档和描述**: 用户不清楚插件功能和使用方法。
-   **使用未授权的第三方库**: 存在潜在的法律或安全风险。

**解决方案**:

-   **仔细阅读并遵守 Obsidian 插件社区指南**: 这是最重要的。
-   **充分测试您的插件**: 在发布前进行多轮测试，确保其稳定性和可用性。
-   **提供详细的 README 文件**: 清晰描述插件功能、安装方法、使用说明、配置选项以及已知问题。
-   **检查所有依赖项**: 确保使用的第三方库是开源且允许商用的，或者您已获得授权。
-   **响应审核员的反馈**: 如果审核未通过，仔细阅读审核意见，并根据反馈进行修改。

### 10.3.2 插件更新后出现兼容性问题

**常见原因**:

-   **Obsidian Core API 变更**: Obsidian 本身会更新，有时会改变其内部 API，导致依赖这些 API 的插件出现问题。
-   **插件依赖的第三方库更新**: 第三方库的更新也可能引入不兼容的更改。
-   **版本管理不当**: 插件版本号不一致，或者没有明确声明对 Obsidian 版本的兼容性。

**解决方案**:

-   **关注 Obsidian 的更新日志**: 在 Obsidian 发布新版本时，留意其 API 变更说明，并及时更新您的插件。
-   **测试不同版本的 Obsidian**: 尽量在发布新插件版本前，在不同版本的 Obsidian 上进行兼容性测试。
-   **声明插件的 Obsidian 版本兼容性**: 在 `manifest.json` 中明确指定插件支持的 Obsidian 版本范围。

    ```json
    {
      // ...
      "minAppVersion": "0.15.0" // 示例：指定最低 Obsidian 版本
      // ...
    }
    ```

-   **使用 Obsidian 提供的抽象层**: 如果可能，尽量使用 Obsidian 提供的更高层次的 API，这些 API 通常比底层 API 更稳定。
-   **为用户提供回滚选项**: 在插件更新日志中说明如何回滚到之前的版本（虽然 Obsidian 社区插件管理器不直接支持回滚，但用户可以手动操作）。

### 10.3.3 用户反馈 Bug 难以复现

**常见原因**:

-   **用户环境差异**: 用户使用的操作系统、Obsidian 版本、其他插件、主题等都可能影响插件行为。
-   **数据问题**: 用户特定的笔记内容或结构可能触发 Bug。
-   **网络或本地存储问题**: 某些操作依赖于网络或本地存储，可能因这些因素导致失败。

**解决方案**:

-   **提供详细的 Bug 报告模板**: 要求用户提供尽可能多的信息，包括：
    -   Obsidian 版本
    -   插件版本
    -   操作系统
    -   复现步骤（越详细越好）
    -   重现该问题的笔记文件（如果可能）
    -   其他可能相关的插件列表
    -   控制台错误信息（按 `Ctrl+Shift+I` 打开开发者工具查看 Console 标签）
-   **使用日志记录**: 在插件中加入详细的日志记录，帮助您在用户环境中追踪问题。
-   **远程调试**: 如果可能，考虑使用远程调试工具（尽管在 Obsidian 插件中实现起来较复杂）。
-   **逐步排查**: 根据用户提供的信息，尝试在自己的环境中模拟用户的情况，逐步缩小问题范围。
-   **发布 Beta 版本**: 对于不确定的 Bug，可以先将修正版本发布为 Beta 版本，让部分用户测试。

### 10.3.4 插件被用户误解或滥用

**常见原因**:

-   **文档不清晰**: 用户不理解插件的真正用途或限制。
-   **功能设计不直观**: 用户容易错误地使用某些功能。
-   **用户期望过高**: 用户期望插件能够完成其能力范围之外的任务。

**解决方案**:

-   **完善和更新文档**: 持续改进 README 文件，增加 FAQ 部分，解答常见疑问。
-   **优化用户界面**: 使插件的 UI 更直观易懂，减少误操作的可能性。
-   **添加警告和提示**: 对于可能导致数据丢失或产生意料之外结果的操作，添加明确的警告信息。
-   **积极与用户沟通**: 回复用户的问题和反馈，耐心解释插件的功能和局限性。
-   **设定合理的预期**: 在插件描述和文档中，明确说明插件的能力范围，避免用户产生不切实际的期望。