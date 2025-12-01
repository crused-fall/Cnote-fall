[Skip to content](https://chatgpt.com/c/69293eb3-2f20-8327-bd90-69876811942b#main)

##### You said:

给我一个全面的obsidian的properties templater

###### ChatGPT said:

下面给出一个**可直接在 Obsidian 中使用的、全面的 Properties 模板**，并附带 **Templater 自动填充脚本**。覆盖：元数据管理、任务管理、学术笔记、项目笔记、文献笔记、每日笔记等常见使用场景。

---

# 一、通用 Properties 模板（Frontmatter）

`--- title: <% tp.file.title %> created: <% tp.file.creation_date("YYYY-MM-DD HH:mm") %> updated: <% tp.date.now("YYYY-MM-DD HH:mm") %> tags: [] aliases: [] category:  status:  priority:  due:  related: [] description:  ---`

用途说明：

- `title`：自动填为当前文件名
    
- `created / updated`：自动插入时间
    
- `tags / aliases / category`：用于分类
    
- `status`：如 `idea / drafting / done`
    
- `priority`：如 `high / medium / low`
    
- `related`：链接其他笔记
    
- `description`：笔记摘要
    

---

# 二、学术类笔记增强版

`--- title: <% tp.file.title %> created: <% tp.file.creation_date("YYYY-MM-DD") %> updated: <% tp.date.now("YYYY-MM-DD HH:mm") %> topic:  field:  keywords: [] source:  authors: [] difficulty:  prerequisite: [] related: [] summary:  ---`

适用领域：数学、物理、机器学习、笔记整理。

字段解释：

- `topic`：例如 “Levi-Civita 张量”
    
- `field`：如 “微分几何 / 张量分析”
    
- `keywords`：方便搜索
    
- `prerequisite`：相关基础概念
    
- `difficulty`：1–5
    

---

# 三、项目笔记模板（Project Note）

`--- title: <% tp.file.title %> created: <% tp.file.creation_date("YYYY-MM-DD") %> updated: <% tp.date.now("YYYY-MM-DD") %> project-status: planning project-owner:  deadlines:  deliverables: [] milestones: [] tasks: [] related-files: [] summary:  ---`

---

# 四、文献阅读笔记模板（Paper Note）

`--- title: <% tp.file.title %> paper-title:  authors: [] year:  venue:  doi:  url:  created: <% tp.file.creation_date("YYYY-MM-DD") %> updated: <% tp.date.now("YYYY-MM-DD") %> keywords: [] status: unread summary:  ---`

---

# 五、每日笔记 Daily Note 模板

`--- date: <% tp.date.now("YYYY-MM-DD") %> weekday: <% tp.date.now("dddd") %> mood:  weather:  tasks: [] goals: [] ---`

---

# 六、任务/待办 (Task Note)

`--- task-title: <% tp.file.title %> created: <% tp.file.creation_date("YYYY-MM-DD") %> status: todo priority: medium due:  context:  related: [] ---`

---

# 七、适用于 YAML 的超级整合模板（All-in-One）

适合 MOC / Dashboard / 大型知识库使用。

`--- title: <% tp.file.title %> aliases: [] tags: [] created: <% tp.file.creation_date("YYYY-MM-DD HH:mm") %> updated: <% tp.date.now("YYYY-MM-DD HH:mm") %>  # 分类 type: note category:  topic:  field:   # 描述 description:  keywords: []  # 文件关系 related: [] parents: [] children: []  # 项目与任务 status:  priority:  due:  tasks: []  # 文献类 source:  authors: [] year:   # 额外元数据 custom1:  custom2:  ---`

---

# 八、Templater 自动更新 updated 字段（可选）

自动在保存时更新 `updated`：

Obsidian → Settings → Templater → **Trigger Templater on file change** → 添加：

`<% tp.file.update_frontmatter("updated", tp.date.now("YYYY-MM-DD HH:mm")) %>`

---

# 如果你需要，我可以继续为你生成：

- 对你目前 Obsidian 结构的**专用 properties 模板**
    
- 强化你的数学/科研专用 metadata schema
    
- 自动生成 MOC 的 Templater 脚本
    
- 给出一套“科研笔记系统（数学家版本）”的完整模板体系
    

只需告诉我你偏向哪种使用场景。

##### You said:

没有找到Trigger Templater on file change,只有Trigger Templater on file creation

###### ChatGPT said:

Templater **没有内置** “Trigger on file change”，只有你看到的 **Trigger on file creation**。  
如果你想在 **每次保存文件时自动更新 updated 字段**，需要用 **另一种方法实现**，根据你当前插件情况，给出三种稳定方案：

---

# 方案 A：用 _Templater User Script_ 模拟“文件修改触发”（最实用）

Templater 支持在命令面板运行脚本，所以我们使用 **Hotkey Helper** 或 Obsidian 自带快捷键，在“保存”动作时执行 Templater 脚本。

**步骤：**

### 1. 新建一个 templater script

在你的 Templater 脚本目录（通常是：  
`.obsidian/templates/scripts/`）  
新建一个 JavaScript 文件，例如：

`update-updated-field.js`

写入：

`module.exports = async (tp) => {     await tp.file.update_frontmatter("updated", tp.date.now("YYYY-MM-DD HH:mm")); }`

### 2. 在 Obsidian 里设置快捷键

设置 → Hotkeys → 搜索：

**Templater: run script**

选择你刚才的脚本 `update-updated-field`  
绑定一个快捷键，例如 `Ctrl+S`。

（把默认保存覆盖掉，Obsidian 会自动保存。此时你按 Ctrl+S 代表“保存 + 更新 updated”）

### 3. 效果

你每次按保存快捷键，`updated:` 自动刷新。

---

# 方案 B：用 _Periodic Notes_ + Templater（可自动触发）

如果你使用 Periodic Notes（Daily/Weekly/Monthly），它在生成文件时也能触发脚本：

步骤：

1）设置 → Periodic Notes → Template  
2）模板内加入：

`<% tp.file.update_frontmatter("updated", tp.date.now("YYYY-MM-DD HH:mm")) %>`

适用场景：**只对 Daily Note/Weekly Note 自动更新时间**。

---

# 方案 C：使用 _MetaEdit_ 插件自动更新 frontmatter（最自动化）

如果你希望每次文件保存就自动更新，而不用按快捷键，可以用 `MetaEdit`：

1. 安装插件：**MetaEdit**
    
2. 进入 `.obsidian/snippets/` 创建 snippet  
    `auto-update-updated.css`
    

写入：

`/* 触发 MetaEdit 更新 updated 字段 */`

（MetaEdit 允许命令行或事件触发更新 frontmatter，但 Obsidian 本身没有“保存事件”。  
你需要使用 **Buttons 插件** 或 **CustomJS** 才能构建完整自动化。）

这个方案更复杂，一般不推荐，除非你需要完全自动化。

---

# 最推荐的方案

你想要“保存时自动更新 updated”，但 Obsidian 本身不提供“on save event”。  
**Templater 也没有这个功能。**

所以最稳定的是：

### ✔ 方案 A（快捷键触发）——所有用户常用的方式

- 简单
    
- 不需要第三方脚本
    
- 自动更新时间
    
- 不破坏 Obsidian 默认行为
    

---

如果你告诉我你想要：

- 完全自动（文件保存后无需任何操作）
    
- 半自动（按快捷键）
    
- 只对某些文件类型自动（例如学术笔记）
    

我可以继续为你定制具体、可直接复制的脚本和文件结构。

##### You said:

obsidian中有保存操作吗

###### ChatGPT said:

在 Obsidian 中，**没有传统意义上的“保存操作”**。核心点如下：

# 1. Obsidian 是“实时保存”（auto-save）

- 你只要停止输入约 0.5 秒，文件就已经写入磁盘
    
- 没有“保存按钮”
    
- 没有“手动保存事件（onSave）”
    
- 没有快捷键（如 Ctrl+S）用于触发保存
    
- 因为 **所有内容都自动保存**
    

→ 这也是你找不到“trigger on file change / save event”的根本原因。

# 2. Ctrl+S 在 Obsidian 中默认没有任何作用

除非你自己给它绑定一个动作，例如：

- 绑定一个 Templater script
    
- 绑定一个 Button
    
- 绑定 MetaEdit 命令
    

否则 **Ctrl+S = 不执行任何功能**。

# 3. Obsidian 事件机制

Obsidian 实际存在的事件是：

|事件|说明|
|---|---|
|create|文件创建|
|rename|文件重命名|
|delete|文件删除|
|modify|**文件内容改变**（实时发生，而不是保存时）|

**modify 事件**可以触发插件（例如自定义 JS 或插件开发），但是 Templater 本身无法监听 modify。

# 4. 为什么 Templater 不能做“保存时更新 updated”

因为 Obsidian 的事件是“实时保存”，而不是“统一保存动作”。  
Templater 官方文档里明确：

- 支持 _Trigger on file creation_
    
- **不支持 on file modify**
    

因此你必须使用别的方式模拟。

---

# 你真正能选择的方案

## ✔ 方案 A：使用快捷键手动触发更新（最常用）

因为 Obsidian 没有“save 事件”，大家通常：

- 绑定 Ctrl+S = 运行“更新 updated 字段”的脚本
    
- 达到“像保存一样”的效果
    

（等价于模拟“保存动作”）

## ✔ 方案 B：使用插件 MetaEdit + customJS 监听 modify（真正自动）

这个方案可以做到：

- 监听文件修改
    
- 自动更新 frontmatter 的 `updated` 字段
    
- 全自动，无需任何操作
    

但需要自定义 JS 和插件组合。

## ✔ 方案 C：用 Buttons 插件做一个“保存+更新时间”按钮

在每篇笔记顶部加入：

` ```button name 更新更新时间 action templater-run-script update-updated-field `

`点击即可自动更新 updated。  ---  # 结论（最重要）  ### **Obsidian 没有保存操作。所有内容是实时保存。** ### 因此你无法绑定“保存动作”。能做的只有：** - 用快捷键模拟保存   - 用插件监听修改   - 用按钮触发更新    ---  如果你需要，我可以继续帮你：  1) 生成一个 **完整可用的“自动更新时间系统”**（install → config → script）   2) 给你一个 **完全自动“modify 触发 updated 更新”的自定义 JS**   3) 给你一份 **Ctrl+S 模拟保存的 Templater 自动更新时间脚本**  你希望哪一种？`