import fs from "fs";
import zlib from "zlib";

const INPUT_FILE_PATH = new URL("./files/fileToCompress.txt", import.meta.url);
const OUTPUT_FILE_PATH = new URL("./files/archive.gz", import.meta.url);

const decompress = async () => {
  const writeStr = fs.createWriteStream(INPUT_FILE_PATH);
  const readStr = fs.createReadStream(OUTPUT_FILE_PATH);
  const decompressedStream = zlib.createGunzip();
  readStr.pipe(decompressedStream).pipe(writeStr);
};

await decompress();
