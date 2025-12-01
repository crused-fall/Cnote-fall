---
source:
---
# <% tp.file.title.replace("Plugin - ", "") %>

## 简介
<%*
Const info = await tp.Obsidian.Vault.Adapter.Read ("plugin_info. Json");
Const data = JSON.Parse (info);
Const name = tp.File.Title.Replace ("Plugin - ", "");
If (data[name]) {
    TR += data[name]. Desc;
} else {
    TR += "（暂无介绍）";
}
%>

## GitHub
<%*
If (data[name]) {
    TR += data[name]. Github;
} else {
    TR += "（无）";
}
%>


## 常用技巧
- 

## 配置说明
- 

## 相关插件
- 
