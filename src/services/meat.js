import { API_BASE } from "../config/api";

export const GET_MEAL_BY_SEARCH = async ({ queryKey }) => {
  const query = queryKey[1];
  return await API_BASE.get(`search.php?s=${query}`);
};

export const GET_MEAL_DETAIL = async ({ queryKey }) => {
  const id = queryKey[1];
  return await API_BASE.get(`/lookup.php?i=${id}`);
};
