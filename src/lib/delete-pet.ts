import { API_BASE_URL } from "hooks";

export async function deletePet(petId, token) {
  try {
    const resDeletePet = await fetch(API_BASE_URL + `/pet/${petId}`, {
      method: "DELETE",
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `bearer ${token}`,
      },
    });
    const data = await resDeletePet.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
