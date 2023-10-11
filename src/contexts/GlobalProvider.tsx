import type { PropsWithChildren } from 'react'

import WebCamProvider from './webCam/WebCamContext'
import ThemeProvider from './theme/ThemeContext'

const GlobalProvider = ({ children }: PropsWithChildren) => {
  return (
    <WebCamProvider>
      <ThemeProvider>
        {/*O__O*/}
        {children}
      </ThemeProvider>
    </WebCamProvider>
  )
}

export default GlobalProvider
