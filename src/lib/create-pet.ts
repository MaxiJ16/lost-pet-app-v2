import { API_BASE_URL } from "hooks";

export async function createPet(petData, token) {
  try {
    const resNewPet = await fetch(API_BASE_URL + `/pet`, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify(petData),
    });

    const data = await resNewPet.json();

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
