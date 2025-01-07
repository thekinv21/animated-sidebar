export interface IRoute {
	path: string
	element: React.ReactNode
	layout?: string
	hasAuthority?: string[]
}
