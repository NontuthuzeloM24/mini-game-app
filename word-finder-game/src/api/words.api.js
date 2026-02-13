import { apiFetch } from "./client";

export function validateWord(word) {
  return apiFetch("/words/validate", {
    method: "POST",
    body: JSON.stringify({ word }),
  });
}