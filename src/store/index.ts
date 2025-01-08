import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ISidebarStore {
	sidebar: string
	toggleSidebar: (s: string) => void
}

export const useAppStore = create<ISidebarStore>()(
	persist(
		set => ({
			sidebar: 'NORMAL',
			toggleSidebar: (value: string) => {
				set({
					sidebar: value
				})
			}
		}),
		{
			name: 'sidebar-storage'
		}
	)
)
