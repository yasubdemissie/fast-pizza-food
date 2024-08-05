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
      />
    </form>
  );
}

export default SearchOrder;
