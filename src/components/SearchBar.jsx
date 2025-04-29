const types = [
  "",
  "fire",
  "water",
  "grass",
  "electric",
  "bug",
  "normal",
  "poison",
  "ground",
  "fairy",
  "fighting",
  "psychic",
  "rock",
  "ghost",
  "ice",
  "dragon",
  "dark",
  "steel",
  "flying",
];

function SearchBar({
  searchTerm,
  setSearchTerm,
  selectedType,
  setSelectedType,
}) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Pokémon..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        {types.map((type) => (
          <option key={type} value={type}>
            {type ? type.charAt(0).toUpperCase() + type.slice(1) : "All Types"}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SearchBar;
