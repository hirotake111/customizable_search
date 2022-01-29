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

  if (!(q && typeof q === "string" && cx.length > 10)) {
    res.status(400).send({ result: "bad request" });
    return;
  }
  try {
    const url = `${baseUrl}?key=${key}&cx=${cx}&q=${encodeURI(q)}`;
    if (config.key.length < 10) {
      // use mock data
      const data = await getMockData(url);
      res.status(200).send({ result: "success", data });
      return;
    }
    // fetch data from Google custom search API
    const { data, status } = await axios.get(url, {});
    res.status(200).send({ result: "success", data });
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).send({
        result: e,
      });
      return;
    }
    res.status(500).send({
      result: "Error white getting data from Google custom search API",
    });
  }
}
