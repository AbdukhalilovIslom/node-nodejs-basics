import path, { dirname } from "path";
import fs from "fs";
import { fileURLToPath } from "url";
const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const sourceFile = path.join(__dirname, "files", "fileToRemove.txt");
  const isSourceFileExists = fs.existsSync(sourceFile);
  if (isSourceFileExists) {
    fs.unlinkSync(sourceFile);
  } else {
    throw new Error("FS operation failed");
  }
};

await remove();
