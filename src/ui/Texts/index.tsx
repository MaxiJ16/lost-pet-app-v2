import css from "./index.css";

export function Title(props: {children: string}) {
  return <h1 className={css.title}>{props.children}</h1>;
}

export function Subtitle(props: {children: string}) {
  return <h2 className={css.subtitle}>{props.children}</h2>;
}

export function SubtitleBold(props: {children}) {
  return <h2 className={css.subtitleBold}>{props.children}</h2>;
}

export function BodyText(props: {children: string}) {
  return <h4 className={css.body}>{props.children}</h4>;
}

export function BodyBold(props: {children}) {
  return <p className={css.bodyBold}>{props.children}</p>;
}

export function Caption(props: {children: string}) {
  return <p className={css.caption}>{props.children}</p>;
}

export function LinkText(props: {children: string, page?}) {
  return <h4 className={css[`link-${props.page}`]}>{props.children}</h4>;
}
