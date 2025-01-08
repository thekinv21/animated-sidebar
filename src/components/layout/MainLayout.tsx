import { domAnimation, LazyMotion } from 'motion/react'

import styles from './MainLayout.module.scss'
import { Sidebar } from './sidebar/Sidebar'

interface IMainLayout {
	children: React.ReactNode
}

export function MainLayout({ children }: IMainLayout) {
	return (
		<LazyMotion features={domAnimation}>
			<section className='relative'>
				<div className={styles.main_layout}>
					<>
						<Sidebar />
					</>

					<div className={styles.container}>
						<main id='screen_content' className={styles.content}>
							{children}
						</main>
					</div>
				</div>
			</section>
		</LazyMotion>
	)
}
