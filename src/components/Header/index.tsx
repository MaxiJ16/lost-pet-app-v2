import { BurguerMenu, NavbarMenuXl } from "components/BurguerMenu";
import { Paw } from "ui/Paw";
import css from "./index.css";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={css.header}>
      <Paw />
      <BurguerMenu open={open} handleClick={handleClick} />
      <NavbarMenuXl/>
    </div>
  );
}
