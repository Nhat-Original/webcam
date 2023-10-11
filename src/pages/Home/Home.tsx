import { useWebCamContext } from '../../contexts/webCam/WebCamContext'

import Layout from '../../components/Layout'
import WebCam from './components/WebCam'
import WebCamController from './components/WebCamController'

const Home = () => {
  const { state } = useWebCamContext()

  return (
    <Layout>
      <main className="flex h-full w-full flex-col items-center justify-around p-4">
        {state.isWebCamOn ? (
          <WebCam />
        ) : (
          <div className="flex h-full max-h-[480px] min-h-0 w-full min-w-0 max-w-[640px] flex-col items-center justify-center bg-base-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-camera-video-off"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M10.961 12.365a1.99 1.99 0 0 0 .522-1.103l3.11 1.382A1 1 0 0 0 16 11.731V4.269a1 1 0 0 0-1.406-.913l-3.111 1.382A2 2 0 0 0 9.5 3H4.272l.714 1H9.5a1 1 0 0 1 1 1v6a1 1 0 0 1-.144.518l.605.847zM1.428 4.18A.999.999 0 0 0 1 5v6a1 1 0 0 0 1 1h5.014l.714 1H2a2 2 0 0 1-2-2V5c0-.675.334-1.272.847-1.634l.58.814zM15 11.73l-3.5-1.555v-4.35L15 4.269v7.462zm-4.407 3.56-10-14 .814-.58 10 14-.814.58z"
              />
            </svg>
            <p>Webcam is turned off</p>
          </div>
        )}
        <WebCamController />
      </main>
    </Layout>
  )
}

export default Home
