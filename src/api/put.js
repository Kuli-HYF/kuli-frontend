import { ORIGIN } from "../config";

export const put = async (search = "", value = {}) => {
  const path = search;
  const body = value;
  const url = encodeURI(`${ORIGIN}${path}`);
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
  const result = await response.json();
  // console.log("update", result);
  return result;
};
