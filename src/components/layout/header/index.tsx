import { MenuIcon, SearchIcon } from 'lucide-react'

export function Header() {
	return (
		<header className='z-50 xl:ml-[248px] sticky top-0"'>
			<div className='w-full bg-white/90 backdrop-blur-lg md:px-6 px-[15px] py-3 border-b'>
				<div className='flex justify-between items-center h-full'>
					<div className='flex items-center md:gap-6 gap-3'>
						<button className='relative group  disabled:cursor-not-allowed opacity-50'>
							<MenuIcon />
						</button>

						<div>
							<button className='inline-flex gap-2 my-2 items-center text-default-600 text-sm opacity-80'>
								<span>
									<SearchIcon className='w-4 h-4' />
								</span>
								<span className=' md:block hidden'> Search...</span>
							</button>
						</div>
					</div>

					<div className='nav-tools flex items-center  gap-2'>nav-tools</div>
				</div>
			</div>
		</header>
	)
}
