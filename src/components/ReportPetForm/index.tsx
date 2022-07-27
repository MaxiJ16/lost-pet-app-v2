import { useNavigate } from "react-router-dom";
import { GreenButon, GreyButton, MainButton, RedButton } from "ui/Buttons";
import { MainTextField } from "ui/TextField";
import { Caption } from "ui/Texts";
import { Link } from "react-router-dom";
import css from "./index.css";

export function ReportPetForm() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const petName = e.target.petName.value;
    const location = e.target.location.value;

    console.log(petName, location);
  };

  return (
    <form onSubmit={handleSubmit} className={css.reportForm}>
      <MainTextField type="text" name="petName">
        Nombre
      </MainTextField>
      <GreenButon>Agregar/Modificar Foto</GreenButon>
      <Caption>
        Buscá un punto de referencia para reportar a tu mascota. Puede ser una
        dirección, un barrio o una ciudad.
      </Caption>
      <MainTextField type="text" name="location">
        Ubicación
      </MainTextField>
      <RedButton>Buscar</RedButton>
      <MainButton>Reportar Como Perdido</MainButton>
      <GreyButton><Link to="/" className={css.cancel}>Cancelar</Link></GreyButton>
    </form>
  );
}
