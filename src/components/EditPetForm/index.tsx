import css from "./index.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GreenButon, MainButton, RedButton } from "ui/Buttons";
import { MainTextField } from "ui/TextField";
import { Caption, LinkText } from "ui/Texts";
import { Loader } from "ui/Loader";
import { Message } from "ui/Message";
import { Mapbox } from "components/Mapbox";
import { Dropzone } from "components/Dropzone";
import { usePetData, useImageDataURL, useUserToken } from "hooks";
import { modifiedPet } from "lib/edit-pet";
import { deletePet } from "lib/delete-pet";

export function EditPetForm() {
  const navigate = useNavigate();
  const [petData, setPetData] = usePetData();
  const [imgData, setImgData] = useImageDataURL();
  const [token, setToken] = useUserToken();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const { id, img, last_location_lat, last_location_lng, name, state, ubi } =
    petData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    setError(null);
    // ARMAMOS EL NUEVO OBJETO PARA EDITAR
    const newPetData = {
      id,
      name: e.target.petName.value ? e.target.petName.value : name,
      pictureURL: imgData ? imgData : img,
      state,
      last_location_lat,
      last_location_lng,
      location: ubi,
    };

    const res = await modifiedPet(newPetData, newPetData.id, token);
    if (res.message) {
      setLoader(false);
      setSuccess(res.message);
      setTimeout(() => {
        navigate("/my-pets");
      }, 2500);
    }
  };

  const handleClickDelete = async (e) => {
    e.preventDefault();
    setLoader(true);
    setError(null);

    const resDeletePet = await deletePet(id, token);
    // Si se eliminó correctamente
    if (resDeletePet.message) {
      setLoader(false);
      setSuccess(resDeletePet.message);
      setTimeout(() => {
        navigate("/my-pets");
      }, 2500);
    }
    // Si no se pudo eliminar y devuelve error
    if (resDeletePet.error) {
      setLoader(false);
      setError(resDeletePet.error);
    }
  };

  const handleClickState = async (e) => {
    e.preventDefault();

    if (state == "PERDIDO") {
      setPetData({ ...petData, state: "ENCONTRADO" });
    }

    if (state == "ENCONTRADO") {
      setPetData({ ...petData, state: "PERDIDO" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.editForm}>
      <MainTextField type="text" name="petName" value={name}>
        Nombre
      </MainTextField>

      <Dropzone />

      <Caption>
        Buscá un punto de referencia para reportar a tu mascota. Puede ser una
        dirección, un barrio o una ciudad.
      </Caption>

      <Mapbox />

      <span>
        <MainButton>Guardar</MainButton>
      </span>

      <span onClick={handleClickState}>
        {state == "PERDIDO" ? (
          <GreenButon>Reportar Como Encontrado</GreenButon>
        ) : (
          <RedButton>Reportar Como Perdido</RedButton>
        )}
      </span>

      <span onClick={handleClickDelete}>
        <LinkText page={"login"}>Despublicar</LinkText>
      </span>

      {loader && <Loader />}
      {error && <Message msg={error} clas={"error"} />}
      {success && <Message msg={success} clas={"success"} />}
    </form>
  );
}
