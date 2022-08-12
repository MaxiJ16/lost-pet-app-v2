import css from "./index.css";
import x from "assets/x.png";
import { SubtitleBold } from "ui/Texts";
import { useUserToken, useUserEmail } from "hooks";
import { Link, useNavigate } from "react-router-dom";

export function NavbarMenu(props: { open?; handleClick? }) {
  const navigate = useNavigate();

  const [userToken, setUserToken] = useUserToken();
  const [userEmail, setUserEmail] = useUserEmail();

  const SessionClick = () => {
    props.handleClick();
    if (userToken) {
      localStorage.removeItem("data");
      navigate("/");
      location.reload();
    } else {
      navigate("/auth");
    }
  };

  return (
    <div className={css.menuSm}>
      <div className={css["menuSm__containerX"]}>
        <img src={x} onClick={props.handleClick} alt="x" className={css.x} />
      </div>
      <div className={css["menuSm__contents"]}>
        <Link
          to={userToken ? "/my-data" : "/auth"}
          className={css["menuSm__contents-title"]}
          onClick={props.handleClick}
        >
          <SubtitleBold>Mis datos</SubtitleBold>
        </Link>
        <Link
          to={userToken ? "/my-pets" : "/auth"}
          className={css["menuSm__contents-title"]}
          onClick={props.handleClick}
        >
          <SubtitleBold>Mis mascotas reportadas</SubtitleBold>
        </Link>
        <Link
          to={userToken ? "/report-pet" : "/auth"}
          className={css["menuSm__contents-title"]}
          onClick={props.handleClick}
        >
          <SubtitleBold>Reportar mascota</SubtitleBold>
        </Link>

        <div className={css["session-data"]}>
          <h2 className={css["data-email"]}>
            {userEmail && userToken !== "" ? userEmail : "Invitado/a"}
          </h2>

          <a onClick={SessionClick}>
            <h2 className={css.linkSession}>
              {userEmail && userToken !== ""
                ? "Cerrar Sesión"
                : "Iniciar Sesión"}
            </h2>
          </a>
        </div>
      </div>
    </div>
  );
}

export function NavbarMenuXl() {
  const navigate = useNavigate();
  const [userToken, setUserToken] = useUserToken();
  const [userEmail, setUserEmail] = useUserEmail();

  const SessionClick = () => {
    if (userToken) {
      localStorage.removeItem("data");
      navigate("/");
      location.reload();
    } else {
      navigate("/auth");
    }
  };

  return (
    <div className={css.menuXl}>
      <Link className={css.navbarLink} to={userToken ? "/my-data" : "/auth"}>
        <SubtitleBold>Mis datos</SubtitleBold>
      </Link>
      <Link className={css.navbarLink} to={userToken ? "/my-pets" : "/auth"}>
        <SubtitleBold>Mis mascotas reportadas</SubtitleBold>
      </Link>
      <Link className={css.navbarLink} to={userToken ? "/report-pet" : "/auth"}>
        <SubtitleBold>Reportar mascota</SubtitleBold>
      </Link>

      <a className={css.navbarLink}>
        <h2 className={css.email}>
          {userEmail && userToken !== "" ? userEmail : "Invitado/a"}
        </h2>
      </a>

      <a className={css.navbarLink} onClick={SessionClick}>
        <h2 className={css.linkSession}>
          {userEmail && userToken !== "" ? "Cerrar Sesión" : "Iniciar Sesión"}
        </h2>
      </a>
    </div>
  );
}
