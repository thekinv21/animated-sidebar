import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'

import { IRoute } from '@/types'

import { MainLayout } from '@/components'
import { useRouters } from '@/routes/useRouters'

export default function ReactRouterProvider() {
	const { routes } = useRouters()

	return (
		<Suspense fallback={<div>Loading Page...</div>}>
			<BrowserRouter>
				<Routes>
					{routes.map((route: IRoute) => (
						<Route
							key={route.path}
							path={route.path}
							element={
								route.layout === 'default' ? (
									<MainLayout>{route.element}</MainLayout>
								) : (
									route.element
								)
							}
						/>
					))}
				</Routes>
			</BrowserRouter>
		</Suspense>
	)
}
