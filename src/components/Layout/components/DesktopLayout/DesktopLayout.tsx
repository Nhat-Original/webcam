import type { PropsWithChildren } from 'react'

import SideBar from '../../../SideBar'

const DesktopLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex h-screen w-screen flex-row">
      <SideBar />

      {children}
    </div>
  )
}

export default DesktopLayout
