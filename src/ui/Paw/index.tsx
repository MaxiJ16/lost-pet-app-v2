import patita from "assets/patita.png";

import { useNavigate } from "react-router-dom";

export function Paw() {
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()
    navigate(`/`, { replace: true });
  }

  return <img src={patita} onClick ={handleClick} alt="patita" width="auto" height="auto" srcSet={patita}></img>;
}
