import fs from "fs";
import { createGzip } from "zlib";
import { pipeline } from "stream/promises";

const INPUT_FILE_PATH = new URL("./files/fileToCompress.txt", import.meta.url);
const OUTPUT_FILE_PATH = new URL("./files/archive.gz", import.meta.url);

const compress = async () => {
  const fileReadStream = fs.createReadStream(INPUT_FILE_PATH, {
    encoding: "utf8",
  });

  const fileWriteStream = fs.createWriteStream(OUTPUT_FILE_PATH, {
    encoding: "utf8",
  });

  const gzipStream = createGzip();

  try {
    await pipeline(fileReadStream, gzipStream, fileWriteStream);
  } catch (e) {
    console.error("Something went wrong during the pipeline process", e);
  }
};

await compress();
