// Un atom es un valor que está pensado (es decir la libreria esta pensada) para dividir todo nuestro state en pequenos atomos que van a ir guardando valores
import { atom, selector } from "recoil";

// ÁTOMOS QUERY

// guarda el valor de el param query en un átomo (state) de recoil
export const queryState = atom({
  key: "query",
  default: "",
});

// selector de results
// El cambio del átomo query debe disparar un selector de Recoil que invoque a la API y devuelva los resultados a mostrar.
export const resultsState = selector({
  key: "searchResults",
  get: async ({ get }) => {
    const queryValue = get(queryState);
    if (queryValue) {
      // hago la búsqueda usando la API de mercadolibre
      const res = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${queryValue}`);
      const data = await res.json();
      return data.results;
    } else {
      return [];
    }
  },
});

// ÁTOMOS ITEM

export const itemState = atom({
  key: "item",
  default: "",
});

// selector de item

export const resultsItemState = selector({
  key: "itemResults",
  get: async ({get}) => {
    //Obtenemos el valor de el átomo item
    const itemValue = get(itemState)

    if(itemValue){
      const res = await fetch(`https://api.mercadolibre.com/items/${itemValue}`);
      const data = await res.json();
      return data;
    } else {
      return []
    }
  }
})