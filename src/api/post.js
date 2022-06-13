import { ORIGIN } from "../config";

 export const post = async (path, value) => {
  const url = encodeURI(`${ORIGIN}${path}`);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(value),
  });
  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
  const result = await response.json();
  // console.log("add", result);
  return result;
};


