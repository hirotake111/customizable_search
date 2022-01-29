import { SearchInformation } from "../utils/types";

export default function SearchInfor({
  totalResults,
  formattedTotalResults,
  searchTime,
  formattedSearchTime,
}: SearchInformation) {
  return (
    <span className="text-sm text-gray-500">{`About ${formattedTotalResults} results (${formattedSearchTime} seconds)`}</span>
  );
}
