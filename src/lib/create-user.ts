import { API_BASE_URL } from "hooks";

type userData = {
  fullname: string;
  email: string;
  password: string;
};

export async function createUser(userData: userData) {
  try {
    const res = await fetch(API_BASE_URL + "/auth", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
