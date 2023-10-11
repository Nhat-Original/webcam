import type { PropsWithChildren } from 'react'

import useWindowDimensions from '../../hooks/useWindowDimensions'

import MobileLayout from './components/MobileLayout'
import DesktopLayout from './components/DesktopLayout'

const Layout = ({ children }: PropsWithChildren) => {
  const { width } = useWindowDimensions()

  if (width < 768) return <MobileLayout>{children}</MobileLayout>

  return <DesktopLayout>{children}</DesktopLayout>
}

export default Layout
