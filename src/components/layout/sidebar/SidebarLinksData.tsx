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
		hasAuthority: ['admin', 'user']
	},
	{
		label: 'products',
		heading: 'product',
		url: '/product/:name',
		icon: <ShieldCheckIcon size={18} strokeWidth={2} />,
		subLinks: [
			{
				label: 'Flower Management',
				url: '/product/flower',
				icon: <UserRoundCheckIcon size={16} strokeWidth={2} />,
				hasAuthority: ['admin']
			},
			{
				label: 'Role Management',
				url: '/product/role',
				icon: <UserRoundCogIcon size={16} strokeWidth={2} />,
				hasAuthority: ['admin']
			}
		]
	},
	{
		label: 'flowers',
		heading: 'products',
		url: '/flowers',
		icon: <FlowerIcon size={18} strokeWidth={2} />,
		hasAuthority: ['user']
	},
	{
		label: 'settings',
		heading: 'preferences',
		url: '/settings',
		icon: <UserRoundCogIcon size={18} strokeWidth={2} />,
		subLinks: [
			{
				label: 'Profile',
				url: '/settings/profile',
				icon: <UserRoundCheckIcon size={16} strokeWidth={2} />
			},
			{
				label: 'Security',
				url: '/settings/security',
				icon: <UserRoundCogIcon size={16} strokeWidth={2} />
			}
		]
	},
	{
		label: 'support',
		url: '/support',
		icon: <ShieldCheckIcon size={18} strokeWidth={2} />,
		hasAuthority: ['user', 'admin']
	}
]
