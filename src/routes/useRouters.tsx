import { HomePage, NotFoundPage } from '@/screens'
import { IRoute } from '@/types'

export const useRouters = () => {
	const routes: IRoute[] = [
		{
			path: '*',
			element: <NotFoundPage />,
			layout: 'blank'
		},

		{
			path: '/',
			element: <HomePage />,
			layout: 'default'
		}
	]

	return { routes }
}
