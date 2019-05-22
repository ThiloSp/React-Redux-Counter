import { INCREMENT, DECREMENT } from "./action-types";

// two different ways to write them – as a function and as an arrow:
export function increment() {
  return { type: INCREMENT };
}

export const decrement = () => ({ type: DECREMENT });
