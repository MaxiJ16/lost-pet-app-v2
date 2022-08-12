import css from "./index.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { GreyButton, MainButton } from "ui/Buttons";
import { MainTextField } from "ui/TextField";
import { Caption } from "ui/Texts";
import { Loader } from "ui/Loader";
import { Message } from "ui/Message";
import { Mapbox } from "components/Mapbox";
import { Dropzone } from "components/Dropzone";
import { createPet } from "lib/create-pet";
import { useImageDataURL, usePetData, useUserToken } from "hooks";

export function ReportPetForm() {
  const navigate = useNavigate();
  const [imgData, setImgData] = useImageDataURL();
  const [token, setToken] = useUserToken();
  const [petData, setPetData] = usePetData();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    setError(null);
    // DEJAMOS EL OBJETO LISTO PARA SETEAR
    const reportPetData = {
      name: e.target.petName.value,
      pictureURL: imgData,
      state: "PERDIDO",
      last_location_lat: petData.last_location_lat,
      last_location_lng: petData.last_location_lng,
      location: petData.location,
    };

    if (
      reportPetData.pictureURL &&
      reportPetData.state &&
      reportPetData.last_location_lat &&
      reportPetData.last_location_lng &&
      reportPetData.location
    ) {
      const resNewPet = await createPet(reportPetData, token);
      if (resNewPet.message) {
        setLoader(false);
        setSuccess(resNewPet.message);
        setTimeout(() => {
          navigate("/my-pets");
        }, 2500);
      }
      if (resNewPet.error) {
        setLoader(false);
        setError(resNewPet.error);
      }
    } else {
      setLoader(false);
      setError("Faltan datos de la mascota");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.reportForm}>
      <MainTextField type="text" name="petName">
        Nombre
      </MainTextField>

      <Dropzone />

      <Caption>
        Buscá un punto de referencia para reportar a tu mascota. Puede ser una
        dirección, un barrio o una ciudad.
      </Caption>

      <Mapbox />

      <MainButton>Reportar Como Perdido</MainButton>

      <GreyButton>
        <Link to="/" className={css.cancel}>
          Cancelar
        </Link>
      </GreyButton>
      {loader && <Loader />}
      {error && <Message msg={error} clas={"error"} />}
      {success && <Message msg={success} clas={"success"} />}
    </form>
  );
}
