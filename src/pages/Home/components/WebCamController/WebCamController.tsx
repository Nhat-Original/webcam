import { useCallback } from 'react'

import {
  useWebCamContext,
  webCamActions,
} from '../../../../contexts/webCam/WebCamContext'

const WebCamController = () => {
  const { state, dispatch } = useWebCamContext()

  const capture = useCallback(() => {
    const imageSrc = state.webCamRef?.current?.getScreenshot()

    if (imageSrc) {
      const a = document.createElement('a')
      a.href = imageSrc
      a.download = 'web-cam-shot.png'
      a.click()
    }
  }, [state.webCamRef])

  return (
    <div className="flex w-full min-w-0 max-w-[640px] justify-between ">
      <div className="flex items-center gap-4">
        <label>Off/On</label>
        <input
          type="checkbox"
          className="toggle toggle-lg"
          checked={state.isWebCamOn}
          onChange={() => dispatch(webCamActions.toggleWebCam())}
        />
      </div>
      <div className="flex items-center gap-4">
        <label>Mirrored?</label>
        <input
          type="checkbox"
          className="toggle toggle-lg"
          checked={state.isMirrored}
          onChange={() => dispatch(webCamActions.toggleMirrored())}
        />
      </div>
      <div>
        <button className="btn btn-neutral btn-sm" onClick={capture}>
          Take Photo
        </button>
      </div>
    </div>
  )
}

export default WebCamController
