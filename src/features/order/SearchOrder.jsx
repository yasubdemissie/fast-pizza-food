import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (query === "") return;
    navigate(`/order/${query}`);
  }
  return (
    <form onSubmit={handleSubmit}> 
      <input
        type="text"
        name="search"
        placeholder="Search Order"
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="rounded-full py-1 px-4 text-sm w-28 sm:w-64 text-yellow-900 bg-yellow-100
        placeholder:text-yellow-800 focus:outline-none focus:ring focus:ring-yellow-600 focus:ring-offset-2"
      />
    </form>
  );
}

export default SearchOrder;
