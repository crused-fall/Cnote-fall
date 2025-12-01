%% Begin Waypoint %%
- [[advanced-canvas]]
- [[attachment-management]]
- [[buttons]]
- [[calendar]]
- [[checklist-outline]]
- [[cm-editor-syntax-highlight-obsidian]]
- [[cmdr]]
- [[Copilot]]
- [[copy-as-latex]]
- [[darlal-switcher-plus]]
- [[dataview]]
- [[easy-typing-obsidian]]
- [[editing-toolbar]]
- [[file-tree-alternative]]
- [[folder-notes]]
- [[graph-analysis]]
- [[highlightr-plugin]]
- [[homepage]]
- [[make-md]]
- [[nldates-obsidian]]
- [[note-refactor-obsidian]]
- [[obsidian-admonition]]
- [[obsidian-checklist-plugin]]
- [[obsidian-excalidraw-plugin]]
- [[obsidian-git]]
- [[obsidian-hider]]
- [[obsidian-icon-folder]]
- [[obsidian-kanban]]
- [[obsidian-latex-suite]]
- [[obsidian-linter]]
- [[obsidian-mind-map]]
- [[obsidian-minimal-settings]]
- [[obsidian-omnivore]]
- [[obsidian-outliner]]
- [[obsidian-style-settings]]
- [[obsidian-tasks-plugin]]
- [[obsidian-to-anki-plugin]]
- [[obsidian-zoom]]
- [[obsidian-zotero-desktop-connector]]
- [[omnisearch]]
- [[Outline_tick]]
- [[periodic-notes]]
- [[quickadd]]
- [[recent-files-obsidian]]
- [[smart-connections]]
- [[table-editor-obsidian]]
- [[templater-obsidian]]
- [[various-complements]]
- [[waypoint]]

%% End Waypoint %%


# 插件目录| Plugins Catalogue


## 已安装插件| Installed Plugins
Enabled 显示的是 "是否为 obsidian 社区插件"

```dataviewjs
dv.frontmatter; // 禁用 Live Preview 自动重计算


const fs = app.vault.adapter;
const root = ".obsidian/plugins/";

// ------------ [ ] 读取已启用插件（不用 dv.io.load） ------------
let enabled = [];
try {
    const raw = await fs.read(".obsidian/community-plugins.json");
    enabled = JSON.parse(raw);
} catch(e) {
    console.log("Failed to read community-plugins.json:", e);
    enabled = [];
}
// ------------------------------------------------------------

const listing = await fs.list(root);
const rows = [];

function normalizeName(path) {
    // path like ".obsidian/plugins/templater-obsidian"
    return path.split("/").pop();
}

function isEnabled(folderName) {
    // 完全匹配
    if (enabled.includes(folderName)) return true;

    // 文件夹名与启用名匹配（前缀忽略后缀）
    return enabled.some(e =>
        folderName === e ||
        folderName.startsWith(e + "-") ||
        e.startsWith(folderName + "-")
    );
}

for (let fullPath of listing.folders) {
    const name = normalizeName(fullPath);
    const stat = await fs.stat(fullPath);
    if (!stat || !stat.ctime) continue;

    const installed = new Date(stat.ctime);

    rows.push([
        name,
        installed.toLocaleString(),
        isEnabled(name)
    ]);
}

rows.sort((a, b) => new Date(a[1]) - new Date(b[1]));

dv.table(["Plugin", "Installed", "Enabled"], rows);
```

## 未安装插件| Plugins to be installed
### ★★★ 强烈推荐（高价值）

- **DataLoom** — Dataview 的可视化 UI 增强，提供更强的表格、美化、交互功能，让 Dataview 查询更易读、更可管理。
    
- **Breadcrumbs** — 基于父/子/兄弟关系的知识结构导航工具，非常适合数学笔记的层级化组织（定义→定理→推论）。
    
- **Advanced Tables** — 高级表格编辑插件，比 table-editor 功能强得多，支持智能对齐、格式化、自动补全。
    
- **Mermaid Tools** — 增强 mermaid 图形功能，方便绘制流程图、序列图、依赖关系图、范畴图等数学结构图。
    
- **Charts** — 基于 JSON 数据生成图表（折线、柱状、散点等），适合统计、机器学习、研究报告。
    
- **MathJax Enabler / Enhancer** — 增强数学公式渲染（自动换行、编号、多行优化），对于数学研究者非常关键。
    
- **Table Extended / CSV Editor** — 高级 CSV 和数据表处理插件，适合统计分析、表格数据整理，比普通表格插件强得多。
    

---

### ★★ 建议安装（增强体验）

- **LanguageTool Integration** — 提供英文语法检查，对英文论文、讲义的写作极有帮助。
    
- **Local File Explorer** — 在 Obsidian 内浏览本地文件系统，减少切换到 Finder/Explorer 的次数。
    
- **Jump-to-Link** — 增强链接跳转效率，对数学笔记中频繁引用定义/定理时非常有用。
    
- **Longform** — 长篇写作管理工具，适合写书、讲义、多章节数学笔记。
    
- **Pandoc Plugin** — 导出 PDF/LaTeX/Word 的强力工具，比 Obsidian 默认导出强很多；适合输出数学 PDF。
    
- **Readwise Official** — 同步微信读书、Kindle、高亮标注到 Obsidian，适合文献阅读。
    
- **Code Runner** — 在笔记中运行 Python/C++/R 等代码，适合数学计算、统计实验记录。
    
- **Jupyter / Quarto（非官方）** — 支持 notebook 运行与 Markdown 集成，是数学计算笔记的扩展方案。
    

---

### ★ 可装可不装（按需安装）

- **Map View** — 用于地理地图展示，数学研究通常不需要。
    
- **Bookmark / Tab Manager** — 管理标签页，但你的 Recent Files 已覆盖大部分使用场景。
    
- **Novel Word Count** — 字数统计工具，数学笔记不特别需要。
    
- **Page Preview** — 悬停预览笔记内容，但 Obsidian 内置已有类似功能。
    
- **Web Clipper** — 网页剪藏，但 Omnivore 功能更强，重复性高。
    
- **Sync Cleaner** — 清理同步冲突文件，仅在频繁出现重复/冲突时才有价值。
    

---

### ✕ 不推荐安装（低价值或重复功能）

- **Obsidian Sync** — 官方同步服务，但你已有 Git；并且是付费功能（性价比低）。
    
- **File Recovery** — Obsidian Core 已内置恢复功能，此插件价值极低（重复功能）。





# 插件分类 Classification of Plugins

（重叠类插件在多个类别出现，但主归类如下）

## 01｜编辑增强（Editor Enhancement）

直接增强 Markdown 编辑体验。

- [ ] **cm-editor-syntax-highlight-obsidian**（代码高亮）
    
- [ ] **easy-typing-obsidian**（输入增强）
    
- [ ] **editing-toolbar**（编辑工具栏按钮）
    
- [ ] **obsidian-latex-suite**（LaTeX 输入增强）
    
- [ ] **obsidian-checklist-plugin**（增强 checklist）
    
- [ ] **obsidian-outliner**（大纲式编辑增强）
    
- [ ] **note-refactor-obsidian**（分割、重构笔记）
    
- [ ] **highlightr-plugin**（高亮文本）
    
- [ ] **table-editor-obsidian**（表格增强）
    
- [ ] **attachment-management**（附件插入增强）【也属于文件类，但编辑时会用到】
    

---

## 02｜知识管理 / 数据处理（Knowledge & Data）

提高笔记的结构化、数据化能力。

- [ ] **dataview**（结构化查询）
    
- [ ] **make-md**（块级文档结构、增强文档模型）
    
- [ ] **graph-analysis**（分析笔记网络）
    
- [ ] **smart-connections**（智能关系推荐）
    
- [ ] **obsidian-zotero-desktop-connector**（文献集成）
    
- [ ] **various-complements**（AI/智能补全）
    

---

## 03｜任务 / 工作流 / 自动化（Tasks & Workflow）

用于任务管理、周期笔记、功能触发等。

- [ ] **obsidian-tasks-plugin**（任务系统）
    
- [ ] **quickadd**（工作流自动化）
    
- [ ] **periodic-notes**（日/周/月笔记）
    
- [ ] **nldates-obsidian**（自然语言日期）
    
- [ ] **calendar**（日历）
    
- [ ] **obsidian-omnivore**（稍后读工作流）
    
- [ ] **waypoint**（导航与工作流跳点）
    
- [ ] **homepage**（启动页）
    
- [ ] **cmdr**（Commander 命令系统）
    
- [ ] **buttons**（可点击按钮执行操作）
    
- [ ] Copilot (AI内嵌)

---

## 04｜文档结构 / 导航增强（Navigation & Structure）

- [ ] **obsidian-icon-folder**（图标文件夹）
    
- [ ] **folder-notes**（文件夹首页笔记）
    
- [ ] **file-tree-alternative**（增强文件树）
    
- [ ] **recent-files-obsidian**（最近文件）
    
- [ ] **obsidian-kanban**（看板）
    
- [ ] **obsidian-zoom**（Zoom 视图导航）
    
- [ ] **obsidian-mind-map**（思维导图）
    
- [ ] **Outline_tick**（文档结构支持）
    
- [ ] **obsidian-excalidraw-plugin**（跨文件白板导航）
    

---

## 05｜写作 / 格式化（Writing & Formatting）

- [ ] **obsidian-admonition**（提示块）
    
- [ ] **obsidian-linter**（Markdown 自动格式化）
    
- [ ] **copy-as-latex / obsidian copy-as-latex**（LaTeX 导出）
    
- [ ] **obsidian-style-settings**（样式工具，也影响写作排版）
    

---

## 06｜可视化 / 图表 / 画板（Visualization）

- [ ] **advanced-canvas**（增强 Canvas）
    
- [ ] **obsidian-excalidraw-plugin**（白板）
    
- [ ] **graph-analysis**（图可视化）
    
- [ ] **obsidian-mind-map**（思维导图）
    
- [ ] **obsidian-kanban**（看板可视化）
    



---

## 07｜界面与 UI 客制化（UI & Appearance）

- [ ] **obsidian-hider**（隐藏界面元素）
    
- [ ] **obsidian-minimal-settings**（Minimal 主题增强）
    
- [ ] **obsidian-style-settings**（主题配置）
    
- [ ] **obsidian-icon-folder**（文件夹 UI）
    
- [ ] **homepage**（自定义首页）
    
- [ ] **obsidian-zoom**（UI 导航增强）
    

---

## 08｜文件与附件管理（File & Attachment Management）

- [ ] **attachment-management**（附件路径管理）
    
- [ ] **obsidian-git**（版本管理）
    
- [ ] **file-tree-alternative**（增强文件树）
    
- [ ] **folder-notes**（自动生成文件夹索引）
    
- [ ] **recent-files-obsidian**（文件访问增强）
    
- [ ] **obsidian-omnivore**（网页导入）
    

---

## 09｜外部服务集成（Integrations）

- [ ] **obsidian-git**（Git 同步）
    
- [ ] **obsidian-zotero-desktop-connector**（Zotero）
    
- [ ] **obsidian-omnivore**（稍后读）
    
- [ ] **obsidian-to-anki-plugin**（Anki 卡片转换）
    
- [ ] **copy-as-latex**（LaTeX 相关）
    
- [ ] **graph-analysis**（外部模型整合）
    

---

## 10｜高级工具 / 其他（Advanced Tools）

- [ ] **smart-connections**（AI 辅助）
    
- [ ] **make-md**（文档结构引擎）
    
- [ ] **quickadd**（自动化引擎）
    
- [ ] **obsidian-tasks-plugin**（任务 DSL）
    
- [ ] **darlal-switcher-plus**（增强 switcher）
    
- [ ] **waypoint**（跳转系统）
    
- [ ] **cmdr**（命令系统）
    
- [ ] **editing-toolbar**（工具栏扩展）




# 已安装插件介绍| Instruction
## **1. advanced-canvas**

增强 Canvas（画布）功能，支持更多布局与操作。  
GitHub: https://github.com/DeveloperLogan/advanced-canvas

---

## **2. attachment-management**

自动整理附件到统一文件夹，避免附件散落。  
GitHub: https://github.com/jplattel/obsidian-attachment-management

---

## **3. buttons**

在笔记中放置可点击按钮，用来运行命令/脚本/插入模板。  
GitHub: [https://github.com/shabegom/buttons](https://github.com/shabegom/buttons)

---

## **4. calendar**

在 Obsidian 显示最常用的日历面板，用于每日笔记。  
GitHub: [https://github.com/liamcain/obsidian-calendar-plugin](https://github.com/liamcain/obsidian-calendar-plugin)

---

## **5. checklist-outline**

为 checklist 提供更清晰的层级结构展示。  
GitHub: https://github.com/AnubisNekhet/Checklists-Outliner

---

## **6. cmdr（Commander）**

构建自定义命令、快捷键、宏操作。  
GitHub: [https://github.com/phibr0/obsidian-commander](https://github.com/phibr0/obsidian-commander)

---

## **7. cm-editor-syntax-highlight-obsidian**

为编辑器模式提供代码语法高亮。  
GitHub: [https://github.com/deathau/cm-editor-syntax-highlight-obsidian](https://github.com/deathau/cm-editor-syntax-highlight-obsidian)

---

## **8. copy-as-latex**

将选中内容快速转换为 LaTeX 格式。  
GitHub: https://github.com/Ebonsignori/obsidian-copy-as-latex

---

## **9. darlal-switcher-plus**

增强内置快速切换器（文件搜索）的功能。  
GitHub: [https://github.com/darlal/obsidian-switcher-plus](https://github.com/darlal/obsidian-switcher-plus)

---

## **10. dataview**

从 Markdown 中生成数据表格、查询、数据库视图。  
GitHub: [https://github.com/blacksmithgu/obsidian-dataview](https://github.com/blacksmithgu/obsidian-dataview)

---

## **11. easy-typing-obsidian**

输入增强插件（成对符号、智能补全等）。  
GitHub: https://github.com/Yaozhuwa/easy-typing-obsidian

---

## **12. editing-toolbar**

在移动端提供工具栏按钮（粗体、斜体、列表等）。  
GitHub: https://github.com/akosbalasko/obsidian-editing-toolbar

---

## **13. file-tree-alternative**

增强文件树视图：自动展开、搜索过滤等。  
GitHub: [https://github.com/ozntel/file-tree-alternative](https://github.com/ozntel/file-tree-alternative)

---

## **14. folder-notes**

为文件夹自动生成“文件夹主页笔记”。  
GitHub: https://github.com/ivan-lednev/folder-notes

---

## **15. graph-analysis**

分析你的 Vault 笔记网络结构：中心节点、社区分布等。  
GitHub: https://github.com/SkepticMystic/better-graph-view

---

## **16. highlightr-plugin**

可自定义文本高亮颜色。  
GitHub: https://github.com/nothingislost/obsidian-highlightr-plugin

---

## **17. homepage**

设置自定义主页，打开 Obsidian 时自动跳转。  
GitHub: https://github.com/zhaoshenzhai/obsidian-homepage

---

## **18. make-md**

将 Obsidian 转换为 Notion 风格的数据库体系（块级结构化）。  
GitHub: [https://github.com/Make-md/makemd](https://github.com/Make-md/makemd)

---

## **19. nldates-obsidian**

支持自然语言日期，例如“next Monday”、“3 days ago”。  
GitHub: [https://github.com/argenos/nldates-obsidian](https://github.com/argenos/nldates-obsidian)

---

## **20. note-refactor-obsidian**

将选中内容快速拆分成独立笔记。  
GitHub: [https://github.com/lynchjames/note-refactor-obsidian](https://github.com/lynchjames/note-refactor-obsidian)

---

## **21. obsidian-admonition**

插入提示块（note / warning / info 等）。  
GitHub: https://github.com/valentine195/obsidian-admonition

---

## **22. obsidian-checklist-plugin**

Checklist 加强：多状态任务、计数、进度等。  
GitHub: https://github.com/dcermak/obsidian-checklist-plugin

---

## **23. obsidian-excalidraw-plugin**

白板绘图（手绘风格）、数学图示最佳工具。  
GitHub: [https://github.com/zsviczian/obsidian-excalidraw-plugin](https://github.com/zsviczian/obsidian-excalidraw-plugin)

---

## **24. obsidian-git**

用 Git 做版本管理、备份、同步。  
GitHub: https://github.com/denolehov/obsidian-git

---

## **25. obsidian-hider**

隐藏不需要的 UI 元素，提升专注体验。  
GitHub: [https://github.com/kepano/obsidian-hider](https://github.com/kepano/obsidian-hider)

---

## **26. obsidian-icon-folder**

文件夹图标增强，让左侧结构更清晰。  
GitHub: https://github.com/LyAnn1992/obsidian-icon-folder

---

## **27. obsidian-kanban**

看板插件，用于任务管理、项目规划。  
GitHub: [https://github.com/mgmeyers/obsidian-kanban](https://github.com/mgmeyers/obsidian-kanban)

---

## **28. obsidian-latex-suite**

LaTeX 快速输入、数学公式智能补全。  
GitHub: https://github.com/ArtisticStyle/obsidian-latex-suite

---

## **29. obsidian-linter**

Markdown 自动格式化器（空格、标题、列表）。  
GitHub: [https://github.com/platers/obsidian-linter](https://github.com/platers/obsidian-linter)

---

## **30. obsidian-mind-map**

将笔记结构自动转换为思维导图。  
GitHub: [https://github.com/lynchjames/obsidian-mind-map](https://github.com/lynchjames/obsidian-mind-map)

---

## **31. obsidian-minimal-settings**

Minimal 主题专用配置增强工具。  
GitHub: [https://github.com/kepano/obsidian-minimal-settings](https://github.com/kepano/obsidian-minimal-settings)

---

## **32. obsidian-omnivore**

将 Omnivore（稍后读）内容同步到 Obsidian。  
GitHub: [https://github.com/omnivore-app/obsidian-omnivore](https://github.com/omnivore-app/obsidian-omnivore)

---

## **33. obsidian-outliner**

让 Markdown 列表像 Workflowy / Dynalist 一样可折叠操作。  
GitHub: [https://github.com/vslinko/obsidian-outliner](https://github.com/vslinko/obsidian-outliner)

---

## **34. obsidian-style-settings**

编辑主题样式（颜色、字体、布局等）。  
GitHub: [https://github.com/mgmeyers/obsidian-style-settings](https://github.com/mgmeyers/obsidian-style-settings)

---

## **35. obsidian-tasks-plugin**

Todo 管理增强：过滤、查询、重复、状态机。  
GitHub: [https://github.com/obsidian-tasks-group/obsidian-tasks](https://github.com/obsidian-tasks-group/obsidian-tasks)

---

## **36. obsidian-to-anki-plugin**

将笔记自动转换为 Anki 卡片。  
GitHub: https://github.com/ObsidianToAnki/obsidian-to-anki

---

## **37. obsidian-zoom**

对标题和列表提供“焦点模式”放大显示。  
GitHub: [https://github.com/vslinko/obsidian-zoom](https://github.com/vslinko/obsidian-zoom)

---

## **38. obsidian-zotero-desktop-connector**

Zotero 引文与笔记同步插件。  
GitHub: https://github.com/mgmeyers/zotero-obsidian

---

## **39. omnisearch**

全文搜索增强（速度快、精度高）。  
GitHub: [https://github.com/scambier/obsidian-omnisearch](https://github.com/scambier/obsidian-omnisearch)

---

## **40. Outline_tick**

增强文档大纲（自动刷新、更多功能）。  
GitHub: https://github.com/liamcain/obsidian-outline

---

## **41. periodic-notes**

创建每日/每周/月/年度笔记。  
GitHub: [https://github.com/liamcain/obsidian-periodic-notes](https://github.com/liamcain/obsidian-periodic-notes)

---

## **42. quickadd**

自动化操作（创建模板、宏、任务流）。  
GitHub: [https://github.com/chhoumann/quickadd](https://github.com/chhoumann/quickadd)

---

## **43. recent-files-obsidian**

显示最近打开/编辑的文件。  
GitHub: [https://github.com/tgrosinger/recent-files-obsidian](https://github.com/tgrosinger/recent-files-obsidian)

---

## **44. smart-connections**

AI 自动分析笔记关系（语义链接）。  
GitHub: https://github.com/tth05/SmartConnections

---

## **45. table-editor-obsidian**

表格编辑器（支持 Excel 风格操作）。  
GitHub: https://github.com/nothingislost/obsidian-table-editor

---

## **46. templater-obsidian**

强大的模板系统，可运行 JS、生成内容。  
GitHub: [https://github.com/SilentVoid13/Templater](https://github.com/SilentVoid13/Templater)

---

## **47. various-complements**

自动补全：AI/单词/标题/标签补全。  
GitHub: [https://github.com/tadashi-aikawa/obsidian-various-complements-plugin](https://github.com/tadashi-aikawa/obsidian-various-complements-plugin)

---

## **48. waypoint**

导航系统：在笔记中创建“快速跳转点”。  
GitHub: https://github.com/jplattel/obsidian-waypoint

---

## **49. Copilot**

ai插件
Github:https://github.com/logancyang/obsidian-copilot


