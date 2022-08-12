import { API_BASE_URL } from "hooks";

export async function newPassword(authData: {
  email: string;
  password: string;
}) {
  try {
    const resNewPassword = await fetch(API_BASE_URL + "/auth/forgot", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authData),
    });

    const data = await resNewPassword.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
