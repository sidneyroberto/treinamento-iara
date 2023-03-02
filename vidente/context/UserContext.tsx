import { createContext, ReactNode, useState } from 'react'

type UserContextType = {
  cityCode: number
  cityName: string
  setCityCode: (newState: number) => void
  setCityName: (newState: string) => void
}

const initialValue: UserContextType = {
  cityCode: 38802,
  cityName: 'Aquidauana-MS',
  setCityCode: () => {},
  setCityName: () => {},
}

export const UserContext = createContext(initialValue)

type Props = {
  children: ReactNode
}

export const UserContextProvider = ({ children }: Props) => {
  const [cityCode, setCityCode] = useState(initialValue.cityCode)
  const [cityName, setCityName] = useState(initialValue.cityName)

  return (
    <UserContext.Provider
      value={{ cityCode, cityName, setCityCode, setCityName }}
    >
      {children}
    </UserContext.Provider>
  )
}
