import { useEffect } from 'react'
import { useThemeContext } from './contexts/theme/ThemeContext'

import Home from './pages/Home'

function App() {
  const { state } = useThemeContext()

  useEffect(() => {
    const html = document.querySelector('html')

    if (html) {
      html.dataset.theme = state.mode
    }
  }, [state.mode])

  return <Home />
}

export default App
