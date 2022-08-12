import { API_BASE_URL } from "hooks";

//OBTIENE LA DATA DEL USUARIO CON EL TOKEN Y LA RETORNA

export async function userPets(token) {
  try {
    const resUserPets = await fetch(API_BASE_URL + `/pet/allUserPets`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `bearer ${token}`,
      },
    });

    const data = await resUserPets.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
