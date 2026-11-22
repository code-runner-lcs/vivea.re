/**
 * optimize-images.mjs — tâche one-shot de compression des visuels.
 *
 *   node scripts/optimize-images.mjs
 *
 * Produits  : redimensionnés à 800px de large (≈ 2× la plus grande
 *             tuile affichée), WebP q80.
 * Bannière  : conservée à 1225px (largeur native, sans agrandissement),
 *             WebP q82.
 *
 * Sortie : une ligne par fichier `source -> sortie WxH poids`,
 *          remplaçant les .jpg par des .webp côte à côte.
 * Les .jpg sources sont ensuite retirés (git rm) avec ce commit.
 */
import sharp from "sharp";
import { readdirSync, writeFileSync, readFileSync } from "node:fs";
import path from "node:path";

const ROOT = path.resolve("public/img");
const JOBS = [
  {
    dir: path.join(ROOT, "produits"),
    targetW: 800,
    quality: 80,
    match: (f) => f.endsWith(".jpg"),
  },
  {
    dir: ROOT,
    targetW: 1225,
    quality: 82,
    match: (f) => f.startsWith("espace-") && f.endsWith(".jpg"),
  },
];

for (const job of JOBS) {
  for (const file of readdirSync(job.dir).filter(job.match)) {
    const src = path.join(job.dir, file);
    const out = src.replace(/\.jpg$/, ".webp");
    const buf = await sharp(src)
      .resize({ width: job.targetW, withoutEnlargement: true })
      .webp({ quality: job.quality })
      .toBuffer();
    // relecture des métadonnées depuis le fichier ÉCRIT (source de vérité)
    writeFileSync(out, buf);
    const meta = await sharp(out).metadata();
    console.log(
      `${file} -> ${path.basename(out)} ${meta.width}x${meta.height} ${Math.round(buf.length / 1024)}K`
    );
  }
}
