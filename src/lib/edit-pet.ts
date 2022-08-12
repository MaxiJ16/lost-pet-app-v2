import { API_BASE_URL } from "hooks";

export async function modifiedPet(petData, petId, token) {
  try {
    const resModifiedPet = await fetch(API_BASE_URL + `/pet/${petId}`, {
      method: "PUT",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "content-type": "application/json",
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify(petData),
    });
    const data = await resModifiedPet.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
