import type { Dispatch, PropsWithChildren, Reducer, RefObject } from 'react'
import { useReducer, createContext, useMemo, useContext } from 'react'
import ReactWebCam from 'react-webcam'

type WebCamState = {
  isWebCamOn: boolean
  isMirrored: boolean
  webCamRef: RefObject<ReactWebCam> | null
}
type WebCamAction = {
  type: string
  payload?: any
}
type WebCamContextValue = {
  state: WebCamState
  dispatch: Dispatch<WebCamAction>
}

const WebCamContext = createContext({})

const initialState: WebCamState = {
  isWebCamOn: false,
  isMirrored: false,
  webCamRef: null,
}

const reducer: Reducer<WebCamState, WebCamAction> = (state, action) => {
  switch (action.type) {
    case 'isWebCamOn/toggle_isWebCamOn': {
      return { ...state, isWebCamOn: !state.isWebCamOn }
    }
    case 'isMirrored/toggle_isMirrored': {
      return { ...state, isMirrored: !state.isMirrored }
    }
    case 'webCamRef/set_webCamRef': {
      return { ...state, webCamRef: action.payload }
    }
    default: {
      return state
    }
  }
}

const WebCamProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const contextValue = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])

  return (
    <WebCamContext.Provider value={contextValue}>
      {children}
    </WebCamContext.Provider>
  )
}

const webCamActions = {
  toggleWebCam: () => {
    return {
      type: 'isWebCamOn/toggle_isWebCamOn',
    }
  },
  toggleMirrored: () => {
    return {
      type: 'isMirrored/toggle_isMirrored',
    }
  },
  setWebCamRef: (webCamRef: RefObject<ReactWebCam>) => {
    return {
      type: 'webCamRef/set_webCamRef',
      payload: webCamRef,
    }
  },
}

const useWebCamContext = (): WebCamContextValue =>
  useContext(WebCamContext) as WebCamContextValue

export default WebCamProvider
export { useWebCamContext, webCamActions }
