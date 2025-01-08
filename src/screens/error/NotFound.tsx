import { Button } from '@/components/ui'

export default function NotFoundPage() {
	return (
		<section className='flex h-screen select-none items-center justify-center bg-white'>
			<div className='mx-auto max-w-screen-xl space-y-8 text-center'>
				<h1 className='text-[150px] uppercase text-gray-500'>404</h1>
				<p className='text-3xl uppercase tracking-tight text-gray-500 md:text-4xl'>
					Not Found !
				</p>
				<p className='max-w-sm text-base font-light text-gray-500 md:text-lg'>
					This page could not be found. Please check the URL or go back to the
				</p>

				<Button
					onClick={() => {
						window.location.href = '/'
					}}
					variant='link'
				>
					Back to Home
				</Button>
			</div>
		</section>
	)
}
