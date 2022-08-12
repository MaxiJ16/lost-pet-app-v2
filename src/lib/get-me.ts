import { API_BASE_URL } from "hooks";

//OBTIENE LA DATA DEL USUARIO CON EL TOKEN Y LA RETORNA

export async function getMe(token) {
  try {
    const res = await fetch(API_BASE_URL + "/me", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `bearer ${token}`,
      },
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
