<%*
const jsonPath = "plugin_info.json";
const out = "Plugin Intro";

const file = app.vault.getAbstractFileByPath(jsonPath);
if (!file) { 
    tR += "找不到 JSON 文件"; 
    return;
}

const data = JSON.parse(await app.vault.read(file));

if (!app.vault.getAbstractFileByPath(out)) {
    await app.vault.createFolder(out);
}

for (let id of Object.keys(data)) {
    const info = data[id];
    const github = info.github;
    const desc = info.desc;

    const text = `# ${id}

${desc}

GitHub: ${github}
`;

    await app.vault.create(`${out}/${id}.md`, text);
}

tR += "生成完成";
%>
