import css from "./index.css";

export function Loader() {
  return (
    <div className={css.container}>
      <div className={css.loader}></div>
    </div>
  )
}

export function LoaderSuspense() {
  return (
    <div className={css.suspense}>
      <div className={css.loader}></div>
    </div>
  )
}

