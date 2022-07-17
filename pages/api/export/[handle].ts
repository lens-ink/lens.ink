import type { NextApiRequest, NextApiResponse } from "next";
import { exportProfile } from "utils/export";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { handle } = req.query;
  if (!handle) {
    res.status(400).json({ error: "handle not provided" });
  }
  console.log(`export profile ${handle}`);

  try {
    const buffer = await exportProfile({ handle: handle as string });
    res.setHeader("Cache-Control", "s-maxage=31536000, stale-while-revalidate");
    res.setHeader("Content-Type", "image/png");
    res.send(buffer);
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
}
