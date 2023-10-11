import type { Dispatch, PropsWithChildren, Reducer } from 'react'
import { useReducer, createContext, useMemo, useContext } from 'react'

type ThemeState = {
  mode: '' | 'dark' | 'light'
}
type ThemeAction = {
  type: string
  payload?: any
}
type ThemeContextValue = {
  state: ThemeState
  dispatch: Dispatch<ThemeAction>
}

const ThemeContext = createContext({})

const initialState: ThemeState = {
  mode: (() => {
    const mode = localStorage.getItem('theme-mode')

    if (mode === 'dark' || mode === 'light' || mode === '') {
      return mode
    } else {
      localStorage.setItem('theme-mode', '')
      return ''
    }
  })(),
}

const reducer: Reducer<ThemeState, ThemeAction> = (state, action) => {
  switch (action.type) {
    case 'mode/choose_mode': {
      localStorage.setItem('theme-mode', action.payload)
      return { ...state, mode: action.payload }
    }
    default: {
      return state
    }
  }
}

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const contextValue = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

const themeActions = {
  chooseMode: (payload: '' | 'dark' | 'light') => {
    return {
      type: 'mode/choose_mode',
      payload: payload,
    }
  },
}

const useThemeContext = (): ThemeContextValue =>
  useContext(ThemeContext) as ThemeContextValue

export default ThemeProvider
export { useThemeContext, themeActions }
