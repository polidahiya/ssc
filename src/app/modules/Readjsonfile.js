"use server";

import fs from "fs/promises";

export default async (path) => {
  try {
    const data = await fs.readFile(path, "utf8");
    const jsonData = JSON.parse(data);
    return jsonData;
  } catch (error) {
    console.log(error);
  }
};
