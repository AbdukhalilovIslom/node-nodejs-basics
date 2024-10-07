import { promises as fsPromises, constants as fsConstants } from "fs";

const create = async () => {
  const filePath = "./files/fresh.txt";

  try {
    await fsPromises.access(filePath, fsConstants.F_OK);
    throw new Error("FS operation failed");
  } catch (error) {
    if (error.code === "ENOENT") {
      await fsPromises.writeFile(filePath, "I am fresh and young");
    } else {
      throw error;
    }
  }
};

await create();
