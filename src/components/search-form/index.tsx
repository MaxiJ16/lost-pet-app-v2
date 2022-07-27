import { useNavigate, Link } from "react-router-dom";

import { MainButton } from "ui/Buttons";
import { Paw } from "ui/Paw";
import { MainTextField } from "ui/TextField";

import css from "./search-form.css";

type propsSearchForm = {
  onSearch?(any);
};

// SearchForm se encarga de leer que quisiste buscar y mandarte a la próxima página
export function SearchForm(props: propsSearchForm) {
  const { onSearch } = props;
  // navigate es un hook de react-router-dom, y me lleva a otra ruta sin problemas
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.query.value;

    // le decimos que queremos ir a /search/elproductoquebuscamos
    navigate(`/search/${query}`, { replace: true });

    // El comp searchForm está preparado para invocar una prop que se llama onSearch cuando apreten el botón Buscar

    if (onSearch) {
      onSearch(query);
    }
  };
  return (
    <form onSubmit={handleSubmit} className={css["root-search-form"]}>
      <Paw/>
      <a className={css.img} href="/"></a>
      {/* <MainTextField type="text" name="query" /> */}
      <MainButton>Buscar</MainButton>
    </form>
  );
}
