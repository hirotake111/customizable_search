import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

import { config } from "../../config";
import { encode } from "punycode";
import { getMockData } from "../../utils/mockData";

const baseUrl = "https://www.googleapis.com/customsearch/v1";
// https://www.googleapis.com/customsearch/v1?key=INSERT_YOUR_API_KEY&cx=017576662512468239146:omuauf_lfve&q=lectures

export default async function searchHandler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  return new Promise(async (resolve) => {
    const { key, cx } = config;
    const { q } = req.query;
    if (!(q && typeof q === "string" && key.length > 10 && cx.length > 10))
      return resolve(res.status(400).send({ result: "bad request" }));
    const url = `${baseUrl}?key=${key}&cx=${cx}&q=${encodeURI(q)}`;
    // const url = "https://www.google.com";
    try {
      // const { data, status } = await axios.get(url);
      const data = await getMockData(url);
      resolve(res.status(200).send({ result: data }));
    } catch (e) {
      resolve(res.status(400).send({ result: e }));
    }
    // https://content-customsearch.googleapis.com/customsearch/v1?q=react%20js
    // https://customsearch.googleapis.com/customsearch/v1&cx=f071bf7789cd54c9f&q=react%20js
    // setTimeout(() => {
    //   resolve(res.status(200).send({ result: q }));
    // }, 2000);
  });
}
