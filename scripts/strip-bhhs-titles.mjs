import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const appDir = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "app");

function walk(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, files);
    else if (ent.name.endsWith(".tsx")) files.push(p);
  }
  return files;
}

const titleReplacements = [
  [/ \| Berkshire Hathaway HomeServices/g, ""],
  [/Berkshire Hathaway HomeServices /g, ""],
  [/ \| BHHS Nevada Properties/g, ""],
  [/BHHS /g, ""],
];

const h1LineReplacements = [
  [/Meet Your Berkshire Hathaway HomeServices Agent/g, "Meet Dr. Jan Duffy"],
  [/Berkshire Hathaway HomeServices Las Vegas Market Update/g, "Las Vegas Market Update"],
  [/Berkshire Hathaway HomeServices New Construction Las Vegas/g, "New Construction Homes in Las Vegas"],
  [/Why Choose Berkshire Hathaway HomeServices/g, "Why Work With Dr. Jan Duffy"],
];

for (const file of walk(appDir)) {
  let content = fs.readFileSync(file, "utf8");
  let next = content;

  for (const [re, rep] of titleReplacements) {
    next = next.replace(re, rep);
  }
  for (const [re, rep] of h1LineReplacements) {
    next = next.replace(re, rep);
  }

  if (next !== content) {
    fs.writeFileSync(file, next);
    console.log("updated", path.relative(appDir, file));
  }
}
