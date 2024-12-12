import type { SessionStorage } from "../types"
import { handleError } from "./error"

export const setToSessionStorage = (key: SessionStorage, value: string) => {
  try {
    sessionStorage.setItem(key, value)
  } catch (e) {
    handleError(e)
  }
}

export const getToSessionStorage = (key: SessionStorage) => {
  try {
    return sessionStorage.getItem(key)
  } catch (e) {
    handleError(e)
  }
}
