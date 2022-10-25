import css from "./index.css";
import { useState } from "react";
import { BurguerMenu } from "components/BurguerMenu";
import { NavbarMenuXl } from "components/Navbar";
import { Paw } from "ui/Paw";

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
