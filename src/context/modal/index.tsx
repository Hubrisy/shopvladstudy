import React, {
  createContext,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react"

export enum ModalType {
  "cart" = "cart",
}

interface ModalContextType {
  modal: ModalType | undefined
  setModal: Dispatch<SetStateAction<ModalType | undefined>>
}

const defaultModalState: ModalContextType = {
  modal: undefined,
  setModal: () => {},
}

const ModalContext = createContext<ModalContextType>(defaultModalState)

export const ModalContextProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [modal, setModal] = useState<ModalContextType["modal"]>(undefined)

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "scroll"
    }
  }, [modal])

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModalContext = () => useContext(ModalContext)
