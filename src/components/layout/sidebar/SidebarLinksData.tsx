import {
	FlowerIcon,
	LayoutDashboardIcon,
	ShieldCheckIcon,
	UserRoundCheckIcon,
	UserRoundCogIcon
} from 'lucide-react'

export interface ISidebarLink {
	heading?: string
	label: string
	url: string
	icon: JSX.Element
	subLinks?: ISidebarSubLink[]
	hasAuthority?: string[]
}

export interface ISidebarSubLink {
	label: string
	url: string
	icon: JSX.Element
	hasAuthority?: string[]
}

export const sidebarLinks: ISidebarLink[] = [
	{
		label: 'dashboard',
		url: '/',
		icon: <LayoutDashboardIcon size={18} strokeWidth={2} />,
		hasAuthority: []
	},
	{
		label: 'admin',
		heading: 'admin',
		url: '/admin/:name',
		icon: <ShieldCheckIcon size={18} strokeWidth={2} />,
		subLinks: [
			{
				label: 'user',
				url: '/user',
				icon: <UserRoundCheckIcon size={16} strokeWidth={2} />
			},
			{
				label: 'role',
				url: '/role',
				icon: <UserRoundCogIcon size={16} strokeWidth={2} />
			}
		]
	},

	{
		label: 'flowers',
		url: '/flowers',
		heading: 'products',
		icon: <FlowerIcon size={18} strokeWidth={2} />,
		hasAuthority: []
	}
]
