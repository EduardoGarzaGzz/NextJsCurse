import React, { FC, useReducer } from "react";
import { UiContext } from "@/context/ui/UiContext";
import { UiReducer } from "@/context/ui/uiReducer";

export interface UiState {
	isMenuOpen: boolean
}

const UI_INITIAL_STATE: UiState = {
	isMenuOpen: false
}

interface Props {
	children?: React.ReactNode
}

export const UiProvider: FC<Props> = ( { children } ) => {
	const [ state, dispatch ] = useReducer( UiReducer, UI_INITIAL_STATE )

	const toggleSideMenu = () => dispatch( { type: '[UI] - ToggleMenu' } )

	return (
		<UiContext.Provider value={ {
			...state,
			toggleSideMenu
		} }>
			{ children }
		</UiContext.Provider>
	)
}
