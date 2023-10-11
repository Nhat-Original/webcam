import type { SyntheticEvent } from 'react'

import {
  useThemeContext,
  themeActions,
} from '../../contexts/theme/ThemeContext'

const SideBar = () => {
  const { state, dispatch } = useThemeContext()

  const handleModeChange = (e: SyntheticEvent<HTMLSelectElement, Event>) => {
    const mode = e.currentTarget.value as '' | 'dark' | 'light'
    dispatch(themeActions.chooseMode(mode))
  }

  return (
    <ul className="flex min-h-full w-80 min-w-[20rem] flex-col justify-between bg-base-200 p-4 text-base-content">
      <li>
        <label>Theme mode:</label>
        <select
          className="select select-bordered w-full max-w-xs"
          value={state.mode}
          onChange={handleModeChange}
        >
          <option value="light">Light ☀️</option>
          <option value="dark">Dark 🌙</option>
          <option value="">System default ⚙️</option>
        </select>
      </li>

      <li>
        <h1>Follow me on:</h1>

        <ul>
          <li>
            <a href="https://www.facebook.com/nhat.hoangminh.397501">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://github.com/Nhat-Original">Github</a>
          </li>
        </ul>
      </li>
    </ul>
  )
}

export default SideBar
