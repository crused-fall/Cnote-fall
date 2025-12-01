# <% tp.file.folder(true).pop() %> MOC

<%*
const folder = tp.file.folder();
const files = app.vault.getFiles().filter(f => f.path.startsWith(folder+"/") && f.path !== tp.file.path);
for (const f of files) {
    if (!f.basename.endsWith("MOC")) {
        tR += `- [[${f.basename}]]\n`;
    }
}
_%>
