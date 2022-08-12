import { API_BASE_URL } from "hooks";

export async function createReportInfo(reportData) {
  try {
    const resReport = await fetch(API_BASE_URL + `/report`, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reportData),
    });

    const data = await resReport.json();

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
