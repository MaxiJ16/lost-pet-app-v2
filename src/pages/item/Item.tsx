// importamos el carousel para mostrar las imágenes
import Carousel from "nuka-carousel";
// importamos el custom-hook que nos trae el resultado de la búsqueda
import { useItemResults } from "hooks";

import css from "./item.css";
// import { ProductButton } from "ui/Buttons";

// SearchResults lee el parámetro y hace la búsqueda
export function ItemPage() {
  const itemResults = useItemResults();
  const { pictures, title, permalink } = itemResults;

  return (
    <div className={css.container}>
      <h3 className={css.title}>{title}</h3>
      <Carousel>
        {pictures ? pictures.map((p) => (
              <img src={p.url} alt={p.url} className={css.img} key={p.url} />
            ))
          : ""}
      </Carousel>
      {/* <ProductButton children={permalink}></ProductButton> */}
    </div>
  );
}
