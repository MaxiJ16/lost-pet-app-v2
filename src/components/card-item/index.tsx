import { Link } from "react-router-dom";

import css from "./index.css"

type propsSearchResultItem = {
  title: string;
  price: number;
  picture: string;
  link: string;
  city: string;
};

export function SearchResultItem(props: propsSearchResultItem) {
  const { title, price, picture, link, city } = props;

  return (
    <div className={css.card}>
      <img src={picture} alt="img" className={css.picture} />
      <div className={css.data}>
        <h2 className={css.title}>{title}</h2>
        <h3 className={css.price}>{`$ ${price}`}</h3>
        <span className={css.city}>{city}</span>
        <Link to={link} className={css.link}>Ver más</Link>
      </div>
    </div>
  );
}
