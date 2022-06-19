import { ORIGIN } from "../config.js";

export const populate = async (search = "") => {
  const URL = `${ORIGIN}companies?populate=${search}`;
  const encodeURL = encodeURI(URL);
  const searchPromise = await fetch(encodeURL);
  if (!searchPromise.ok) {
    throw new Error(`${searchPromise.status}: ${searchPromise.statusText}`);
  }
  const searchData = await searchPromise.json();
  // console.log("API fetch", searchData);
  return searchData;
};
