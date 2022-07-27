import { useState, useEffect } from "react";

// Importo el selector (nuevo átomo)
import { queryState, resultsState, itemState, resultsItemState } from "../atoms/atoms";

// importo useRecoilValue
import { useRecoilState, useRecoilValue } from "recoil";

import { useParams } from "react-router-dom";

//Este hook usa el hook useParams() de react-router para enterarse de cambios en la URL
export function useSearchResults() {
  // le pide los parámetros al router, y el router le avisa cada vez que cambia
  // 1 - Escucha la URL (params)
  const params = useParams();
  // A su vez le informa a Recoil que este valor cambió y guarda el valor de el param query en un átomo (state) de recoil
  // 3 - Esto hace que cambie el átomo de queryState y que se dispare el selector resultsState
  const [query, setQuery] = useRecoilState(queryState);
  console.log("el valor de query en recoil", query);

  // 
  // 2 - Escucho cambios en los params con useEffect, y le avisamos a recoil (useEffect)
  useEffect(() => {
    // guardar el valor de la query en el átomo: queryState
    setQuery(params.query);
  }, [params.query]);

  // finalmente me engancho a los cambios de resultState
  // 4 - Recibe los resultados del selector resultsState
  const results = useRecoilValue(resultsState);

  return {
    results,
    query
  };
}

// CUSTOM-HOOK ITEMS

export const useItemResults = () => {
  // Escuchamos el params de la URL
  const params = useParams();
  const itemParams = params.id;

  // Obtenemos el state del item de recoil
  const [item, setItem] = useRecoilState(itemState);

  useEffect(() => {
    // seteamos el nuevo parámetro en el state de recoil
    setItem(itemParams);
  }, [itemParams]);

  const resultsItem = useRecoilValue(resultsItemState)
  return resultsItem;
};
