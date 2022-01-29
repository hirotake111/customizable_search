import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

import { config } from "../../config";
import { getMockData } from "../../utils/mockData";

const baseUrl = "https://www.googleapis.com/customsearch/v1";
// https://www.googleapis.com/customsearch/v1?key=INSERT_YOUR_API_KEY&cx=017576662512468239146:omuauf_lfve&q=lectures

export default async function searchHandler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { key, cx } = config;
  const { q } = req.query;

  try {
    if (config.key.length < 10) {
      // use mock data
      const data = await getMockData("");
      return res.status(200).send({ result: "success", data });
    }
  } catch (e) {
    res.status(400).send({ result: e });
  }

  if (!(q && typeof q === "string" && key.length > 10 && cx.length > 10))
    return res.status(400).send({ result: "bad request" });
  const url = `${baseUrl}?key=${key}&cx=${cx}&q=${encodeURI(q)}`;
  try {
    // fetch data from Google custom search API
    const { data, status } = await axios.get(url);
    res.status(200).send({ result: "success", data });
  } catch (e) {
    res.status(400).send({ result: e });
  }
}
