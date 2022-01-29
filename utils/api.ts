const URL = "/api/search";

interface Item {
  kind: string;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  cacheId: string;
  formattedUrl: string;
  htmlFormattedUrl: string;
  pagemap: {
    cse_thumbnail: [
      {
        src: string;
        width: string;
        height: string;
      }
    ];
    metatags: [
      {
        "og:image": string;
        "og:type": string;
        "fb:app_id": string;
        "theme-color": string;
        viewport: string;
      }
    ];
    cse_image: [
      {
        src: string;
      }
    ];
  };
}

interface Data {
  items: Item[];
  searchInformation: {
    searchTime: number;
    formattedSearchTime: string;
    totalResults: number;
    formattedTotalResults: string;
  };
}

export const getSearchResults = async (ps: string): Promise<any> => {
  try {
    const response = await fetch(`${URL}?q=${ps}`);
    const { result, data } = await response.json();
    console.log({ result, data });
    // validation
    const { items, searchInformation } = data;
    if (!searchInformation) throw new Error("data is undefined or null");
    if (!Array.isArray(items))
      throw new Error(`invalid response: ${JSON.stringify(items)}`);
    if (result !== "success")
      throw new Error(`result: ${JSON.stringify(result)}`);

    return { items, searchInformation };
  } catch (e) {
    if (e instanceof Error) throw e;
    throw new Error(`unknown error: ${e}`);
  }
};
