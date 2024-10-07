import fs from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const sourcePath = path.join(__dirname, "files");
  const isSourceFolderExists = fs.existsSync(sourcePath);
  if (!isSourceFolderExists) {
    throw new Error("FS operation failed");
  } else {
    const files = fs.readdirSync(sourcePath);
    files.forEach((file) => {
      console.log(file);
    });
  }
};

await list();
