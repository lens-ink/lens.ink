import path from "path";
import fs from "fs-extra";
import { exportProfile } from "../utils/export";

test("Export profile", async () => {
  const output = __dirname;
  const handle = "lensprotocol";
  const buffer = await exportProfile({ handle, theme: "dark" });
  await fs.writeFile(path.join(output, `${handle}.png`), buffer);
}, 60000);
