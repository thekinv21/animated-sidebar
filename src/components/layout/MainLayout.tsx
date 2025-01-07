import { Footer } from './footer'
import { Header } from './header'
import { Sidebar } from './sidebar'

interface IMainLayout {
	children: React.ReactNode
}

export function MainLayout({ children }: IMainLayout) {
	return (
		<section className='flex h-screen w-screen'>
			<Sidebar />
			<main>
				<Header />
				{children}
				<Footer />
			</main>
		</section>
	)
}
