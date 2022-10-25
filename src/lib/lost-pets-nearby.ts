import { API_BASE_URL } from "hooks";

export async function lostPetsNearby(lat, lng) {
  try {
    const res = await fetch(
      API_BASE_URL + `/lostPetNear?lat=${lat}&lng=${lng}`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
