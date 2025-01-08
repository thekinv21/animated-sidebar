import { SidebarStatus } from '@/types/custom.enum'
import styles from './Sidebar.module.scss'

interface ISidebarLogo {
	sidebar: string
}

export function SidebarLogo({ sidebar }: ISidebarLogo) {
	return (
		<a
			href='/dashboard'
			className={
				sidebar === SidebarStatus.NORMAL ? styles.logo : styles.collapsed_logo
			}
		>
			{sidebar === SidebarStatus.NORMAL && (
				<>
					<img draggable={false} src='/vite.svg' className='h-8 w-8' />
					<h5 className='uppercase'>Logo</h5>
				</>
			)}
			{sidebar !== SidebarStatus.NORMAL && sidebar !== SidebarStatus.MOBILE && (
				<div className='flex items-center justify-center'>
					<img draggable={false} src='/vite.svg' className='h-8 w-8' />
				</div>
			)}
		</a>
	)
}
