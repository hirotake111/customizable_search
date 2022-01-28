import type { NextApiRequest, NextApiResponse } from "next";

export default async function searchHandler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  return new Promise((resolve) => {
    const { q } = req.query;
    console.log("waiting...");
    setTimeout(() => {
      console.log("done");
      if (!q) return resolve(res.status(400).send({ result: "bad request" }));
      resolve(res.status(200).send({ result: q }));
    }, 2000);
  });
}
