export interface Item {
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

export interface SearchInformation {
  totalResults: number;
  searchTime: number;
  formattedTotalResults: string;
  formattedSearchTime: string;
}
