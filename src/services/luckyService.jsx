// services/luckyService.js
const BASE_URL = "https://kolby-nonstretchable-away.ngrok-free.dev";

export async function getLuckyNumber() {
  try {
    const response = await fetch(
      `${BASE_URL}/ksonline/api/web/app/lucky/number`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true", // Bypasses ngrok landing page (CORS Error about "Access-Control-Allow-Origin)
        },
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("data:", data);

    // Defensive parsing in case data structure varies
    const ankArray = data?.response?.ank ? data.response.ank.split("-") : [];
    const finalAnkArray = data?.response?.finalAnk
      ? data.response.finalAnk.split(" ")
      : [];

    console.log("ank and final ank:", ankArray, finalAnkArray);

    return { ankArray, finalAnkArray };
  } catch (error) {
    console.error("Error fetching lucky number:", error);
    return { ankArray: [], finalAnkArray: [] };
  }
}
