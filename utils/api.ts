const URL = "/api/search";
export const getSearchResults = async (ps: string): Promise<any> => {
  try {
    const response = await fetch(`${URL}?q=${ps}`);
    const data = await response.json();
    console.log({ data });
    return data;
  } catch (e) {
    if (e instanceof Error) throw e;
    throw new Error(`unknown error: ${e}`);
  }
};
