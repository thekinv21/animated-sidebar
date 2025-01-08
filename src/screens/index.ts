import { lazy } from 'react'

const HomePage = lazy(() => import('./home/HomePage'))
const NotFoundPage = lazy(() => import('./error/NotFound'))

export { HomePage, NotFoundPage }
