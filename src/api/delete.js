import { ORIGIN } from "../config";

export const Delete = async (value = "", id = 0) => {
  const category = value;
  const path = `${category}/${id}`;
  const url = encodeURI(`${ORIGIN}${path}`);
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
  const result = await response.json();
  // console.log("delete", result);
  return result;
};
