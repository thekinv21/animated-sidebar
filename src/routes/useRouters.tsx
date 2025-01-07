import { HomePage } from '@/screens'
import { IRoute } from '@/types'

export const useRouters = () => {
	const routes: IRoute[] = [
		{
			path: '*',
			element: <div>Not Found Page</div>,
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
