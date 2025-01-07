import styles from './Sidebar.module.scss'
import { SidebarLogo } from './SidebarLogo'
import { SidebarMenu } from './SidebarMenu'

export function Sidebar() {
	return (
		<div className={styles.sidebar}>
			<SidebarLogo />
			<SidebarMenu />
		</div>
	)
}
