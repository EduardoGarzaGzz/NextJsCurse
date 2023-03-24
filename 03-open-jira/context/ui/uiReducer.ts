import { UIState } from './UIProvider'

type UIActionType =
	| { type: 'UI - Open Sidebar' }
	| { type: 'UI - Close Sidebar' }
	| { type: 'UI - Set isAddingEntry', payload: boolean }
	| { type: 'UI - Star dragging' }
	| { type: 'UI - End dragging' }
	| { type: 'UI - Change loading', payload: boolean }

export const uiReducer = ( state: UIState, action: UIActionType ): UIState => {
	switch ( action.type ) {
		case 'UI - Open Sidebar':
			return {
				...state,
				sideMenuOpen: true
			}
		case 'UI - Close Sidebar':
			return {
				...state,
				sideMenuOpen: false
			}
		case 'UI - Set isAddingEntry':
			return {
				...state,
				isAddingEntry: action.payload
			}
		case 'UI - Star dragging':
			return {
				...state,
				isDragging: true
			}
		case 'UI - End dragging':
			return {
				...state,
				isDragging: false
			}
		case 'UI - Change loading':
			return {
				...state,
				isLoading: action.payload
			}
		default:
			return state
	}
}
