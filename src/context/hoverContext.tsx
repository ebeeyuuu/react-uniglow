import React, { createContext, useState, useContext } from 'react'

type HoverContextType = {
  hoverStates: boolean[];
  setHoverState: (index: number, value: boolean) => void;
}

const HoverContext = createContext<HoverContextType | undefined>(undefined)

export const HoverProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hoverStates, setHoverStates] = useState<boolean[]>(Array(9).fill(false))

  const setHoverState = (index: number, value: boolean) => {
    setHoverStates(prev => {
      const newState = [...prev]
      newState[index] = value
      return newState
    })
  }

  return (
    <HoverContext.Provider value={{ hoverStates, setHoverState }}>
      {children}
    </HoverContext.Provider>
  )
}

export const useHover = () => {
  const context = useContext(HoverContext)
  if (context === undefined) {
    throw new Error('useHover ust be used within a HoverProvider')
  }
  return context
}