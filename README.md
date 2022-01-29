# Customizable Search App (Google-ish)

Customizable seach app that uses Google custom search API on its backend.

[Custom Search JSON API: Introduction](https://developers.google.com/custom-search/v1/introduction)

[Using REST to Invoke the API](https://developers.google.com/custom-search/v1/using_rest#search_results)

### Technologies Used

- [React.js ](https://reactjs.org/) / [Next.js](https://nextjs.org/)
- [Tailwind.css](https://tailwindcss.com/)
- [Goole Custom Search API](https://developers.google.com/custom-search/v1/overview)

### Approach Taken

I started out this project by imitating Google front page, which is great way to get to know how Tailwind.css works. After my front page and search result page is done, I created my API key for Google custom search API and performed a few HTTP requests to sample JSON payload from the API. Then I updated the result page so that it looks exactly like the same as the Google's.

### Set Environment Variables

- GOOGLE_SEARCH_API_KEY
- GOOGLE_SEARCH_CONTEXT
