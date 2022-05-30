import { FC, useReducer } from 'react'
import { UIContext }      from './UIContext'
import { uiReducer }      from './uiReducer'

export interface UIState {
	sideMenuOpen: boolean,
	isAddingEntry: boolean
}

const UI_INITIAL_STATE: UIState = {
	sideMenuOpen : false,
	isAddingEntry: false
}

export const UIProvider: FC = ( { children } ) => {
	const [ state, dispatch ] = useReducer( uiReducer, UI_INITIAL_STATE )

	return (
		<UIContext.Provider value={ {
			...state,
			openSideMenu    : () => dispatch( { type: 'UI - Open Sidebar' } ),
			closeSideMenu   : () => dispatch( { type: 'UI - Close Sidebar' } ),
			setIsAddingEntry: ( status ) => dispatch( { type: 'UI - Set isAddingEntry', payload: status } )
		} }>
			{ children }
		</UIContext.Provider>
	)
}
