import { fileURLToPath } from "url";
import fs from "fs";
import path, { dirname } from "path";
const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const sourceFile = path.join(__dirname, "files", "fileToRead.txt");
  const isSourceFileExists = fs.existsSync(sourceFile);
  if (isSourceFileExists) {
    const data = fs.readFileSync(sourceFile, "utf-8");
    console.log(data);
  } else {
    throw new Error("FS operation failed");
  }
};

await read();
