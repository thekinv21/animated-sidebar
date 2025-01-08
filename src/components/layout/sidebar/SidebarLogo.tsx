import { SidebarStatus } from '@/types/custom.enum'
import styles from './Sidebar.module.scss'

interface ISidebarLogo {
	sidebar: string
}

export function SidebarLogo({ sidebar }: ISidebarLogo) {
	return (
		<a href='/dashboard' className={styles.logo}>
			{sidebar === SidebarStatus.NORMAL ? (
				<img draggable={false} src='/vite.svg' className='h-10 w-10' />
			) : null}
			{sidebar === SidebarStatus.NORMAL ? (
				<h5>Logo</h5>
			) : (
				<>
					{sidebar === SidebarStatus.MOBILE ? null : (
						<h5 className='w-full text-center'>L</h5>
					)}
				</>
			)}
		</a>
	)
}
