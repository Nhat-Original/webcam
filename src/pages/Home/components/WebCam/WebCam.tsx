import { useEffect, useRef } from 'react'
import ReactWebCam from 'react-webcam'

import {
  useWebCamContext,
  webCamActions,
} from '../../../../contexts/webCam/WebCamContext'

const WebCam = () => {
  const { state, dispatch } = useWebCamContext()
  const webCamRef = useRef<ReactWebCam>(null)

  useEffect(() => {
    if (webCamRef) {
      dispatch(webCamActions.setWebCamRef(webCamRef))
    }
  }, [webCamRef])

  return (
    <ReactWebCam
      audio={false}
      screenshotFormat="image/png"
      mirrored={state.isMirrored}
      ref={webCamRef}
    ></ReactWebCam>
  )
}

export default WebCam
