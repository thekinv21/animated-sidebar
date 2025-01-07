import styles from './Sidebar.module.scss'
import { SidebarLogo } from './SidebarLogo'
import { SidebarMenu } from './SidebarMenu'

export function Sidebar() {
	return (
		<div className={styles.sidebar}>
			<SidebarLogo />
			<div
				data-orientation='horizontal'
				role='none'
				className='shrink-0 border-b h-[1px] w-full'
			></div>
			<SidebarMenu />
		</div>
	)
}
