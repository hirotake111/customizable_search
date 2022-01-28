const URL = "/api/search";
export const getSearchResults = async (ps: string): Promise<any> => {
  try {
    const response = await fetch(`${URL}?q=${ps}`);
    const data = await response.json();
    return data;
  } catch (e) {
    if (e instanceof Error) throw e;
    throw new Error(`unknown error: ${e}`);
  }
};
