// imagenes
import burguer from "assets/menu.png";
import x from "assets/x.png";
import { Subtitle, SubtitleBold } from "ui/Texts";

import { Link } from "react-router-dom";

//css
import css from "./index.css";

export function BurguerMenu({ open, handleClick }) {
  return !open ? (
    <img src={burguer} onClick={handleClick} className={css.burguer}></img>
  ) : (
    <NavbarMenu open={open} handleClick={handleClick} />
  );
}

export function NavbarMenu(props: { open?; handleClick? }) {
  return props.open ? (
    <div className={css.menuSm}>
      <div className={css["menuSm__containerX"]}>
        <img src={x} onClick={props.handleClick} alt="x" className={css.x} />
      </div>
      <div className={css["menuSm__contents"]}>
        <Link to="/my-data" className={css["menuSm__contents-title"]}>
          <SubtitleBold>Mis datos</SubtitleBold>
        </Link>
        <Link to="/my-pets" className={css["menuSm__contents-title"]}>
          <SubtitleBold>Mis mascotas reportadas</SubtitleBold>
        </Link>
        <Link to="/report-pet" className={css["menuSm__contents-title"]}>
          <SubtitleBold>Reportar mascota</SubtitleBold>
        </Link>

        <div className={css["session-data"]}>
          <h2 className={css["data-email"]}>
            {/* ${this.email && this.token !== "" ? this.email : "Invitado/a"} */}
            Email
          </h2>
          <h2 className={css["menuSm__contents-title"]}>
            {/* $
            {this.email && this.token !== "" ? "Cerrar Sesión" : "Iniciar Sesión"} */}
            Sesion
          </h2>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export function NavbarMenuXl() {
  return (
    <div className={css.menuXl}>
      <Link className={css.navbarLink} to={"/my-data"}>
        <Subtitle>Mis datos</Subtitle>
      </Link>
      <Link className={css.navbarLink} to={"/my-pets"}>
        <Subtitle>Mis mascotas reportadas</Subtitle>
      </Link>
      <Link className={css.navbarLink} to={"/report-pet"}>
        <Subtitle>Reportar mascota</Subtitle>
      </Link>
      <span className={css.navbarLink}>
        <SubtitleBold>Email</SubtitleBold>
      </span>
      <span className={css.navbarLink}>
        <Subtitle>Sesion</Subtitle>
      </span>
    </div>
  );
}
