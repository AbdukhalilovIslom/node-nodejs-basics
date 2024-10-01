import fs from "fs";

const create = async () => {
  fs.readFile("./files/fresh.txt", "utf8", (error, data) => {
    if (data) {
      throw new Error("FS operation failed");
    } else {
      fs.writeFile("./files/fresh.txt", "I am fresh and young", "utf-8");
    }
  });
};

await create();
