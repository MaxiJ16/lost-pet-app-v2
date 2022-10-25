import { API_BASE_URL } from "hooks";

// CHEQUEAR EMAIL
export async function checkEmail(email) {
  try {
    const res = await fetch(`${API_BASE_URL}/auth/emailCheck`, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}

// INICIAR SESIÓN
// Esta función recibe un email y una password, y retorna un token
export async function loginToApi(email, password) {
  try {
    const res = await fetch(API_BASE_URL + "/auth/token", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
