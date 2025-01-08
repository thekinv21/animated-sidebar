import {
	FlowerIcon,
	LayoutDashboardIcon,
	LockIcon,
	PhoneIncomingIcon,
	SettingsIcon,
	ShoppingCartIcon,
	UserRoundCheckIcon
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
	icon?: JSX.Element
	hasAuthority?: string[]
}

export const sidebarLinks: ISidebarLink[] = [
	{
		label: 'dashboard',
		url: '/',
		icon: <LayoutDashboardIcon size={18} strokeWidth={2} />,
		hasAuthority: ['ADMIN', 'USER']
	},
	{
		label: 'products',
		heading: 'product',
		url: '/product/:name',
		icon: <ShoppingCartIcon size={18} strokeWidth={2} />
	},
	{
		label: 'flowers',
		heading: 'Managements',
		url: '/flowers',
		icon: <FlowerIcon size={18} strokeWidth={2} />,
		hasAuthority: ['USER'],
		subLinks: [
			{
				label: 'Flower Management',
				url: '/product/flower',
				hasAuthority: ['ADMIN']
			}
		]
	},
	{
		label: 'settings',
		heading: 'preferences',
		url: '/settings',
		icon: <SettingsIcon size={18} strokeWidth={2} />,
		subLinks: [
			{
				label: 'Profile',
				url: '/settings/profile',
				icon: <UserRoundCheckIcon size={16} strokeWidth={2} />
			},
			{
				label: 'Security',
				url: '/settings/security',
				icon: <LockIcon size={16} strokeWidth={2} />
			}
		]
	},
	{
		label: 'support',
		url: '/support',
		icon: <PhoneIncomingIcon size={18} strokeWidth={2} />,
		hasAuthority: ['USER', 'ADMIN']
	}
]
