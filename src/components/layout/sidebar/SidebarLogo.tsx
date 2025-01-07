export function SidebarLogo() {
	return (
		<aside className='px-4 py-4'>
			<div className='flex items-center'>
				<div className='flex flex-1 items-center gap-x-3'>
					<img src='/react.svg' className='h-8 w-8 text-[#e11d48]' />
					<div className='flex-1 text-xl text-[#e11d48] font-semibold'>
						React Sidebar
					</div>
				</div>
			</div>
		</aside>
	)
}
