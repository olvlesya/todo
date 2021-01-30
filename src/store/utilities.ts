import { stateType } from "../types/store";

const storeKey = "todos-state";

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(storeKey);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: stateType) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(storeKey, serializedState);
  } catch {
    // ignore write errors
  }
};
