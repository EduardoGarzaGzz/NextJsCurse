import { FC, useReducer } from 'react'
import { UIContext } from './UIContext'
import { uiReducer } from './uiReducer'

export interface UIState {
	sideMenuOpen: boolean,
	isAddingEntry: boolean,
	isDragging: boolean
	isLoading: boolean
}

const UI_INITIAL_STATE: UIState = {
	sideMenuOpen: false,
	isAddingEntry: false,
	isDragging: false,
	isLoading: false
}

export const UIProvider: FC = ( { children } ) => {
	const [ state, dispatch ] = useReducer( uiReducer, UI_INITIAL_STATE )

	return (
		<UIContext.Provider value={ {
			...state,
			openSideMenu: () => dispatch( { type: 'UI - Open Sidebar' } ),
			closeSideMenu: () => dispatch( { type: 'UI - Close Sidebar' } ),
			setIsAddingEntry: ( status ) => dispatch( { type: 'UI - Set isAddingEntry', payload: status } ),
			startDragging: () => dispatch( { type: 'UI - Star dragging' } ),
			endDragging: () => dispatch( { type: 'UI - End dragging' } ),
			changeLoading: ( loading ) => dispatch( { type: 'UI - Change loading', payload: loading } )
		} }>
			{ children }
		</UIContext.Provider>
	)
}
