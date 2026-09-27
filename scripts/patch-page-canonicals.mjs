import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "app");

function walk(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, files);
    else if (ent.name === "page.tsx") files.push(p);
  }
  return files;
}

function routePath(file) {
  const rel = path.relative(root, file).replace(/\\/g, "/");
  if (rel === "page.tsx") return "/";
  const seg = rel.replace(/\/page\.tsx$/, "");
  if (seg.includes("[")) return null;
  return `/${seg}`;
}

for (const file of walk(root)) {
  const pathname = routePath(file);
  if (!pathname) continue;

  let content = fs.readFileSync(file, "utf8");
  if (!content.includes("export const metadata")) continue;
  if (content.includes("withPageCanonical")) continue;

  if (!content.includes('from "@/lib/metadata"')) {
    if (content.includes('import type { Metadata } from "next";')) {
      content = content.replace(
        'import type { Metadata } from "next";',
        'import type { Metadata } from "next";\nimport { withPageCanonical } from "@/lib/metadata";'
      );
    } else if (content.includes("import { Metadata }")) {
      content = content.replace(
        /import \{ Metadata \} from "next";/,
        'import type { Metadata } from "next";\nimport { withPageCanonical } from "@/lib/metadata";'
      );
    } else {
      content = `import { withPageCanonical } from "@/lib/metadata";\n` + content;
    }
  }

  content = content.replace(
    /export const metadata: Metadata = \{/,
    `export const metadata: Metadata = withPageCanonical("${pathname}", {`
  );

  const marker = `export const metadata: Metadata = withPageCanonical("${pathname}", {`;
  const start = content.indexOf(marker);
  if (start === -1) continue;

  let depth = 0;
  let i = start + marker.length - 1;
  for (; i < content.length; i++) {
    const ch = content[i];
    if (ch === "{") depth++;
    if (ch === "}") {
      depth--;
      if (depth === 0) {
        if (content[i + 1] === ";") {
          content = content.slice(0, i + 1) + ")" + content.slice(i + 1);
        }
        break;
      }
    }
  }

  fs.writeFileSync(file, content);
  console.log("patched", pathname);
}
