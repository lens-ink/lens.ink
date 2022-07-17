import path from "path";
import fs from "fs-extra";
import { exportProfile } from "utils/export";

describe("utils test", () => {
  it("Export profile", async () => {
    const output = __dirname;
    const handle = "lensprotocol";
    const buffer = await exportProfile({ handle });
    await fs.writeFile(path.join(output, `${handle}.png`), buffer);
  }, 60000);
});
