import { createContext } from 'react'

interface ContextProps {
	sideMenuOpen: boolean,
	isAddingEntry: boolean,
	isDragging: boolean,
	openSideMenu: () => void,
	closeSideMenu: () => void,
	startDragging: () => void,
	endDragging: () => void,
	setIsAddingEntry: ( status: boolean ) => void,
	changeLoading: ( loading: boolean ) => void
}

export const UIContext = createContext( {} as ContextProps )
