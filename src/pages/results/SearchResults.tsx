import React from "react";
// importamos el componente de nuestra card para mostrar los productos
import { SearchResultItem } from "../../components/card-item";

// Obtenemos los resultados de búsqueda con nuestro custom hook
import { useSearchResults } from "../../hooks";

import css from "./searchResults.css";

export function SearchResults() {
  const results = useSearchResults().results;
  const query = useSearchResults().query;

  return (
    <div>
      <h3 className={css.query}>{query}</h3>
      <div className={css.results}>
        {results.map((r) => (
          <div>
            <SearchResultItem
              city={`${r.address.city_name} - ${r.address.state_name}`}
              key={r.id}
              picture={r.thumbnail}
              title={r.title}
              price={r.price}
              link={`/item/${r.id}`}
            ></SearchResultItem>
          </div>
        ))}
      </div>
    </div>
  );
}
