import { API_BASE_URL } from "hooks";

export async function modifiedUser(userData: { fullname; password }, token) {
  try {
    const res = await fetch(API_BASE_URL + "/auth", {
      method: "PUT",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "content-type": "application/json",
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify(userData),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
