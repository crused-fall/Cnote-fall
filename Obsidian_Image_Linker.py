import os

vault_path = "."  # 当前目录，可改成 Vault 的绝对路径
output_file = "Image_links.md"

# 允许的图片扩展名
image_exts = {".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp"}

image_links = []

for root, dirs, files in os.walk(vault_path):
    for f in files:
        ext = os.path.splitext(f)[1].lower()
        if ext in image_exts:
            rel_path = os.path.relpath(os.path.join(root, f), vault_path)
            rel_path = rel_path.replace(os.sep, "/")
            image_links.append(f"[[{rel_path}]]")

with open(output_file, "w", encoding="utf-8") as f:
    f.write("# All Image Links\n\n")
    f.write("\n".join(image_links))

print(f"Generated {len(image_links)} links in {output_file}")
