import { createContext } from 'react'

interface ContextProps {
	sideMenuOpen: boolean,
	isAddingEntry: boolean,
	openSideMenu: () => void,
	closeSideMenu: () => void
	setIsAddingEntry: ( status: boolean ) => void
}

export const UIContext = createContext( {} as ContextProps )
