/* main.js */
const { Plugin, ItemView } = require('obsidian');

const VIEW_TYPE = "checklist-outline-view";

class ChecklistOutlinePlugin extends Plugin {
    async onload() {
        this.data = Object.assign({ progress: {} }, await this.loadData());
        this.registerView(VIEW_TYPE, (leaf) => new ChecklistOutlineView(leaf, this));
        
        this.addCommand({
            id: 'open-checklist-outline',
            name: '打开阅读进度大纲',
            callback: () => this.activateView(),
        });

        this.registerEvent(this.app.workspace.on('active-leaf-change', () => this.refreshView()));
        this.registerEvent(this.app.metadataCache.on('changed', () => this.refreshView()));

        this.app.workspace.onLayoutReady(() => {
            if (this.app.workspace.getLeavesOfType(VIEW_TYPE).length === 0) {
                // 可选：自动打开
            }
        });
    }

    refreshView() {
        const leaves = this.app.workspace.getLeavesOfType(VIEW_TYPE);
        leaves.forEach(leaf => {
            if (leaf.view instanceof ChecklistOutlineView) {
                leaf.view.updateOutline();
            }
        });
    }

    async activateView() {
        const { workspace } = this.app;
        let leaf = workspace.getLeavesOfType(VIEW_TYPE)[0];
        if (!leaf) {
            const rightLeaf = workspace.getRightLeaf(false);
            await rightLeaf.setViewState({ type: VIEW_TYPE, active: true });
            leaf = workspace.getLeavesOfType(VIEW_TYPE)[0];
        }
        workspace.revealLeaf(leaf);
    }

    async saveDataToDisk() {
        await this.saveData(this.data);
    }
}

class ChecklistOutlineView extends ItemView {
    constructor(leaf, plugin) {
        super(leaf);
        this.plugin = plugin;
        this.collapsedPaths = new Set(); 
        this.isAllCollapsed = false; 
    }

    getViewType() { return VIEW_TYPE; }
    getDisplayText() { return "阅读进度大纲"; }
    getIcon() { return "check-square"; }

    async onOpen() {
        this.contentEl.empty();
        this.contentEl.addClass("checklist-outline-content");
        this.renderHeader();
        this.treeContainer = this.contentEl.createDiv({ cls: "outline-tree-container" });
        this.updateOutline();
    }

    renderHeader() {
        const header = this.contentEl.createDiv({ cls: "nav-header" });
        header.createDiv({ cls: "nav-header-title", text: "大纲进度" });
        
        this.toggleBtn = header.createDiv({ 
            cls: "nav-action-button", 
            attr: { "aria-label": "全部折叠 / 全部展开" } 
        });
        
        this.toggleBtn.onclick = () => this.toggleAllState();
        this.updateHeaderIcon();
    }

    updateHeaderIcon() {
        if (this.isAllCollapsed) {
            // 展开图标
            this.toggleBtn.innerHTML = `<svg viewBox="0 0 100 100" class="svg-icon" width="18" height="18"><path fill="currentColor" stroke="currentColor" stroke-width="6" d="M50,50 L20,20 M50,50 L80,20 M50,50 L20,80 M50,50 L80,80" /></svg>`;
            this.toggleBtn.setAttribute("aria-label", "全部展开");
        } else {
            // 折叠图标
            this.toggleBtn.innerHTML = `<svg viewBox="0 0 100 100" class="svg-icon" width="18" height="18"><path fill="none" stroke="currentColor" stroke-width="8" d="M20,35 L50,65 L80,35" /></svg>`;
            this.toggleBtn.setAttribute("aria-label", "全部折叠 (只看一级)");
        }
    }

    toggleAllState() {
        const file = this.app.workspace.getActiveFile();
        if (!file) return;
        const cache = this.app.metadataCache.getFileCache(file);
        if (!cache || !cache.headings) return;

        this.isAllCollapsed = !this.isAllCollapsed;
        if (this.isAllCollapsed) {
            cache.headings.forEach(h => this.collapsedPaths.add(h.heading));
        } else {
            this.collapsedPaths.clear();
        }
        this.updateHeaderIcon();
        this.updateOutline();
    }

    updateOutline() {
        const container = this.treeContainer;
        container.empty();

        const file = this.app.workspace.getActiveFile();
        if (!file) {
            container.createDiv({ cls: "outline-empty", text: "无活动文件" });
            return;
        }

        const cache = this.app.metadataCache.getFileCache(file);
        if (!cache || !cache.headings) {
            container.createDiv({ cls: "outline-empty", text: "本文档无大纲" });
            return;
        }

        const fileProgress = this.plugin.data.progress[file.path] || [];
        const tree = this.buildTree(cache.headings);
        this.renderTree(container, tree, file, fileProgress);
    }

    buildTree(headings) {
        const root = [];
        const stack = []; 
        headings.forEach(heading => {
            const node = { original: heading, children: [], id: heading.heading };
            while (stack.length > 0 && stack[stack.length - 1].original.level >= heading.level) {
                stack.pop();
            }
            if (stack.length === 0) root.push(node);
            else stack[stack.length - 1].children.push(node);
            stack.push(node);
        });
        return root;
    }

    // 递归辅助函数：收集当前节点及其所有子孙节点的ID
    collectAllIds(node, ids) {
        ids.push(node.id);
        if (node.children && node.children.length > 0) {
            node.children.forEach(child => this.collectAllIds(child, ids));
        }
    }

    renderTree(container, nodes, file, progressList) {
        nodes.forEach(node => {
            const itemDiv = container.createDiv({ cls: "tree-item" });
            
            const selfDiv = itemDiv.createDiv({ 
                cls: "tree-item-self nav-file-title",
                attr: { "data-level": node.original.level }
            });

            // 1. 折叠/展开图标
            const arrowIcon = selfDiv.createDiv({ cls: "tree-item-icon collapse-icon" });
            if (node.children.length > 0) {
                arrowIcon.innerHTML = `<svg viewBox="0 0 100 100" class="svg-icon" width="10" height="10"><path fill="currentColor" stroke="currentColor" d="M30,10 L70,50 L30,90" stroke-width="10" fill="none"></path></svg>`;
                
                const isCollapsed = this.collapsedPaths.has(node.id);
                if (isCollapsed) {
                    itemDiv.addClass("is-collapsed");
                    arrowIcon.addClass("is-collapsed-arrow");
                }

                arrowIcon.onclick = (e) => {
                    e.stopPropagation();
                    if (this.collapsedPaths.has(node.id)) {
                        this.collapsedPaths.delete(node.id);
                        itemDiv.removeClass("is-collapsed");
                        arrowIcon.removeClass("is-collapsed-arrow");
                    } else {
                        this.collapsedPaths.add(node.id);
                        itemDiv.addClass("is-collapsed");
                        arrowIcon.addClass("is-collapsed-arrow");
                    }
                };
            } else {
                arrowIcon.addClass("is-empty");
            }

            // 2. 标题文字
            const titleSpan = selfDiv.createDiv({ cls: "tree-item-text nav-file-title-content", text: node.original.heading });
            titleSpan.onclick = () => {
                const leaf = this.app.workspace.getLeaf(false);
                leaf.openFile(file, { eState: { line: node.original.position.start.line } });
            };

            // 3. 复选框 (支持级联打勾)
            const checkbox = selfDiv.createEl("input", { type: "checkbox", cls: "tree-item-checkbox" });
            if (progressList.includes(node.id)) {
                checkbox.checked = true;
                titleSpan.addClass("is-done");
            }
            
            checkbox.onclick = (e) => e.stopPropagation();
            
            checkbox.onchange = async () => {
                const isChecked = checkbox.checked;
                let currentProgress = this.plugin.data.progress[file.path] || [];

                // --- 核心修改：获取所有受影响的节点 ---
                const idsToUpdate = [];
                this.collectAllIds(node, idsToUpdate);

                if (isChecked) {
                    // 如果是打勾，把所有下级都加上
                    idsToUpdate.forEach(id => {
                        if (!currentProgress.includes(id)) currentProgress.push(id);
                    });
                } else {
                    // 如果是取消，把所有下级都移除
                    currentProgress = currentProgress.filter(id => !idsToUpdate.includes(id));
                }
                
                // 保存并刷新视图
                this.plugin.data.progress[file.path] = currentProgress;
                await this.plugin.saveDataToDisk();
                
                // 触发更新，让界面上的子复选框也变色
                this.updateOutline();
            };

            // 递归渲染子节点
            if (node.children.length > 0) {
                const childrenDiv = itemDiv.createDiv({ cls: "tree-item-children" });
                this.renderTree(childrenDiv, node.children, file, progressList);
            }
        });
    }
}

module.exports = ChecklistOutlinePlugin;