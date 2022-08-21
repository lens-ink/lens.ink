import type { NextApiRequest, NextApiResponse } from "next";

const API_URL = process.env.API_URL;

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function request(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { handle } = req.query;
  if (!handle) {
    res.status(400).json({ error: "handle not provided" });
  }
  console.log(`export profile ${handle}`);

  const url = API_URL! + handle;
  try {
    const result = await fetch(url);
    res.status(200).json(await result.json());
  } catch (error) {
    res.status(500).json({ error });
  }
}
