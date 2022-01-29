import axios from "axios";

import { Item, SearchInformation } from "../utils/types";

const URL = "/api/search";

interface Data {
  result: string;
  data: {
    items: Item[];
    searchInformation: SearchInformation;
  };
}

export const getSearchResults = async (ps: string) => {
  try {
    const {
      data: { result, data },
    } = await axios.get<Data>(`${URL}?q=${ps}`);
    // validation
    const { items, searchInformation } = data;
    if (!searchInformation) throw new Error("data is undefined or null");
    if (!Array.isArray(items))
      throw new Error(`invalid response: ${JSON.stringify(items)}`);
    if (result !== "success")
      throw new Error(`result: ${JSON.stringify(result)}`);

    return data;
  } catch (e) {
    if (e instanceof Error) throw e;
    throw new Error(`unknown error: ${e}`);
  }
};
