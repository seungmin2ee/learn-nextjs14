import { API_URL } from "../app/constants";

export async function getMovies() {
  const res = await fetch(API_URL);
  const json = await res.json();

  return json;
}
