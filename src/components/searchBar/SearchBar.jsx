import { useState } from "react";
import "./searchBar.scss";

const types = ["buy", "rent"];
const SearchBar = () => {
  const [query, setQuery] = useState({
    location: "",
    minPrice: 0,
    maxPrice: 0,
    type: "buy",
  });
  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type, index) => (
          <button
            key={index}
            onClick={() => setQuery({ ...query, type })}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form action="">
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={100000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={100000}
          placeholder="Max Price"
        />
        <button type="submit">
          <img src="/search.png" alt="search" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
