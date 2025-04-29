function PokemonCard({ pokemon }) {
  return (
    <div className="pokemon-card">
      <img
        src={pokemon?.sprites?.front_default}
        alt={pokemon.name}
        className="pokemon-image"
      />
      <h3 className="pokemon-name">
        {pokemon.name
          ? pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
          : ""}
      </h3>
      <p className="pokemon-id">ID: #{pokemon.id}</p>
      <div className="types">
        {pokemon.types.map((typeInfo) => (
          <span
            key={typeInfo.type.name}
            className={`type ${typeInfo.type.name}`}
          >
            {typeInfo.type.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;
