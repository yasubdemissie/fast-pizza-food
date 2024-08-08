import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (query === '') return;
    navigate(`/order/${query}`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        placeholder="Search Order"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-20 rounded-full bg-yellow-100 px-3 py-0.5 text-[9px] text-yellow-900 placeholder:text-yellow-800 focus:outline-none focus:w-28 transition-all duration-500 focus:ring focus:ring-yellow-400 focus:ring-offset-0.5 sm:w-64 sm:px-5 sm:py-2 sm:text-sm"
      />
    </form>
  );
}

export default SearchOrder;
