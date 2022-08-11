import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <>
      <h1>Default layout</h1>
      <Outlet />
    </>
  )
}
