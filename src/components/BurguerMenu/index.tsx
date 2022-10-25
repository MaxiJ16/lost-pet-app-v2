import css from "./index.css";
import burguer from "assets/menu.png";
import { NavbarMenu } from "components/Navbar";


export function BurguerMenu({ open, handleClick }) {
  return !open ? (
    <img src={burguer} onClick={handleClick} className={css.burguer} alt="menu" width="auto" height="auto"></img>
  ) : (
    <NavbarMenu open={open} handleClick={handleClick} />
  );
}

