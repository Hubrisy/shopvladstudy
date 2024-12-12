export const setStorage = (value: string) => {
  sessionStorage.setItem("key", value)
}

export const getStorage = () => {
  return sessionStorage.getItem("key")
}
