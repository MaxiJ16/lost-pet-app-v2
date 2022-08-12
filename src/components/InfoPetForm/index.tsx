import css from "./index.css";
import React, { useState } from "react";
import { createReportInfo } from "lib/create-reportInfo";
import { Caption, Title } from "ui/Texts";
import { MainTextField } from "ui/TextField";
import { MainButton } from "ui/Buttons";
import { Loader } from "ui/Loader";
import { Message } from "ui/Message";

export function InfoPetForm({ dataPet }) {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    setError(null);
    // Creamos el objeto para armar el reporte
    const reportedData = {
      reporter: e.target.name.value,
      phone_number: e.target.phone.value,
      message: e.target.where.value,
      petId: dataPet.id,
    };

    const reportRes = await createReportInfo(reportedData);
    console.log(reportRes);

    if (reportRes) {
      setLoader(false);
      setSuccess(reportRes.mensaje);
    } else {
      setLoader(false);
      setError(reportRes.error);
    }
  };
  return (
    <form className={css["reportInfo-form"]} onSubmit={handleSubmit}>
      <Title>{"Reportar info de " + dataPet.name}</Title>

      <MainTextField type="text" name="name">
        TU NOMBRE
      </MainTextField>
      <MainTextField type="text" name="phone">
        TU TELÉFONO
      </MainTextField>

      <label className="label">
        <Caption>DONDE LO VISTE?</Caption>
        <textarea
          className={css.textarea}
          id="where"
          name="where"
          required
        ></textarea>
      </label>

      <MainButton>Enviar</MainButton>
      {loader && <Loader />}
      {error && <Message msg={error} clas={"error"} />}
      {success && <Message msg={success} clas={"success"} />}
    </form>
  );
}
