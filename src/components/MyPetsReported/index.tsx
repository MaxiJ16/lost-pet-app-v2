import css from "./index.css";
import { useEffect, useState } from "react";
import { Title } from "ui/Texts";
import { PetCard } from "components/PetCard";
import { useUserToken } from "hooks";
import { userPets } from "lib/user-pets";
import { useNavigate } from "react-router-dom";

export function MyPetsReported() {
  const navigate = useNavigate()
  const [res, setRes] = useState({} as any);
  const [token, setToken] = useUserToken();

  const myPetsReports = async () => {
    const myPetsCallApi = await userPets(token);
    await setRes(myPetsCallApi);
  };

  useEffect(() => {
    myPetsReports();
  }, []);

  return (
    <section className={css.myPet}>
      <Title>Mis Mascotas Reportadas</Title>

      {res.amount > 0 ? (
        <div className={css.cardsContainer}>
          {res.allPets.map((r) => (
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
        <div className={css.noReports}>
          <span>Aún no tienes mascotas reportadas</span>
          <button className={css.btnReport} onClick={() => navigate("/report-pet")}>Reportar Mascota</button>
        </div>
      )}
    </section>
  );
}
