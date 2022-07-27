import React from "react";

import css from "./index.css";
import { Caption } from "ui/Texts";

// type inputProps = {
//   type: string;
//   name: string;
// };

// export function MainTextField(props: inputProps) {
//   const { type, name } = props;
//   return (
//     <input
//       type={type}
//       name={name}
//       className={css.root}
//       placeholder="Estoy buscando..."
//     ></input>
//   );
// }

// TEXT FIEL LOGIN

type loginProps = {
  type: string;
  name: string;
  children: string;
};

export function MainTextField(props: loginProps) {
  const { type, name, children } = props;

  return (
    <div>
      <label>
        <Caption>{children}</Caption>
      </label>
      <input type={type} name={name} className={css.login} required></input>
    </div>
  );
}
