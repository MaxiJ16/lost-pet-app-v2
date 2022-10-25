import css from "./index.css";
import lapiz from "assets/lapiz.png";
import { BodyText, Caption, SubtitleBold } from "ui/Texts";
import { Modals } from "components/ModalsReportInfo/Modals";
import { Link } from "react-router-dom";

import { usePetData } from "hooks";

type propsPetCard = {
  img: string;
  name: string;
  ubi: string;
  state: string;
  id?: number;
  last_location_lat?;
  last_location_lng?;
};

export function PetCard(props: propsPetCard) {
  const [petData, setPetData] = usePetData();

  const { img, name, ubi, state, id, last_location_lat, last_location_lng } =
    props;

  return (
    <div className={css.container}>
      <div className={css["container-img"]}>
        <img src={img} alt="pet" className={css.img} />
      </div>

      <div className={css["container-content"]}>
        <div className={css["content-text"]}>
          <SubtitleBold>{name}</SubtitleBold>
          <BodyText>{ubi}</BodyText>
          {state == "PERDIDO" ? <span className={css.lost}><Caption>{state}</Caption></span> : <span className={css.found}><Caption>{state}</Caption></span>}
        </div>

        {location.pathname !== "/my-pets" ? (
          <Modals dataPet={props} />
        ) : (
          <Link to={"/edit-pet"}>
            <img
              src={lapiz}
              className={css.pencil}
              onClick={() => setPetData(props)}
            ></img>
          </Link>
        )}
      </div>
    </div>
  );
}
