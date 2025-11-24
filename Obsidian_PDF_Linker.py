import os

vault_path = "."  # 当前目录，可改为 Vault 绝对路径
output_file = "PDF_links.md"

pdf_links = []

for root, dirs, files in os.walk(vault_path):
    for f in files:
        if f.lower().endswith(".pdf"):
            rel_path = os.path.relpath(os.path.join(root, f), vault_path)
            pdf_links.append(f"[[{rel_path.replace(os.sep, '/')}]]")

with open(output_file, "w", encoding="utf-8") as f:
    f.write("# All PDF Links\n\n")
    f.write("\n".join(pdf_links))

print(f"Generated {len(pdf_links)} links in {output_file}")
