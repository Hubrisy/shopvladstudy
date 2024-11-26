import type { SessionStorage } from "../types"
import { handleError } from "./error"

export const setStorage = (key: SessionStorage, value: string) => {
  try {
    sessionStorage.setItem(key, value)
  } catch (e) {
    handleError(e)
  }
}

export const getStorage = (key: SessionStorage) => {
  try {
    return sessionStorage.getItem(key)
  } catch (e) {
    handleError(e)
  }
}
