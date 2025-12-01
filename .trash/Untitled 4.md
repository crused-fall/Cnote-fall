<%*
/**
 * 配置区
 */
Const jsonPath = "plugin_info. Json";   // ← 修改为你的路径
Const outputFolder = "Plugin Intro";         // ← 生成文件存放的文件夹名称，不存在会自动创建
Const prefix = "";                           // ← 文件名前缀，可留空
Const suffix = "";                           // ← 文件名后缀，可留空

/**
 * 读取 JSON 文件
 */
Const file = app.Vault.GetAbstractFileByPath (jsonPath);
If (! File) {
    TR += `无法找到 JSON 文件：${jsonPath}`;
    Return;
}

Const data = JSON.Parse (await app.Vault.Read (file));

/**
 * 确保输出目录存在
 */
Async function ensureFolder (path) {
    let parts = path.Split ("/"). Filter (p => p.length > 0);
    Let current = "";
    For (let p of parts) {
        Current = current ? `${current}/${p}` : p;
        If (! App.Vault.GetAbstractFileByPath (current)) {
            Await app.Vault.CreateFolder (current);
        }
    }
}
Await ensureFolder (outputFolder);

/**
 * 根据 JSON 生成文件
 */
For (let pluginId of Object.Keys (data)) {
    Const plugin = data[pluginId];
    Const github = plugin. Github || "";
    Const desc   = plugin. Desc   || "";

    Const filename = `${prefix}${pluginId}${suffix}. Md`;
    Const fullpath = `${outputFolder}/${filename}`;

    Const content =
`---
Plugin-id: ${pluginId}
Github: ${github}
---

# ${pluginId}

${desc}

## GitHub
${github}
`;

    Await app.Vault.Create (fullpath, content);
}

TR += "批量生成完成。";
%>
