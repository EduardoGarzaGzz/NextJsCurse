import { UiState } from "@/context/ui/UiProvider";

type UiReducerActionType = { type: '[UI] - ToggleMenu' }

export const UiReducer = ( state: UiState, action: UiReducerActionType ): UiState => {
	switch ( action.type ) {
		case '[UI] - ToggleMenu':
			return { ...state, isMenuOpen: !state.isMenuOpen }
		default:
			return state
	}
}
