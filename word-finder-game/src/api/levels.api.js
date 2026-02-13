import { apiFetch } from "./client";

export function getLevels() {
  return apiFetch("/levels");
}

export function getLevelById(id) {
  return apiFetch(`/levels/${id}`);
}