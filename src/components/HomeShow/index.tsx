import css from "./index.css";
import { useState } from "react";
import { lostPetsNearby } from "lib/lost-pets-nearby";
import { PetCard } from "components/PetCard";
import { MainButton } from "ui/Buttons";
import { Caption, Title } from "ui/Texts";
import { Loader } from "ui/Loader";
import petImgLocation from "assets/ubicacion.png";

export function HomeShow() {
  const [res, setRes] = useState(null);
  const [loader, setLoader] = useState(false);

  // Le pedimos la ubicación al usuario
  const handleClick = () => {
    setLoader(true);
    navigator.geolocation.getCurrentPosition(async (geolocation) => {
      const lat = geolocation.coords.latitude;
      const lng = geolocation.coords.longitude;

      const response = await lostPetsNearby(lat, lng);

      if (response) {
        setRes(response);
        setLoader(false);
      }
    });
  };
  return res !== null ? (
    <section className={css.container}>
      <Title>Mascotas perdidas cerca tuyo</Title>

      {res.length > 0 ? (
        <div className={css.card}>
          {res.findPet.map((r) => (
            <PetCard
              img={r.pictureURL}
              name={r.name}
              ubi={r.location}
              state={r.state}
              key={r.id}
              id={r.id}
              last_location_lat={r.last_location_lat}
              last_location_lng={r.last_location_lng}
            />
          ))}
        </div>
      ) : (
        <Caption>No hay mascotas cerca tuyo</Caption>
      )}
    </section>
  ) : (
    <section className={css.home}>
      <Title>Mascotas perdidas cerca tuyo</Title>
      <div className={css["container-form"]}>
        <img src={petImgLocation} alt="location" className={css.locationImg}/>
        <Caption>
          Para ver las mascotas reportadas cerca tuyo necesitamos permiso para
          conocer tu ubicación.
        </Caption>
        <MainButton Click={handleClick}>Dar mi ubicación</MainButton>
        {loader && <Loader />}
      </div>
    </section>
  );
}
